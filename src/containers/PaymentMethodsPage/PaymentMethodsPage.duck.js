import { fetchCurrentUser } from '../../ducks/user.duck';
import * as log from '../../util/log';

// ================ Action types ================ //

export const SET_INITIAL_STATE = 'app/PayoutMethodsPage/SET_INITIAL_STATE';

// ================ Reducer ================ //

const initialState = {
  fetchingPaymentMethod: null,
};

export default function payoutMethodsPageReducer(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
}

// ================ Action creators ================ //

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

// ================ Thunks ================ //

export const createStripeSetupIntent = () => (dispatch, getState, sdk) => {
  return sdk.stripeSetupIntents
    .create()
    .then(response => {
      console.log('Response', response);
      const paymentIntent = response.data.data;
      return paymentIntent;
    })
    .catch(e => {
      log.error(e, 'create-setup-intent-failed');
      return { createStripeSetupIntentSuccess: false };
    });
};

export const loadData = () => (dispatch, getState, sdk) => {
  // Clear state so that previously loaded data is not visible
  // in case this page load fails.
  dispatch(setInitialState());

  return dispatch(fetchCurrentUser({ include: ['stripeCustomer.defaultPaymentMethod'] }));
};
