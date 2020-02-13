import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
 } from '../../components';

import css from './FAQPage.css';


const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Crash Pads for Crashers"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'Crash Pads for Crashers',
        description: 'Booking a Crash Pad is easy.',
        name: 'For Crashers',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

          <LayoutWrapperMain className={css.staticPageWrapper}>
           <h1 className={css.pageTitle}>It's been a hard day, finding a place to sleep shouldn't be. </h1>
         

           <div className={css.contentWrapper}>

 	      <div className={css.contentMain}>


        <p>
          <h2>Why You Should Book a Crash Pad With Us</h2>
        </p>
        <p>
          Whether you just started at a new airline or you’re changing domiciles, we’ve been there. Commuting can be a challenging experience for any airline crew member. And except for someone walking up and taking your jump seat at the last minute, crash pads can be one of the least pleasant parts of commuting. Have you ever walked into a crash pad to discover its condition isn’t even close to the photos? Did the transportation, dining, or recreation options not match what was advertised? Wish you had a way to securely pay your monthly rent with a credit card?
        </p>

        <p>
          The first crash pad I ever booked in Denver was one headache after another. I had no idea where to start, so I just typed “crash pad Denver” into Google. I sorted through a long list of crash pads and started calling. Some were full, some were too far from the airport, and some had no transportation options (I didn’t have a car in Denver). When I finally found one that had a bed available, they asked me to send a picture of a paper check so they could use my routing and account number to automatically debit my bank for the rent every month. I remember thinking: <i>there has to be a better way</i>. <strong>There is a better way now, use FindaCrashPad.com to book your next stay!</strong>
        </p>

        <p>
          <b>FindaCrashPad.com</b> was built <i>by</i> crew members <i>for</i> crew members. Take a look at all the useful features that have been included to make booking a crash pad easy and worry free.
        </p> 
	
	<p><b>User Friendly Features:</b></p>
          <ul className={css.listorder}>
		 
			
			<p class="tab"><li classname={css.listorder}>Browse one of the largest online networks of crash pads across the U.S.</li></p>
          		<p class="tab"><li>Filter your searches criteria to find exactly what you&rsquo;re looking for</li></p>
          		<p class="tab"><li>See exactly where the crash pad is</li></p>
          		<p class="tab"><li>Instantly check to see if the crash pad has a bed available</li></p>
          		<p class="tab"><li>View multiple photos of the crash pad</li></p>
          		<p class="tab"><li>Read verified reviews from other crew members who have stayed there</li></p>
          		<p class="tab"><li>Securely pay your rent using one of the world&rsquo;s leading credit card processors</li></p>
		
		
          </ul>

      
   
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

export default FAQPage;
