import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import Total from './Total';
import { addFeatureAC } from '../actions';

const AdditionalFeatures = props => {

  const buyItem = item => {

    // dipsatch an action here to add an item
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <div>
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
        <div>
          <Total carState={props.carState} />
        </div>
        </div>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP additionalFeatures state:', state.carState.store);
  return {
    carState: state.carState,
    features: state.carState.store,
    car: state.carState.car
  };
};

export default connect(
  mapStateToProps,
  { addFeatureAC }
)(AdditionalFeatures);
