import React from "react";
import { string } from "prop-types";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import classNames from "classnames";
import { twitterPageURL } from "../../util/urlHelpers";
import config from "../../config";
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink
} from "../../components";

import css from "./Footer.css";

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: "Footer.goToFacebook" });
  const goToInsta = intl.formatMessage({ id: "Footer.goToInstagram" });
  const goToTwitter = intl.formatMessage({ id: "Footer.goToTwitter" });

  const fbLink = siteFacebookPage ? (
    <ExternalLink
      key="linkToFacebook"
      href={siteFacebookPage}
      className={css.icon}
      title={goToFb}
    >
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>


            <div className={css.extraLinks}>

              <div className={css.legalMatters}>
                <div className={css.tosAndPrivacy}>

                  
				  <div><NamedLink name="ContactUs" className={css.legalLink}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink></div>
				  
				  
				   <div><NamedLink name="AboutPage" className={css.legalLink}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink></div>
				  
                
                  
                  
                    
               
               
               </div>

            </div>



            <div className={css.extraLinks}>
              <div className={css.legalMatters}>
                <div className={css.tosAndPrivacy}>

                  <div>
                    <NamedLink name="ContactUs" className={css.legalLink}>
                      <FormattedMessage id="Footer.toContactPage" />
                    </NamedLink>
                  </div>

                  <div>
                    <NamedLink name="AboutPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.toAboutPage" />
                    </NamedLink>
                  </div>
                </div>
              </div>

              <div className={css.extraLinks}>
                <div className={css.legalMatters}>
                  <div className={css.tosAndPrivacy}>
                    <div>
                      <NamedLink
                        name="PrivacyPolicyPage"
                        className={css.legalLink}
                      >
                        <FormattedMessage id="Footer.privacyPolicy" />
                      </NamedLink>
                    </div>

                    <div>
                      <NamedLink
                        name="TermsOfServicePage"
                        className={css.legalLink}
                      >
                        <FormattedMessage id="Footer.termsOfUse" />
                      </NamedLink>
                    </div>

                    <div>
                      <NamedLink
                        name="CommunityGuidePage"
                        className={css.legalLink}
                      >
                        <FormattedMessage id="Footer.CommunityGuide" />
                      </NamedLink>
                    </div>

                    <div>
                      <NamedLink name="FeesExplained" className={css.legalLink}>
                        <FormattedMessage id="Fees Explained" />
                      </NamedLink>
                    </div>

                    <div>
                      <NamedLink
                        name="CancellationPolicy"
                        className={css.legalLink}
                      >
                        <FormattedMessage id="Cancellations" />
                      </NamedLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.copyrightAndTermsMobile}>
                <NamedLink
                  name="LandingPage" 
                  className={css.organizationCopyrightMobile}
                >
                  <FormattedMessage id="Footer.copyright" />
                </NamedLink>
                <div className={css.tosAndPrivacyMobile}>
                  <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                    <FormattedMessage id="Footer.privacy" />
                  </NamedLink>
                  <NamedLink
                    name="TermsOfServicePage"
                    className={css.termsMobile}
                  >
                    <FormattedMessage id="Footer.terms" />
                  </NamedLink>
                  <div>
                    <NamedLink
                      name="CommunityGuidePage"
                      className={css.legalLinkMobile}
                    >
                      <FormattedMessage id="Footer.CommunityGuide" />
                    </NamedLink>
                  </div>
                  <div>
                    <NamedLink
                      name="FeesExplained"
                      className={css.legalLinkMobile}
                    >
                      <FormattedMessage id="Fees Explained" />
                    </NamedLink>
                  </div>
                  <div>
                    <NamedLink
                      name="CancellationPolicy"
                      className={css.legalLinkMobile}
                    >
                      <FormattedMessage id="Cancellations" />
                    </NamedLink>
                  </div>
                </div>
              </div>


                  
				    <div><NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink></div>
				  
				     <div><NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink></div>
					
					<div><NamedLink name="CommunityGuidePage" className={css.legalLink}>
                    <FormattedMessage id="Footer.CommunityGuide" />
                  </NamedLink></div>
				  
				 	<div><NamedLink name="FeesExplained" className={css.legalLink}>
                    <FormattedMessage id="Fees Explained" />
                  </NamedLink></div> 
                
                    <div><NamedLink name="CancellationPolicy" className={css.legalLink}>
                    <FormattedMessage id="Cancellations" />
                  </NamedLink></div>             
               
               </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.termsMobile}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
              <div><NamedLink name="CommunityGuidePage" className={css.legalLinkMobile}>
                    <FormattedMessage id="Footer.CommunityGuide" />
                  </NamedLink></div>
                  <div><NamedLink name="FeesExplained" className={css.legalLinkMobile}>
                    <FormattedMessage id="Fees Explained" />
                  </NamedLink></div> 
                   <div><NamedLink name="CancellationPolicy" className={css.legalLinkMobile}>
                    <FormattedMessage id="Cancellations" />
                  </NamedLink></div> 



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Footer.defaultProps = {
  rootClassName: null,
  className: null
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired
};
