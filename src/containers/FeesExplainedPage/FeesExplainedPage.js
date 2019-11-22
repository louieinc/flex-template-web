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
  FeesExplained,
} from '../../components';
import config from '../../config';

import css from './FeesExplainedPage.css';

const FeesExplainedPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'FeesExplainedPage.privacyTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PrivacyPolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'FeesExplainedPage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'FeesExplainedPage.cgTabTitle' }),
      selected: false,
      linkProps: {
        name: 'CommunityGuidePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'FeesExplainedPage.cpTabTitle' }),
      selected: false,
      linkProps: {
        name: 'CancelPolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'FeesExplainedPage.feTabTitle' }),
      selected: true,
      linkProps: {
        name: 'FeesExplainedPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'FeesExplainedPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="FeesExplainedPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="FeesExplainedPage.heading" />
            </h1>
            <FeesExplained />
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

FeesExplainedPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const FeesExplainedPage = compose(
  connect(mapStateToProps),
  injectIntl
)(FeesExplainedPageComponent);

export default FeesExplainedPage;
