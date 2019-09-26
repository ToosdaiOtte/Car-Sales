import React from 'react';

import AddedFeature from './AddedFeature';
import { VirtualAction } from 'rxjs';

const AddedFeatures = props => {
  console.log(props);

  const addedFeatures = props.car.features;

  return (
    <div className="content">
      <h6>Added features:</h6>
      {addedFeatures.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
