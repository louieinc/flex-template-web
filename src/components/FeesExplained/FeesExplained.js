import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './FeesExplained.css';

const FeesExplained = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: January 18, 2020</p>

<p>
This is an overview of fees on FCP for creating a listing, accepting a booking request, and processing any booking renewals. These fees are also referenced in the Terms of Service and are deemed to be acceptable by your initial and continued use of the platform. 
</p>
<p> 
If you have questions at any time regarding fees, please email us at help@findacrashpad.com.
</p>
     

      <h2>Crash Pad Fees:</h2>

<ul>
      <p><li>
        No fees to list or view crash pads
FCP is not a venture-backed startup. It’s a bootstrapped platform built by two brothers to provide a much-needed service to a great industry. That said, we still think that every crew member should have the ability to list and view crash pads for FREE. There are absolutely no fees to list or view crash pads on FCP. Instead, we prefer to make money only when our users get something useful out of the platform as well - either finding a crash pad stay in or finding a crasher to stay in your crash pad. The only fee we charge is on reserved bookings, as well as an optional purchase to feature crash pads at the top of results. 

      </li></p>

     
      <p><li>
        Crash pad owners (Booking) Fees:
FCP retains 10% of each booking as a transaction fee. This amount is deducted from the booking total amount when you accept a booking request. Please make sure that you also included all local taxes, fees, and account for any other expenses in your listed price, because FCP does not and is not liable to pay for these. You are also responsible for reporting all income generated from crash pad bookings per government and local regulations and codes. We may withhold a booking transaction in the event of a dispute or other event per the Terms of Service.

      </li></p>

     
      <p><li>
        Crew members (Booking) Fees:
For a crew member booking a pad, there are no fees! You can view and book pads with no added fees from FCP. All booking requests will automatically expire 24 hours after being sent if not accepted by the crash pad listing owner. In the event of a dispute or other event, the transaction amount may be withheld per the Terms of Service.
      </li></p></ul>


<h2>Other Fees:</h2>
<ul><p><li>Fines for damage: We try to avoid all instances of damage, but in the rare event that damage to the crash pad property, equipment, or other takes place during the time period of the booking, the crew member (user booking) is directly responsible for these fees. As defined in the Terms of Service, the crew member is liable for this damage and FCP may collect this if required. It is encouraged for both the crash pad owner and crew member to work through this directly since it is usually best handled directly. Crash pads are also encouraged and in some instances required to have their own General Liability (GL) insurance policies per our Terms of Service for this very reason. If you need to report damage to your crash pad, equipment, or other at any time, please take the proper action to first contact any local authorities if necessary, your insurance provider, and also notify us immediately at help@findacrashpad.com.
</li></p></ul>



    </div>
  );
};

FeesExplained.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

FeesExplained.propTypes = {
  rootClassName: string,
  className: string,
};

export default FeesExplained;
