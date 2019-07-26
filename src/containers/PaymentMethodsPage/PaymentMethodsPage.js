import React, { Component } from 'react';
import { bool } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { ensureCurrentUser } from '../../util/data';
import { propTypes } from '../../util/types';
import {
  createStripeCustomer,
  addPaymentMethod,
  deletePaymentMethod,
  updatePaymentMethod,
} from '../../ducks/paymentMethods.duck';
import { handleCardSetup } from '../../ducks/stripe.duck';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import {
  IconClose,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  Page,
  UserNav,
} from '../../components';
import { TopbarContainer } from '..';
import { PaymentMethodsForm } from '../../forms';
import { createStripeSetupIntent, loadData } from './PaymentMethodsPage.duck.js';

import css from './PaymentMethodsPage.css';

export class PaymentMethodsPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardSaved: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemovePaymentMethod = this.handleRemovePaymentMethod.bind(this);
  }

  handleSubmit = params => {
    const {
      onCreateSetupIntent,
      onHandleCardSetup,
      onCreateStripeCustomer,
      onAddPaymentMethod,
      onUpdatePaymentMethod,
      currentUser,
    } = this.props;

    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const stripeCustomer = ensuredCurrentUser.stripeCustomer;
    const hasSavedPaymentMethod = stripeCustomer.defaultPaymentMethod;

    const { stripe, card, formValues } = params;

    onCreateSetupIntent().then(setupIntent => {
      const setupIntentClientSecret =
        setupIntent && setupIntent.attributes ? setupIntent.attributes.clientSecret : null;

      const paymentParams = {
        payment_method_data: {
          billing_details: { name: formValues.name },
        },
      };

      const stripeParams = { stripe, card, setupIntentClientSecret, paymentParams };

      onHandleCardSetup(stripeParams)
        .then(result => {
          if (result.error) {
            console.log('handleCardSetup failed', result.error);
          } else {
            console.log('Success', result);
            console.log('currentUser', currentUser);
            if (!stripeCustomer) {
              console.log('Create Stripe customer');
              return onCreateStripeCustomer(result);
            } else if (!hasSavedPaymentMethod) {
              console.log('Add payment method');
              return onAddPaymentMethod(result);
            } else {
              console.log('Update payment method');
              return onUpdatePaymentMethod(result);
            }
          }
        })
        .then(result => {
          this.setState({
            creditCardSaved: true,
          });
          console.log('Result', result);
        });
    });
  };

  handleRemovePaymentMethod = () => {
    const { onDeletePaymentMethod } = this.props;
    onDeletePaymentMethod().then(() => {
      this.setState({
        creditCardSaved: false,
      });
    });
  };

  render() {
    const { currentUser, scrollingDisabled, intl } = this.props;

    const tabs = [
      {
        text: <FormattedMessage id="PaymentMethodsPage.contactDetailsTabTitle" />,
        selected: false,
        linkProps: {
          name: 'ContactDetailsPage',
        },
      },
      {
        text: <FormattedMessage id="PaymentMethodsPage.passwordTabTitle" />,
        selected: false,
        linkProps: {
          name: 'PasswordChangePage',
        },
      },
      {
        text: <FormattedMessage id="PaymentMethodsPage.paymentsTabTitle" />,
        selected: false,
        linkProps: {
          name: 'PayoutPreferencesPage',
        },
      },
      {
        text: <FormattedMessage id="PaymentMethodsPage.paymentMethodsTabTitle" />,
        selected: true,
        linkProps: {
          name: 'PaymentMethodsPage',
        },
      },
    ];

    const title = intl.formatMessage({ id: 'PaymentMethodsPage.title' });

    const ensuredCurrentUser = ensureCurrentUser(currentUser);
    const currentUserLoaded = !!ensuredCurrentUser.id;
    const stripeCustomer = ensuredCurrentUser.stripeCustomer;

    // Get first and last name of the current user and use it in the StripePaymentForm to autofill the name field
    const userName = currentUserLoaded
      ? `${ensuredCurrentUser.attributes.profile.firstName} ${
          ensuredCurrentUser.attributes.profile.lastName
        }`
      : null;

    const initalValuesForStripePayment = { name: userName, country: 'FI' };

    let hasSavedPaymentMethod = this.state.creditCardSaved;

    if (stripeCustomer && stripeCustomer.deletePaymentMethod) {
      hasSavedPaymentMethod = true;
    }

    const paymentMethodPlaceholder = intl.formatMessage(
      { id: 'PaymentMethodsPage.savedPaymentMethodPlaceholder' },
      { lastFour: '1234' }
    );

    return (
      <Page title={title} scrollingDisabled={scrollingDisabled}>
        <LayoutSideNavigation>
          <LayoutWrapperTopbar>
            <TopbarContainer
              currentPage="PaymentMethodsPage"
              desktopClassName={css.desktopTopbar}
              mobileClassName={css.mobileTopbar}
            />
            <UserNav selectedPageName="PaymentMethodsPage" />
          </LayoutWrapperTopbar>
          <LayoutWrapperSideNav tabs={tabs} />
          <LayoutWrapperMain>
            <div className={css.content}>
              <h1 className={css.title}>
                <FormattedMessage id="PaymentMethodsPage.heading" />
              </h1>
              {!hasSavedPaymentMethod ? (
                <PaymentMethodsForm
                  className={css.paymentForm}
                  formId="PaymentMethodsForm"
                  initialValues={initalValuesForStripePayment}
                  onSubmit={this.handleSubmit} //TODO
                />
              ) : (
                <div onClick={this.handleRemovePaymentMethod} style={{ cursor: 'pointer' }}>
                  <div className={css.savedPaymentMethod}>
                    <span className={css.savedPaymentMethodTitle}>
                      <FormattedMessage id="PaymentMethodsPage.savedPaymentMethodTitle" />
                    </span>
                    <p>{paymentMethodPlaceholder}</p>
                  </div>
                  <div className={css.savedPaymentMethodDelete}>
                    <IconClose rootClassName={css.closeIcon} size="small" />
                    <FormattedMessage id="PaymentMethodsPage.deletePaymentMethod" />
                  </div>
                </div>
              )}
            </div>
          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSideNavigation>
      </Page>
    );
  }
}

PaymentMethodsPageComponent.defaultProps = {
  currentUser: null,
  createStripeAccountError: null,
};

PaymentMethodsPageComponent.propTypes = {
  currentUser: propTypes.currentUser,
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  return {
    currentUser,
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onHandleCardSetup: params => dispatch(handleCardSetup(params)),
  onCreateSetupIntent: params => dispatch(createStripeSetupIntent(params)),
  onCreateStripeCustomer: params => dispatch(createStripeCustomer(params)),
  onAddPaymentMethod: params => dispatch(addPaymentMethod(params)),
  onDeletePaymentMethod: params => dispatch(deletePaymentMethod(params)),
  onUpdatePaymentMethod: params => dispatch(updatePaymentMethod(params)),
});

const PaymentMethodsPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(PaymentMethodsPageComponent);

PaymentMethodsPage.loadData = loadData;

export default PaymentMethodsPage;
