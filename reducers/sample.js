import { SAMPLE } from "../actions/sample";

const defaultState = {
    sampleField: null,
};

const sampleReducer = (state, action) => {
    const sample = state.sample || defaultState;

    switch (action.type) {
        case SAMPLE:
            return Object.assign({}, sample, {
                sampleField: action.sampleField,
            });

        default:
            return sample;
    }
};

export default sampleReducer;
