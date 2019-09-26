import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import Total from './Total';

const AdditionalFeatures = props => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <div>
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
        <div>
          <Total car={props.car} />
        </div>
        </div>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP additionalFeatures state:', state);
  return {
    car: state.car,
    features: state.feature.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
