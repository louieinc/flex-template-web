import React, { Component } from 'react';
import { array, bool, func, number, object, objectOf, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import merge from 'lodash/merge';
import { propTypes } from '../../util/types';
import { HomeFeaturePanel } from '../../components';

import css from './SectionHomeFeature.css';

class SectionHomeFeature extends Component {
  constructor(props) {
    super(props);
    this.state = { isSearchFiltersPanelOpen: false };
  }




SectionHomeFeature.defaultProps = {
  className: null,
  rootClassName: null,
  listings: [],
  resultsCount: 0,
  pagination: null,
  searchParamsForPagination: {},
  primaryFilters: null,
  secondaryFilters: null,
};

SectionHomeFeature.propTypes = {
  className: string,
  rootClassName: string,

  urlQueryParams: object.isRequired,
  listings: array,
  searchInProgress: bool.isRequired,
  searchListingsError: propTypes.error,
  searchParamsAreInSync: bool.isRequired,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  onOpenModal: func.isRequired,
  onCloseModal: func.isRequired,
  onMapIconClick: func.isRequired,
  pagination: propTypes.pagination,
  searchParamsForPagination: object,
  showAsModalMaxWidth: number.isRequired,
  primaryFilters: objectOf(propTypes.filterConfig),
  secondaryFilters: objectOf(propTypes.filterConfig),
};

export default SectionHomeFeature;
