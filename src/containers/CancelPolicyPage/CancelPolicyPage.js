import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  CancelPolicy,
} from '../../components';
import config from '../../config';

import css from './CancelPolicyPage.css';

const CancelPolicyPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'CancelPolicyPage.privacyTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PrivacyPolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'CancelPolicyPage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'CancelPolicyPage.cgTabTitle' }),
      selected: false,
      linkProps: {
        name: 'CommunityGuidePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'CancelPolicyPage.cpTabTitle' }),
      selected: true,
      linkProps: {
        name: 'CancelPolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'CancelPolicyPage.feTabTitle' }),
      selected: false,
      linkProps: {
        name: 'FeesExplainedPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'CancelPolicyPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="CancelPolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="CancelPolicyPage.heading" />
            </h1>
            <CancelPolicy />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

CancelPolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const CancelPolicyPage = compose(
  connect(mapStateToProps),
  injectIntl
)(CancelPolicyPageComponent);

export default CancelPolicyPage;
