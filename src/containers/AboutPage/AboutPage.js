import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './About-Us-083119.jpg';

const AboutPage = () => { 
  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About FindaCrashPad.com',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Find or list the best crash pads in the best places.</h1>
          <img className={css.coverImage} src={image} alt="Finding the best crash pad." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"We wanted to create a modern platform to make it easy for the airline crew to quickly and easily find and book a crash pad" </p>
              <p>Joseph McElwee</p>
            </div>

            <div className={css.contentMain}>
              
              <p>
                Find a Crash Pad is an online community built by flight crew members who have stayed in crash pads all over the country. It’s a way to connect crash pad owners with the pilots and flight attendants who need to find quality crash pads without wasting a lot of time. 
              </p>

              <p>
                Co-founder Joseph McElwee is an airline pilot who remembers booking his first crash pad in Denver, a long process of searches and phone calls to find a place he could get to. When he finally found one with a bed available, the owner asked for a photo of a paper check to process rent payments. 
              </p>  

              <p>
		He knew there had to be a better way, which is what he and his brother Matthew have launched – a better way for crash pad owners and flight crew members to connect safely, book securely and save valuable time.         
              </p>
 
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;