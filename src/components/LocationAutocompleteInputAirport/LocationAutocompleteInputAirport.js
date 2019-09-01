import React, { Component } from 'react';
import { func, object, shape, string } from 'prop-types';
import { Field } from 'react-final-form';
import { ValidationError } from '../../components';
import LocationAutocompleteInputImplAirport from './LocationAutocompleteInputImplAirport.js';

class LocationAutocompleteInputAirportComponent extends Component {
  render() {
    /* eslint-disable no-unused-vars */
    const { rootClassName, labelClassName, ...restProps } = this.props;
    const { input, label, meta, valueFromForm, ...otherProps } = restProps;
    /* eslint-enable no-unused-vars */

    const value = typeof valueFromForm !== 'undefined' ? valueFromForm : input.value;
    const locationAutocompleteProps = { label, meta, ...otherProps, input: { ...input, value } };
    const labelInfo = label ? (
      <label className={labelClassName} htmlFor={input.name}>
        {label}
      </label>
    ) : null;

    return (
      <div className={rootClassName}>
        {labelInfo}
        <LocationAutocompleteInputImplAirport {...locationAutocompleteProps} />
        <ValidationError fieldMeta={meta} />
      </div>
    );
  }
}

LocationAutocompleteInputAirportComponent.defaultProps = {
  rootClassName: null,
  labelClassName: null,
  type: null,
  label: null,
};

LocationAutocompleteInputAirportComponent.propTypes = {
  rootClassName: string,
  labelClassName: string,
  input: shape({
    onChange: func.isRequired,
    name: string.isRequired,
  }).isRequired,
  label: string,
  meta: object.isRequired,
};

export default LocationAutocompleteInputImplAirport;

export const LocationAutocompleteInputFieldAirport = props => {
  return <Field component={LocationAutocompleteInputAirportComponent} {...props} />;
};
