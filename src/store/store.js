import { applyMiddleware, compose, createStore } from "redux";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import firebase from "../firebase/config";
import userReducer from "../reducers/usersReducer";
import thunk from "redux-thunk";

const store = createStore(userReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, 
        getFirestore})), reduxReactFirebase(firebase), reduxFirestore(firebase)
));

export default store;