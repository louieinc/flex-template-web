import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [/*
  {
    id: 'default-lax',
    predictionPlace: {
      address: 'Los Angeles International Airport (LAX)',
      bounds: new LatLngBounds(new LatLng(34.03274352770715, -118.29854531857292), new LatLng(33.85308047229285, -118.51511268142708)),
    },
  },
  {
    id: 'default-jfk',
    predictionPlace: {
      address: 'John F. Kennedy International Airport (JFK)',
      bounds: new LatLngBounds(new LatLng(40.77015521, -73.70576419), new LatLng(40.5297492, -73.85423581)),
    },
  },
  {
    id: 'default-sfo',
    predictionPlace: {
      address: 'San Francisco International Airport (SFO)',
      bounds: new LatLngBounds(new LatLng(37.70763252770715, -122.26763767920961), new LatLng(37.52796947229285, -122.49445632079038)),
    },
  },
  {
    id: 'default-ord',
    predictionPlace: {
      address: 'O\'Hare International Airport (ORD)',
      bounds: new LatLngBounds(new LatLng(42.069831527707144, -87.78915772956607), new LatLng(41.89016847229285, -88.03084227043392)),
    },
  },
  {
    id: 'default-dca',
    predictionPlace: {
      address: 'Ronald Reagan Washington National Airport (DCA)',
      bounds: new LatLngBounds(new LatLng(38.94353315270715, -76.92812118661385), new LatLng(38.76387009729285, -77.15882806338615)),
    },
  },
*/];
