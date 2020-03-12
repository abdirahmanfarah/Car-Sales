import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature } from './actions/actions';

const App = ({additionalFeatures, additionalPrice, car, addFeature, removeFeature}) => {
  const removedFeature = newFeature => {
    // dispatch an action here to remove an item
    removeFeature(newFeature)
    console.log(newFeature)
  };

  const buyItem = newFeature => {
      addFeature(newFeature)
      // console.log(newFeature)
    };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removedFeature={removedFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} buyItem={buyItem}/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect (
  mapStateToProps, 
  { addFeature, removeFeature }
)(App);
