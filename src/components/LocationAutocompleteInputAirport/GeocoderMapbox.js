import { types as sdkTypes } from '../../util/sdkLoader';
import { userLocation } from '../../util/maps';
import config from '../../config';

const { LatLng: SDKLatLng, LatLngBounds: SDKLatLngBounds } = sdkTypes;

export const CURRENT_LOCATION_ID = 'current-location';

const GENERATED_BOUNDS_DEFAULT_DISTANCE = 500; // meters
// Distances for generated bounding boxes for different Mapbox place types
const PLACE_TYPE_BOUNDS_DISTANCES = {
  address: 500,
  country: 2000,
  region: 2000,
  postcode: 2000,
  district: 2000,
  place: 2000,
  locality: 2000,
  neighborhood: 2000,
  poi: 2000,
  'poi.landmark': 2000,
};

const locationBounds = (latlng, distance) => {
  if (!latlng) {
    return null;
  }
console.log(latlng); console.log(distance);
  const bounds = new window.mapboxgl.LngLat(latlng.lng, latlng.lat).toBounds(42000);
  return new SDKLatLngBounds(
    new SDKLatLng(bounds.getNorth(), bounds.getEast()),
    new SDKLatLng(bounds.getSouth(), bounds.getWest())
  );
};

const placeOrigin = prediction => { console.log(Array.isArray(prediction.center));
  if (prediction && Array.isArray(prediction.center) && prediction.center.length === 2) {
    // Coordinates in Mapbox features are represented as [longitude, latitude].
    return new SDKLatLng(prediction.center[1], prediction.center[0]);
  }
  return null;
};

const placeBounds = prediction => {
  if (prediction) {
    if (Array.isArray(prediction.bbox) && prediction.bbox.length === 4) {
      // Bounds in Mapbox features are represented as [minX, minY, maxX, maxY]
      return new SDKLatLngBounds(
        new SDKLatLng(prediction.bbox[3], prediction.bbox[2]),
        new SDKLatLng(prediction.bbox[1], prediction.bbox[0])
      );
    } else {
      // If bounds are not available, generate them around the origin

      // Resolve bounds distance based on place type
      const placeType = Array.isArray(prediction.place_type) && prediction.place_type[0];

      const distance =
        (placeType && PLACE_TYPE_BOUNDS_DISTANCES[placeType]) || GENERATED_BOUNDS_DEFAULT_DISTANCE;

      return locationBounds(placeOrigin(prediction), 10000);
    }
  }
  return null;
};

export const GeocoderAttribution = () => null;

/**
 * A forward geocoding (place name -> coordinates) implementation
 * using the Mapbox Geocoding API.
 */
class GeocoderMapbox {
  getClient() {
    const libLoaded = typeof window !== 'undefined' && window.mapboxgl && window.mapboxSdk;
    if (!libLoaded) {
      throw new Error('Mapbox libraries are required for GeocoderMapbox');
    }
    if (!this._client) {
      this._client = window.mapboxSdk({
        accessToken: window.mapboxgl.accessToken,
      });
    }
    return this._client;
  }

  // Public API
  //

