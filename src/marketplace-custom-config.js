/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'padcar',
    label: 'Crash Pad Car',
  },
  {
    key: 'wifi',
    label: 'Wireless Internet',
  },
  {
    key: 'cable',
    label: 'Cable TV',
  },
  {
    key: 'reserveready',
    label: 'Reserve Ready (less then 10 minutes to the airport)',
  },
  {
    key: 'fullkitchen',
    label: 'Full kitchen with cooking utensils',
  },
  {
    key: 'grill',
    label: 'Grill',
  },
  {
    key: 'washerdryer',
    label: 'Washer/Dryer',
  },
  {
    key: 'commonarea',
    label: 'Common Area',
  },
  {
    key: 'beddingprovided',
    label: 'Bedding Provided',
  },
  {
    key: 'cleaningservice',
    label: 'Cleaning Service',
  },
  {
    key: 'fitness',
    label: 'Fitness Equipment',
  },
  {
    key: 'keyless',
    label: 'Keyless Entry',
  },
  {
    key: 'reserveready',
    label: 'Reserve Ready (less than 60 minutes from the airport)',
  }
];

export const categories = [
  { key: 'neutral', label: 'Gender Neutral'},
  { key: 'male', label: 'Male Only' },
  { key: 'female', label: 'Female Only' }
  
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,

};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,


};