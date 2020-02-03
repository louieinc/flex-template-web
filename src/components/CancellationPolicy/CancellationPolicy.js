import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CancellationPolicy.css';

const CancellationPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: Updated January 18, 2020</p>

      <p>
        In all cases, crash pad owners may set cancellation policies that are specific to their own crash pads. If such a unique cancellation policy has been set by the crash pad owner, it will be contained within the listing’s description page. If a cancellation policy is not set by the crash pad owner, the following booking cancellation policy will apply.
      </p>

      <p>
       If a confirmed booking needs to be cancelled either by a crew member booking a crash pad or an owner, the following Booking Cancellation Policy will apply. We encourage the crew members and crash pad owners to communicate directly in the event of a cancellation as soon as possible and immediately notify help@findacrashpad.com to initiate a booking cancellation.
      </p>

      <p>
You must agree to this Booking Cancellation Policy as part of the FCP Terms of Service and Community Guidelines in order to use the FCP platform. If you do not agree to this policy, you must not use the platform.
      </p>
      <p>

FCP will initiate all refunds, fees or applicable payments in accordance with this policy. We also reserve the right to collect any fees for cancellations in accordance with this Booking Cancellation Policy.
      </p>

      <h3>Cancellations</h3>

     

      <p>
The only time the above Cancellation Policy fees may be waived or exemptions made is when mutually agreed upon by both parties in the booking agreement and FCP. We encourage both parties in booking agreements to communicate and work through any potential scheduling issues or cancellations directly and immediately. This ensures a mutually beneficial outcome in a timely manner. If a cancellation needs to be made, please also immediately notify help@findacrashpad.com.
      </p>

<h3>FCP Initiated Cancellations</h3>

      <p>
        In the event of extenuating circumstances, FCP may decide to cancel a booking and initiate a refund to both parties in accordance with the Booking Cancellation Policy outlined above. These circumstances may include knowledge of potential illegal activity or harm, risk or safety concerns, violation of Community Guidelines, or any other extenuating circumstance. FCP reserves the right to initiate this cancellation regardless of the basis for cancellation or effect of cancellation.
      </p>

<h3>Rescheduling</h3>

	<p>
When approved by FCP and both parties in the booking arrangement, a booking may be rescheduled if mutually agreed upon. The rescheduled booking must be the same duration as the original confirmed booking and also mutually agreed upon in a time period that complies with the above Cancellation Policy.
	</p>

<h3>Cancellation Policy Examples</h3>

	<p>
When approved by both parties in the booking agreement and FCP, the cancellation policy fees may be waived. We encourage both parties in booking agreements to communicate and work through any potential scheduling issues or cancellations directly and immediately. We cannot guarantee that an exemption will be granted and only provide them in unique circumstances. 
	</p>

<p>
As always, reach out to help@findacrashpad.com if you have any issues and we’ll get back to you as soon as possible.
</p>


    </div>
  );
};
CancellationPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

CancellationPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default CancellationPolicy;
