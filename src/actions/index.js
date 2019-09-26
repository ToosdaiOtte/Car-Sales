export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeatureAC = feature => {
    console.log('actions: index.js: addFeature: ', feature);
    return {
        type: ADD_FEATURE, payload: feature
    };
}