import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
} from '../../components';

import css from './ForCrashers.css';
import image from './crasherImg.jpg';

const ForCrashers = () => {
  return (
    <StaticPage
      className={css.root}
      title="Host Intro"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HowTo',
        description: 'Renter walk-through',
        name: 'For Crashers',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <h1>Some content</h1>
          <img src={image} alt="My first ice cream." />
          <div>
            <NamedLink name="LandingPage">Go to home page</NamedLink> or
            <ExternalLink href="https://google.com">
              Go to Google
            </ExternalLink>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default ForCrashers;

