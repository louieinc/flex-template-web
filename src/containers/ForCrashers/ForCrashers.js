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
import image from './For-Crashers-Resized.jpg';

const ForCrashers = () => {
  // prettier-ignore  
  return (
    <StaticPage
      title="For Crashers"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'For Crashers',
        description: 'Booking a Crash Pad is easy.',
        name: 'For Crashers',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

          <LayoutWrapperMain className={css.staticPageWrapper}>
           <h1 className={css.pageTitle}>It's been a long day, finding a place to sleep shouldn't be hard.</h1>
          <img className={css.coverImage} src={image} alt="Relaxing at my Crash Pad." />
          
           <div className={css.contentWrapper}>
            <div className={css.contentSide}>
               <h2>Why Book with Us?</h2>
              </div>

 	      <div className={css.contentMain}>

              <p>
                Commuting can be challenging for any airline crew member, especially when you start at a new airline or change domiciles. Other than someone taking your jump seat at the last minute, finding a crash pad can be one of the least pleasant parts of commuting. 
              </p>

              <p>
                FindaCrashPad.com was built by crew members FOR crew members who are tired of searching multiple listings, being disappointed by bad pads or dealing with payment methods that can seem shady. 
              </p>  

              <p>
		We are making it easier.
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

export default ForCrashers;

