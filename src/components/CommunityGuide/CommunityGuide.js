import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CommunityGuide.css';

const CommunityGuide = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: January 18, 2020</p>
      <p>
        FindaCrashPad.com is building a secure and trusted marketplace to connect crash pad owners with the crew members that need their valuable service. As with any marketplace, we count on our responsible community for growth and access to more and more pad owners and crew members. Our primary focus is building trust and security within the FCP community and facilitating the transaction that is our namesake. These Community Guidelines are our attempt to set some rules for transactions within our marketplace, and we actively and rigorously enforce them. Any violations of these Community Guidelines will be taken seriously, investigated by our team and may result in the suspension or termination of an account that undertakes serious or ongoing and repeated violations. Fraudulent or illegal activity is reviewed with the utmost care and seriousness and may also result in civil or criminal legal action, if applicable. We reserve the right to edit or remove content on our site that violates these Community Guidelines or if we believe it adversely affects the integrity of the FCP marketplace or its users.

        Above all, be a decent human being and expect the same from your fellow community members. If anyone falls short of that bar, we’ll step in.
 
        These Community Guidelines are part of and use words and phrases that are identified in our Terms of Service. If you have any questions about these Community Guidelines or believe that a user has violated these Community Guidelines, please email us immediately at help@findacrashpad.com.
      </p>

      <h2>Crash Pads must:</h2>
      <p>
	<ol>
        <li>Comply with local laws, local zoning ordinances and tax laws at all times. FCP is not liable for ensuring compliance and it is the responsibility of crash pads and each listing owner to ensure all local laws, zoning ordinances, and also tax compliance are met. You must also legally report income generated from FCP to your business and it is your responsibility to do so. If you are responsible for charging local, sales or service taxes on services, you must also comply with these regulations.</li>
 
        <li>Accurately represent the appearance, pricing, and services of each crash pad. Most crew members and those looking to book your crash pad have not seen the crash pad in person, so be honest and clearly represent the crash pad and the services that you are offering. Do not misrepresent pricing or dishonestly make claims in any way. We will take proactive action if it is reported or discovered that you are misrepresenting your crash pad or the services that you offer.</li>
 
        <li>Only list and offer a crash pad that you have the necessary permission and authority to offer. For example, if you are leasing or sub-leasing a space and are not permitted to further offer it out, do not post it on FCP without the permission of the owner. Likewise, if temporary occupancy is not permitted by your condo association or other governing body, do not post it on FCP without special dispensation. If it is discovered that you are offering a crash pad on FCP that you do not have permission to offer, the listing will be immediately removed and your account may be subject to removal from our site.</li>
	</ol>      
	</p>

      <h2>Crew Members must:</h2>
      <p>
	<ol>
        <li>Comply with all crash pad rules, policies, and the booking agreement. All crew members and those that have booked a crash pad through FCP must only         use the crash pad as described by the crash pad listing owner, and as agreed upon in the booking agreement.</li>
 
        <li>Never engage in illegal or prohibited activity on crash pad premises. All local laws are enforceable and crash pad owners can notify authorities if         laws are being broken on their property.</li>
      </ol>      
	</p>

      <h2>Everyone must:</h2>
      <p>
	<ol>
        <li>Communicate honestly with others. FCP is, first and foremost, a marketplace and depends on the honesty, integrity, and best interest of everyone         that uses the platform. Only message others with the best intent in mind, do not make false claims, misrepresentations, do not engage in fraudulent         activity, and do not intentionally be deceitful.</li>
 
        <li>FCP is intended to be a marketplace for crew members to book crash pads and owners to offer their crash pads. Any transactions that are not intended         for this purpose, are misrepresented, have fraudulent intent, or otherwise deemed harmful to either user will be immediately reviewed and if                 fraudulent, legal action will be taken by FCP if deemed necessary. All users and transactions are also subject to the Terms of Service.</li>
	</ol>
      </p>
    </div>
  );
};

CommunityGuide.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

CommunityGuide.propTypes = {
  rootClassName: string,
  className: string,
};

export default CommunityGuide;