  /**
   * Search places with the given name.
   *
   * @param {String} search query for place names
   *
   * @return {Promise<{ search: String, predictions: Array<Object>}>}
   * results of the geocoding, should have the original search query
   * and an array of predictions. The format of the predictions is
   * only relevant for the `getPlaceDetails` function below.
   */
  getPlacePredictions(search) {
    /*
    const limitCountriesMaybe = config.maps.search.countryLimit
      ? { countries: config.maps.search.countryLimit }
      : {};

    return this.getClient()
      .geocoding.forwardGeocode({
        query: search + ' airport',
        limit: 5,
        countries: ['us'],
        language: [config.locale],
        
        
      })
      .send()
      .then(response => {
        console.log(response.body.features);
        var airports = [];
        for(var i=0; i < response.body.features.length;i++){
          if(response.body.features[i].properties.category == 'airport'){
            airports.push(response.body.features[i]);
          }
        }
        return {
          search,
          predictions: airports,
        };
      });
      */
      var airports = [
      {"id":"1","place_name":"Hartsfield–Jackson Atlanta International Airport, Atlanta (ATL)","code":"ATL","city":"Atlanta","state":"GA","center":["-84.430732","33.6386055"]},
      {"id":"2","place_name":"Los Angeles International Airport, Los Angeles (LAX)","code":"LAX","city":"Los Angeles","state":"CA","center":["-118.406829","33.942912"]},
      {"id":"3","place_name":"O'Hare International Airport, Chicago (ORD)","code":"ORD","city":"Chicago","state":"IL","center":["-87.91","41.98"]},
      {"id":"4","place_name":"Dallas/Fort Worth International Airport, Dallas/Fort Worth (DFW)","code":"DFW","city":"Dallas/Fort Worth","state":"TX","center":["-97.039052","32.898067499999996"]},
      {"id":"5","place_name":"Denver International Airport, Denver (DEN)","code":"DEN","city":"Denver","state":"CO","center":["-104.673519","39.8557"]},
      {"id":"6","place_name":"John F. Kennedy International Airport, New York (JFK)","code":"JFK","city":"New York","state":"NY","center":["-73.78","40.65"]},
      {"id":"7","place_name":"San Francisco International Airport, San Francisco (SFO)","code":"SFO","city":"San Francisco","state":"CA","center":["-122.381047","37.617801"]},
      {"id":"8","place_name":"McCarran International Airport, Las Vegas (LAS)","code":"LAS","city":"Las Vegas","state":"NV","center":["-115.147142","36.0819075"]},
      {"id":"9","place_name":"Seattle–Tacoma International Airport, Seattle/Tacoma (SEA)","code":"SEA","city":"Seattle/Tacoma","state":"WA","center":["-122.305976","47.446239000000006"]},
      {"id":"10","place_name":"Charlotte Douglas International Airport, Charlotte (CLT)","code":"CLT","city":"Charlotte","state":"NC","center":["-80.94","35.22"]},
      {"id":"11","place_name":"Newark Liberty International Airport, New York/Newark (EWR)","code":"EWR","city":"New York/Newark","state":"NJ","center":["-74.173296","40.6927355"]},
      {"id":"12","place_name":"Orlando International Airport, Orlando (MCO)","code":"MCO","city":"Orlando","state":"FL","center":["-81.31","28.43"]},
      {"id":"13","place_name":"Phoenix Sky Harbor International Airport, Phoenix (PHX)","code":"PHX","city":"Phoenix","state":"AZ","center":["-112.008362","33.4346755"]},
      {"id":"14","place_name":"Miami International Airport, Miami (MIA)","code":"MIA","city":"Miami","state":"FL","center":["-80.284343","25.7944485"]},
      {"id":"15","place_name":"George Bush Intercontinental Airport, Houston (IAH)","code":"IAH","city":"Houston","state":"TX","center":["-95.3445645","29.985822"]},
      {"id":"16","place_name":"Logan International Airport, Boston (BOS)","code":"BOS","city":"Boston","state":"MA","center":["-71.01263800000001","42.364098"]},
      {"id":"17","place_name":"Minneapolis–Saint Paul International Airport, Minneapolis/St. Paul (MSP)","code":"MSP","city":"Minneapolis/St. Paul","state":"MN","center":["-93.21736200000001","44.8826385"]},
      {"id":"18","place_name":"Detroit Metropolitan Airport, Detroit (DTW)","code":"DTW","city":"Detroit","state":"MI","center":["-83.356523","42.207082"]},
      {"id":"19","place_name":"Fort Lauderdale–Hollywood International Airport, Fort Lauderdale (FLL)","code":"FLL","city":"Fort Lauderdale","state":"FL","center":["-80.14890700000001","26.072646"]},
      {"id":"20","place_name":"Philadelphia International Airport, Philadelphia (PHL)","code":"PHL","city":"Philadelphia","state":"PA","center":["-75.2411115","39.8747115"]},
      {"id":"21","place_name":"LaGuardia Airport, New York (LGA)","code":"LGA","city":"New York","state":"NY","center":["-73.87071","40.775069"]},
      {"id":"22","place_name":"Baltimore–Washington International Airport, Baltimore/Washington, D.C. (BWI)","code":"BWI","city":"Baltimore/Washington, D.C.","state":"MD","center":["-76.6688215","39.177718"]},
      {"id":"23","place_name":"Salt Lake City International Airport, Salt Lake City (SLC)","code":"SLC","city":"Salt Lake City","state":"UT","center":["-111.9795675","40.7875515"]},
      {"id":"24","place_name":"Ronald Reagan Washington National Airport, Washington, D.C. (DCA)","code":"DCA","city":"Washington, D.C.","state":"VA","center":["-77.043474625","38.853701625"]},
      {"id":"25","place_name":"Washington Dulles International Airport, Washington, D.C. (IAD)","code":"IAD","city":"Washington, D.C.","state":"VA","center":["-77.45183399999999","38.948387499999995"]},
      {"id":"26","place_name":"San Diego International Airport, San Diego (SAN)","code":"SAN","city":"San Diego","state":"CA","center":["-117.19548950000001","32.732917"]},
      {"id":"27","place_name":"Midway International Airport, Chicago (MDW)","code":"MDW","city":"Chicago","state":"IL","center":["-87.747394","41.786872"]},
      {"id":"28","place_name":"Tampa International Airport, Tampa (TPA)","code":"TPA","city":"Tampa","state":"FL","center":["-82.53","27.98"]},
      {"id":"29","place_name":"Daniel K. Inouye International Airport, Honolulu (HNL)","code":"HNL","city":"Honolulu","state":"HI","center":["-157.924827375","21.324117"]},
      {"id":"30","place_name":"Portland International Airport, Portland (PDX)","code":"PDX","city":"Portland","state":"OR","center":["-122.5953465","45.588344500000005"]},

      {"id":"31","place_name":"Ted Stevens Anchorage International Airport, Anchorage (ANC)","code":"ANC","city":"Anchorage","state":"AK","center":["-149.990163","61.1739835"]},
      {"id":"32","place_name":"Atlantic City International Airport, Atlantic City (ACY)","code":"ACY","city":"Atlantic City","state":"NJ","center":["-74.57247","39.451173"]},
      {"id":"32","place_name":"Baltimore/Washington International Thurgood Marshall Airport, Baltimore (BWI)","code":"BWI","city":"Baltimore","state":"MD","center":["-76.6688215","39.177718"]},
      {"id":"33","place_name":"Norfolk International Airport, Norfolk (ORF)","code":"ORF","city":"Norfolk","state":"VA","center":["-76.20294899999999","36.8966165"]},
      {"id":"34","place_name":"Raleigh-Durham International Airport, Raleigh-Durham (RDU)","code":"RDU","city":"Raleigh-Durham","state":"NC","center":["-78.79038","35.877103500000004"]},
      {"id":"35","place_name":"Ronald Reagan Washington National Airport, Washington, D.C. (DCA)","code":"DCA","city":"Washington","state":"DC","center":["-77.043474625","38.853701625"]},
      {"id":"36","place_name":"Charlotte Douglas International Airport, Charlotte (CLT)","code":"CLT","city":"Charlotte","state":"NC","center":["-80.9435335","35.2172495"]},
      {"id":"37","place_name":"Columbia Metropolitan Airport, Columbia (CAE)","code":"CAE","city":"Columbia","state":"SC","center":["-81.1224205","33.942051000000006"]},
      {"id":"38","place_name":"Nashville International Airport, Nashville (BNA)","code":"BNA","city":"Nashville","state":"TN","center":["-86.675772","36.128718"]},
      {"id":"39","place_name":"McGhee Tyson Airport, Knoxville (TYS)","code":"TYS","city":"Knoxville","state":"TN","center":["-83.9923505","35.8085765"]},
      {"id":"40","place_name":"Cincinnati/Northern Kentucky International Airport, Cincinnati (CVG)","code":"CVG","city":"Cincinnati","state":"KY","center":["-84.6620225","39.0510305"]},
      {"id":"41","place_name":"Cleveland Hopkins International Airport, Cleveland (CLE)","code":"CLE","city":"Cleveland","state":"OH","center":["-81.839222","41.410775"]},
      {"id":"42","place_name":"Dayton International Airport, Dayton (DAY)","code":"DAY","city":"Dayton","state":"OH","center":["-84.219934","39.90083"]},
      {"id":"43","place_name":"Indianapolis International Airport, Indianapolis (IND)","code":"IND","city":"Indianapolis","state":"IN","center":["-86.2961225","39.716093"]},
      {"id":"44","place_name":"Kansas City International Airport, Kansas City (MCI)","code":"MCI","city":"Kansas City","state":"MO","center":["-94.715057","39.2974715"]},
      {"id":"45","place_name":"William P. Hobby Airport, Houston (HOU)","code":"HOU","city":"Houston","state":"TX","center":["-95.27782300000001","29.6494905"]},
      {"id":"46","place_name":"Chicago Midway International Airport, Chicago (MDW)","code":"MDW","city":"Chicago","state":"IL","center":["-87.747394","41.786872"]},
      {"id":"47","place_name":"Austin-Bergstrom International Airport, Austin (AUS)","code":"AUS","city":"Austin","state":"TX","center":["-97.66880499999999","30.198323000000002"]},
      {"id":"48","place_name":"Daniel K. Inouye International Airport, Honolulu (HNL)","code":"HNL","city":"Honolulu","state":"HI","center":["-157.924827375","21.324117"]},
      {"id":"49","place_name":"Tucson International Airport, Tuscon (TUS)","code":"TUS","city":"Tuscon","state":"AZ","center":["-110.939462","32.118421999999995"]},
      {"id":"50","place_name":"Long Beach Airport, Long Beach (LGB)","code":"LGB","city":"Long Beach","state":"CA","center":["-118.144563","33.818512"]},
      {"id":"51","place_name":"Oakland International Airport, Oakland (OAK)","code":"OAK","city":"Oakland","state":"CA","center":["-122.2145556875","37.7148885625"]},
      {"id":"52","place_name":"Boise Airport, Boise (BOI)","code":"BOI","city":"Boise","state":"ID","center":["-116.22276600000001","43.5677745"]},
      {"id":"53","place_name":"Portland International Airport, Portland (PDX)","code":"PDX","city":"Portland","state":"OR","center":["-122.5953465","45.588344500000005"]},
      {"id":"54","place_name":"Ontario International Airport, Ontario (ONT)","code":"ONT","city":"Ontario","state":"CA","center":["-117.5976025","34.058172"]},
      {"id":"55","place_name":"Louisville International Airport, Louisville (SDF)","code":"SDF","city":"Louisville","state":"KY","center":["-85.73882925000001","38.179702250000005"]},
      {"id":"56","place_name":"General Mitchell International Airport, Milwaukee (MKE)","code":"MKE","city":"Milwaukee","state":"WI","center":["-87.8993475","42.947626"]},
      {"id":"57","place_name":"San Antonio International Airport, San Antonio (SAT)","code":"SAT","city":"San Antonio","state":"TX","center":["-98.471823","29.526844500000003"]},
      {"id":"58","place_name":"Savannah/Hilton Head International Airport, Savannah (SAV)","code":"SAV","city":"Savannah","state":"GA","center":["-81.2051715","32.131553"]},
      //{"id":"59","place_name":"San-Juan/Luis Muñoz-Marín Airport, San Juan (SJU)","code":"SJU","city":"San Juan","state":"PR","center":["-81.2051715","32.131553"]},
      {"id":"60","place_name":"John Wayne Airport, Santa Ana (SNA)","code":"SNA","city":"Santa Ana","state":"CA","center":["-117.8651955","33.677126"]},
      {"id":"61","place_name":"New York Stewart International Airport, Newburgh (SWF)","code":"SWF","city":"Newburgh","state":"NY","center":["-74.10260299999999","41.5013695"]},
      {"id":"62","place_name":"Hollywood Burbank Airport, Burbank (BUR)","code":"BUR","city":"Burbank","state":"CA","center":["-118.355794","34.198454999999996"]},
      {"id":"63","place_name":"Harrisburg International Airport, Harrisburg (MDT)","code":"MDT","city":"Harrisburg","state":"PA","center":["-76.7595515","40.1946575"]},
      {"id":"64","place_name":"T.F. Green Airport, Providence (PVD)","code":"PVD","city":"Providence","state":"RI","center":["-71.435465","41.725924"]},
      {"id":"65","place_name":"Tampa International Airport, Tampa (TPA)","code":"TPA","city":"Tampa","state":"FL","center":["-82.5352415","27.97744"]},
      {"id":"66","place_name":"Colorado Springs Airport, Colorado Spring (COS)","code":"COS","city":"Colorado Spring","state":"CO","center":["-104.70083575000001","38.80214075"]},
      {"id":"67","place_name":"Dallas Love Field Airport, Dallas (DAL)","code":"DAL","city":"Dallas","state":"TX","center":["-96.85067950000001","32.84657"]},
      {"id":"68","place_name":"Pittsburgh International Airport, Pittsburg (PIT)","code":"PIT","city":"Pittsburg","state":"PA","center":["-80.25635199999999","40.495909"]},
      {"id":"69","place_name":"John Glenn Columbus International Airport, Columbus (CMH)","code":"CMH","city":"Columbus","state":"OH","center":["-82.88830899999999","39.998005"]}


      ];
console.log(airports[1].code.toUpperCase().match(search.toUpperCase() , "w"));
      var results = [];
      for(var i=0;i<airports.length;i++){
        if(airports[i].place_name.toUpperCase().match(search.toUpperCase(), "w") != null ||
          airports[i].code.toUpperCase().match(search.toUpperCase(), "w") != null ||
          airports[i].city.toUpperCase().match(search.toUpperCase(), "w") != null){
          results.push(airports[i]);
        }
      }

      return {
          search,
          predictions: results,
        };
  }

  /**
   * Get the ID of the given prediction.
   */
  getPredictionId(prediction) {
    return prediction.id;
  }

  /**
   * Get the address text of the given prediction.
   */
  getPredictionAddress(prediction) {
    if (prediction.predictionPlace) {
      // default prediction defined above
      return prediction.predictionPlace.address;
    }
    // prediction from Mapbox geocoding API
    return prediction.place_name;
  }

  /**
   * Fetch or read place details from the selected prediction.
   *
   * @param {Object} prediction selected prediction object
   *
   * @return {Promise<util.propTypes.place>} a place object
   */
  getPlaceDetails(prediction) {
    /*
    if (this.getPredictionId(prediction) === CURRENT_LOCATION_ID) {
      return userLocation().then(latlng => {
        return {
          address: '',
          origin: latlng,
          bounds: locationBounds(latlng, config.maps.search.currentLocationBoundsDistance),
        };
      });
    }

    if (prediction.predictionPlace) {
      return Promise.resolve(prediction.predictionPlace);
    }
    */
    return {
      address: this.getPredictionAddress(prediction),
      origin: placeOrigin(prediction),
      bounds: placeBounds(prediction),
    };
  }
}

export default GeocoderMapbox;
