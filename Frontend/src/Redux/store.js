/* Redux is an open-source JavaScript library used to manage application state. React uses Redux for building the user interface.
Thunk is a loophole where you can write any code that needs to interact with the Redux store, ahead of time */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Chrome extension to see state
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobReducer, loadJobSingleReducer } from './Reducers/jobReducer';
import { loadJobTypeReducer } from './Reducers/jobTypeReducer';
import { allUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './Reducers/userReducer';


// To combine reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    signUp: userReducerSignUp
});

//initial state - Pass/Fail
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
// asynchronous request
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;