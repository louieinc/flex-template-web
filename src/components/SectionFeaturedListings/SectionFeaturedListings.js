import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import { createSlug } from '../../util/urlHelpers';
import { NamedLink } from '../../components';
import { richText } from '../../util/richText';
import css from './SectionFeaturedListings.css';
import cssListing from '../../components/ListingCard/ListingCard.css';



class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}


class FeaturedListings extends Component{

  constructor(props) {
    super(props);

   this.state = {promiseIsResolved:false};

    const sharetribeSdk = require('sharetribe-flex-sdk');
    const sdk = sharetribeSdk.createInstance({
      clientId: '8c3dba56-b24e-4f1b-98da-4e40d9a9930c'
    });

    sdk.listings.query({
      price: "1,16000",
      meta_featured: "true",
      "include": [
        "author",
        "images"
      ],
      "fields.image": [
        "variants.landscape-crop"
      ]

    }).then(res => {

      var listingIdxs = [];
      if(res.data.data.length > 3){
        var listing1Idx = Math.floor(Math.random() * res.data.data.length);
        var unique = false;
        var listing2Idx;
        while(unique===false){
          listing2Idx = Math.floor(Math.random() * res.data.data.length);
          if(listing2Idx !== listing1Idx){
            unique = true;
          }
        }
        unique = false;
        var listing3Idx
        while(unique===false){
          listing3Idx = Math.floor(Math.random() * res.data.data.length);
          if(listing3Idx !== listing1Idx && listing3Idx !== listing2Idx){
            unique = true;
          }
        }
        listingIdxs = [listing1Idx, listing2Idx, listing3Idx];
      }
      else{
        for(var i=0;i<res.data.data.length;i++){
          listingIdxs.push(i);
        }

      }


      var data = [];
      for(i=0; i<listingIdxs.length;i++){
        var listing = {id:res.data.data[listingIdxs[i]].id.uuid, title:res.data.data[listingIdxs[i]].attributes.title, authorId:res.data.data[listingIdxs[i]].relationships.author.data.id.uuid};
        for(var j=0;j<res.data.included.length;j++){
          if(res.data.data[listingIdxs[i]].relationships.images.data[0].id.uuid === res.data.included[j].id.uuid){

            listing.imageUrl = res.data.included[j].attributes.variants["landscape-crop"].url;
          }
          if(listing.authorId === res.data.included[j].id.uuid){
            listing.auhorName = res.data.included[j].attributes.profile.displayName;
          }
        }


        data.push(listing);

      }

      for(i=0;3-data.length;i++){
        data.push({id:'xxx', title:'', imageUrl:'',authorName:''});
      }
      //force re-render
      this.setState({promiseIsResolved: true, data: data});

    });
  }

  render(){
    if(!this.state.promiseIsResolved){return null}


    return (

    <div >
      <div className={css.title}>
        <FormattedMessage id="Featured Listings" />
      </div>
      <div className={css.locations}>

        {locationLink(

          this.state.data[0].id,
          this.state.data[0].imageUrl,
          this.state.data[0].title,
          this.state.data[0].auhorName,
        )}

        {locationLink(
          this.state.data[1].id,
          this.state.data[1].imageUrl,
          this.state.data[1].title,
          this.state.data[1].auhorName,
        )}

        {locationLink(
          this.state.data[2].id,
          this.state.data[2].imageUrl,
          this.state.data[2].title,
          this.state.data[2].auhorName,
        )}

      </div>
    </div>
  );
  }
}




const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (id, imageurl, name, authorName) => {


  const nameText = <span className={css.locationName}>{name}</span>;
  const slug = createSlug(name);
  return (
    <NamedLink name="ListingPage" params={{ id, slug }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={imageurl} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={cssListing.info}>

        <div className={cssListing.mainInfo}>
          <div className={cssListing.title}>
            {richText(name, {
              longWordMinLength: 30,
              longWordClass: css.longWord,
            })}
          </div>
          <div className={cssListing.authorInfo}>
            <FormattedMessage id="ListingCard.hostedBy" values={{ authorName }} />
          </div>
        </div>
      </div>


    </NamedLink>
  );
};

const SectionFeaturedListings = props => {

  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  
  return ( 
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="Featured Listings" />
      </div>
      <div className={css.locations}>
        {locationLink(
          '5d6d426d-088e-4f3a-9dea-550b3dc67b2f',
          'https://sharetribe.imgix.net/5cd90764-6d66-4a17-9cf9-af62ae32d1dc%2F5db07d2d-f823-42f6-b215-a4b865141201?auto=format&crop=edges&fit=crop&h=267&ixlib=java-1.1.1&w=400&s=3f2dda5484dddf3e78725caa04eba0d3',
          'New Pad 4',
          'Crashpad O'
        )}
        {locationLink(
          '5d6d426d-088e-4f3a-9dea-550b3dc67b2f',
          'https://sharetribe.imgix.net/5cd90764-6d66-4a17-9cf9-af62ae32d1dc%2F5d6d436f-fe12-400f-b7e6-93cbbef96f62?auto=format&crop=edges&fit=crop&h=267&ixlib=java-1.1.1&w=400&s=d3a97c2212b3bc08707e236d4ceb0696',
          'Test Pad #10',
          'Joseph M'
        )}
        {locationLink(
          '5ce4521c-ea82-4ffc-92e7-503d6177917d',
          'https://sharetribe.imgix.net/5cd90764-6d66-4a17-9cf9-af62ae32d1dc%2F5d6d177c-31f2-4652-8521-f14729be288a?auto=format&crop=edges&fit=crop&h=267&ixlib=java-1.1.1&w=400&s=33a7949ea28bac2c4732037d58137d03',
          'THE BEST PAD EVER',
          'Crashpad O'
        )}
      </div>
    </div>
  );

};

SectionFeaturedListings.defaultProps = { rootClassName: null, className: null, data: null };

const { string } = PropTypes;

SectionFeaturedListings.propTypes = {
  rootClassName: string,
  className: string
};

export default FeaturedListings;

