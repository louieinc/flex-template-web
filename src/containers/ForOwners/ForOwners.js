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
          <h1 className={css.pageTitle}>All seats will be taken as this will be a completely full Crash Pad. </h1>
          <img className={css.coverImage} src={image} alt="Keep your Crash Pad Booked." />

 	   <div className={css.contentWrapper}>


 	      <div className={css.contentMain}>
              <p>
                <h2>Why List a Crash Pad with us?</h2>
              </p>
              <p>
                As a crash pad owner, you want to provide a safe, comfortable, quiet place to rest, and you want to fill beds. Every night that one of your beds goes vacant or you spend time fielding calls from crew members, you lose money.
              </p>

              <p>
                We provide you with every tool necessary in order to run your crash pad like a business. When a crew member books your crash pad, we’ll charge 10% of the bookings you get through FindaCrashPad.com – about what a property manager would charge for the same service – with no surprise fees or expenses.
              </p>

              <p>
                <strong><u>The Breakdown</u></strong>
              </p>

              <p>
                As a crash pad owner, you care about two things:
              </p>

                <ol>
                  <li>
                  Providing your crew members a safe, quiet place to rest before and after their trips.
                  </li>

                  <li>
                  Filling beds.
                  </li>
                </ol>

              <p>
                Vacancy costs you money. The beds in your crash pad are a perishable product, just like airline seats. If a plane pushes back from the gate with open seats, the airline loses that revenue. Every month one of your beds goes vacant is lost revenue you will never get back.
              </p>

              <p>
                List your crash pad with us for free. You&rsquo;ll get access to a rapidly growing online network of pilots and flight attendants looking for crash pads and you&rsquo;ll only pay for results. If you rent a bed for $200 and we find you a crewmember, you&rsquo;ll pay us a 10% commission and you&rsquo;ll receive $180 in revenue instead of losing out on the $200 <i>entirely</i>. This is exactly what you would pay a property manager for the same service. Click <strong><u><a href="/l/new">here</a></u></strong> to list your crash pad.
              </p>

              <p>
                <strong><u>Put Your Crash Pad on Autopilot</u></strong>
              </p>

              <p>
                If you want to run your crash pad like a business, you need to set yourself up for success. That means having the right tools and the right systems in place. Every time you have to contact a crewmember it costs time or money. Ask yourself:
              </p>

                <ul className={css.ulist}>

                <li>How often do you take phone calls from crewmembers just to see if your crash pad has a bed available?</li>
                <li>How much time do you spend finding crewmembers to boost your occupancy?</li>
                <li>How much time do you spend requesting or collecting payment from your tenants?</li>
                <li>How often do you take phone calls from crewmembers to give them directions to your crash pad? Or to tell them a door code? Or to remind them when rent is due?</li>

                </ul>

              <p>
                If you aren&rsquo;t taking these calls yourself then you are paying someone to do it for you. When you list on Find a Crash Pad, you can take advantage of a wide range of tools which will allow you to:
              </p>

                <ul className={css.ulist}>

                <li>List your crash pad for free</li>
                <li>Gain access to the largest online crash pad marketplace that allows pilots and flight attendants to browse crash pads for free</li>
                <li>Quickly mark beds in your crash pad as available or unavailable</li>
                <li>Book tenants through the website for time periods you designate in advance</li>
                <li>Reduce vacancy, boost occupancy, and maximize profit</li>
                <li>Accept rent via credit card using a secure, encrypted processing platform</li>
                <li>Send an automated list of instruction, rules, and FAQs for your crash pad to the tenant after they book</li>

                </ul>

              <p>
                Find a Crash Pad will save you time and money, so you can get back to doing the things you love. Click <strong><u><a href="/l/new">here</a></u></strong> to list your crash pad.
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
