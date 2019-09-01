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

import css from './ForOwners.css';
import image from './For-Owners-Resized.jpg';

const ForOwners = () => {
  // prettier-ignore 
  return (
    <StaticPage
      title="Crash Pad for Owners"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'Crash Pad for Owners',
        description: 'Put up your no vacancy sign',
        name: 'For Owners',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

         <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Put your Crash Pad on Autopilot</h1>
          <img className={css.coverImage} src={image} alt="Keep your Crash Pad Booked." />

 	   <div className={css.contentWrapper}>
            <div className={css.contentSide}>
               <h2>Why List a Crash Pad with us?</h2>
              </div>

 	      <div className={css.contentMain}>

              <p>
                As a crash pad owner, you want to provide a safe, comfortable, quiet place to rest, and you want to fill beds. Every night that one of your beds goes vacant or you spend time fielding calls from crew members, you lose money.
              </p>

              <p>
                We provide you with every tool necessary in order to run your crash pad like a business. When a crew member books your crash pad, we’ll charge 10% of the bookings you get through FindaCrashPad.com – about what a property manager would charge for the same service – with no surprise fees or expenses. 
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

export default ForOwners;

