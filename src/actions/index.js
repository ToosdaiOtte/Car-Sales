export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeatureAC = item => {
    console.log('actions, index.js, addFeature: ', item);
    return {
        type: ADD_FEATURE, payload: item 
    };
}