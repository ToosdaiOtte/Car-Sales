import React, { useState } from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log(props.features);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    features: state.feature.store
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
