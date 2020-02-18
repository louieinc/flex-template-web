import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: Updated January 18, 2020</p>

      <p>
        This Privacy Policy explains how Silvan Enterprises, Inc. (“FCP” or “we”) collects, uses, and shares personal information. As used in this Privacy Policy, “you” may refer to either a user of FCP’s products or services (“Services”); or a person providing visiting our website, using our apps, or interacting with us. This Privacy Policy describes our use of information that identifies or might reasonably identify you (“personal information”).
      </p>

      <p>
        We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy. In some cases, we may provide you with additional notice, such as sending you an email notification. We encourage you to review the Privacy Policy whenever you use our Services or apps, or visit our website to understand how we use personal information and the ways you can help protect your privacy.
      </p>

      <p>
If you have questions about this Privacy Policy or our use of personal information, please email us at admin@findacrashpad.com. Your use of the website or Services constitutes your acceptance of our use of your personal information as described in this Privacy Policy.
      </p>

      <h2>Collection of Information</h2>

      <h3>Information You Provide Us</h3>

      <p>
We may collect and use personal information that you provide directly to us. The types of personal information we may collect when you provide it to us include your name, email or physical address, company information, payment information, pictures, descriptions of properties, and other information you choose to provide when completing your profile, listing a crash pad or renting a crash pad.
      </p>

<h3>No use for children under the age of 18</h3>

      <p>
        The Services are not intended for children under 18 years of age. If you are under 18, do not use or provide any personal information on or through the Services or about yourself to us. If you believe that we might have personal information from or about a child under 18, please email us immediately at admin@findacrashpad.com so that the information can be removed or returned, as applicable.
      </p>

<h3>Information We Collect Automatically When You Use our Services</h3>

<p>
When you access or use our Services, we automatically collect personal information and other information that may include:
<ul>

<li>Log Information<p className={css.tab}> We log personal information during use of our Services, including browser information, page views, IP addresses, and the website visited before navigating to our website to help us to improve our website and Services.</p></li>

<li>Information Collected by Cookies and Other Tracking Technologies <p className={css.tab}>We may use various technologies to collect information, including cookies. Cookies are small data files stored in device memory that help us to improve our users’ experience of our website and Services, identify popular features, and count visits. We may also collect information using web beacons (also known as “tracking pixels”). Web beacons are electronic images that may be used in our Services or emails to help deliver cookies, count visits, understand usage, and campaign effectiveness and determine whether an email has been opened and acted upon. If your browser is set not to accept cookies, you may not be able to use the website or Services.</p></li>
</ul>
</p>

<h3>Information We Collect From Other Sources</h3>

<p>
We may also obtain information from other sources and combine that with the information we collect through our website or Services. For example, when you create or log into your account through a social media site, we will have access to certain information from that site, such as your name and account information, in accordance with the authorization procedures determined by such social media sites except to the extent that your chosen social media platform allows you to disable this functionality. We may use publicly available tools, such as Google Analytics, to better understand users’ preferences. Collection of data by third-party tools are subject to their respective privacy policies.
</p>

      <h2>Use of Information</h2>
      <p >
     We may use personal information for various purposes, including to do the following:
<ul >
<li className={css.smallBullet}>Provide and deliver the Services, process transactions, and send you Service-related information, including confirmations and invoices;</li>
<li className={css.smallBullet}>Send you technical notices, updates, security alerts, support messages, and administrative messages;</li>
<li className={css.smallBullet}>Respond to your comments, questions, and requests, and provide customer service;</li>
<li className={css.smallBullet}>Provide, maintain, advertise, promote and improve our Services;</li>
<li className={css.smallBullet}>Facilitate communication among users of our Services;</li>
<li className={css.smallBullet}>Communicate with you about products, services, offers, promotions, and more about FCP and others;</li>
<li className={css.smallBullet}>Monitor and analyze trends, usage, and activities in connection with our Services;</li>
<li className={css.smallBullet}>Personalize and improve our Services and provide content or features through the Service that match user profiles or interests;</li>
<li className={css.smallBullet}>Link or combine with information we get from others to help understand your needs and provide you with better service; and</li>
<li className={css.smallBullet}>Carry out any other purpose for which the information was collected.</li>
</ul>
</p>

<p>
FCP is based in the United States, and the information we collect is governed by U.S. law. By accessing or using our Services or otherwise providing information to us, you understand and consent to the processing and transfer of information in the U.S. and other countries for the purposes set out in this Privacy Policy.
</p>

<h2>Sharing of Information</h2>

<p>
We may share personal information as follows or as otherwise described in this Privacy Policy:
<ul>
<li className={css.smallBullet}>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf as requested through the Services;</li>
<li className={css.smallBullet}>With third parties to provide marketing and promotional purposes on our behalf, provided that they have agreed to handle personal information in a manner consistent with this Privacy Policy;</li>
<li className={css.smallBullet}>In response to a request for information, if we believe disclosure is required by applicable law, regulation, or rule; or administrative, judicial, or other government order;</li>
<li className={css.smallBullet}>In connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company; and</li>
<li className={css.smallBullet}>Anonymized, Pseudonymized, and Aggregated Data
We may also anonymize or pseudonymize to remove any identifying attributes, or aggregate personal information with a sufficiently large number of other information such that it cannot reasonably be linked to you (“anonymized data”). We may use this anonymized data for both internal or public analyses or reporting, but will not identify you in the anonymized data without your consent.</li>
</ul>
</p>



    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
