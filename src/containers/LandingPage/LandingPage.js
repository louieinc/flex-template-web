import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import {
    Page,
    SectionHero,
    SectionHowItWorks,
    SectionLocations,
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
    SectionFeaturedListings
} from '../../components';
import { TopbarContainer } from '../../containers';

import facebookImage from '../../assets/saunatimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/saunatimeTwitter-600x314.jpg';
import css from './LandingPage.css';

export const LandingPageComponent = props => {
    const { history, intl, location, scrollingDisabled } = props;

    // Schema for search engines (helps them to understand what this page is about)
    // http://schema.org
    // We are using JSON-LD format
    const siteTitle = config.siteTitle;
    const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
    const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
    const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

    return (
        <Page
            className={css.root}
            scrollingDisabled={scrollingDisabled}
            contentType="website"
            description={schemaDescription}
            title={schemaTitle}
            facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
            twitterImages={[
                { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
            ]}
            schema={{
                '@context': 'http://schema.org',
                '@type': 'WebPage',
                description: schemaDescription,
                name: schemaTitle,
                image: [schemaImage],
            }}
        >
            <LayoutSingleColumn>
                <LayoutWrapperTopbar>
                    <TopbarContainer />
                </LayoutWrapperTopbar>

                <LayoutWrapperMain>
                    <div className={css.heroContainer}>
                        <SectionHero className={css.hero} history={history} location={location} />
                    </div>
                    <ul className={css.sections}>
                        <li className={css.section}>
                            <div className={css.sectionContentFirstChild}>
                                <SectionFeaturedListings />
                            </div>
                        </li>
                        <li className={css.section}>
                            <div className={css.sectionContent}>
                                <SectionLocations /> 
                            </div>
                        </li>

                        <li className={css.section}>
                            <div className={css.sectionContent}>
                                <p>
                                    Pilots and flight attendants often have little time to book flight crew crash pads when work keeps them away from home. They need a convenient way to search for the best, vacant, peer-reviewed crash pads to be their temporary homes.
                                </p>
                                <p>
                                    Crash pad owners can waste a lot of time and money maintaining different listings, fielding calls from crew members, sharing information and tracking down crash pad payments.
                                </p>
                                <p>
                                    FindaCrashPad.com is the first site to bring flight crews and crash pad owners together in one easy-to-use network to book, communicate and pay.
                                </p>
                            </div>
                        </li>
                        <li className={css.section}>
                            <div className={css.sectionContent}>
                                <SectionHowItWorks />
                            </div>
                        </li>
                    </ul>
                    
                </LayoutWrapperMain>
                <LayoutWrapperFooter>
                    <Footer />
                </LayoutWrapperFooter>
            </LayoutSingleColumn>
        </Page>
    );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
    scrollingDisabled: bool.isRequired,

    // from withRouter
    history: object.isRequired,
    location: object.isRequired,

    // from injectIntl
    intl: intlShape.isRequired,
};

const mapStateToProps = state => {
    return {
        scrollingDisabled: isScrollingDisabled(state),
    };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
    withRouter,
    connect(mapStateToProps),
    injectIntl
)(LandingPageComponent);

export default LandingPage;
