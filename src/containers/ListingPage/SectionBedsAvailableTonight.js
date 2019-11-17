import React from 'react';
import { FormattedMessage } from 'react-intl';
import { richText } from '../../util/richText';

import css from './ListingPage.css';



const SectionBedsAvailableTonight = props => {
  const { timeSlots } = props;
  return timeSlots ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.bedsAvailableTonight" />
      </h2>
      <p className={css.description}>
        {richText(timeSlots[1].attributes.seats, {
          longWordMinLength: 100,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
  ) : null;
};

export default SectionBedsAvailableTonight;
