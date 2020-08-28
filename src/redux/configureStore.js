import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import {
    userSigninReducer,
   // userRegisterReducer,
    userLoginReducer
    //userUpdateReducer,
  } from './reducers/userreducers';


//const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;
const userSignin=[]

const initialState = {
   // cart: { cartItems, shipping: {}, payment: {} },
    userSignin: {userSignin},
    userLogin:{userInfo},
    //userRegister:{userRegister}
  };

  const reducer = combineReducers({
   // productList: productListReducer,
    //productDetails: productDetailsReducer,
    //cart: cartReducer,
    userSignin: userSigninReducer,
    //userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    
    //productSave: productSaveReducer,
    //productDelete: productDeleteReducer,
    //productReviewSave: productReviewSaveReducer,
    //orderCreate: orderCreateReducer,
    //orderDetails: orderDetailsReducer,
    //orderPay: orderPayReducer,
    //userUpdate: userUpdateReducer,
    //myOrderList: myOrderListReducer,
    //orderList: orderListReducer,
    //orderDelete: orderDeleteReducer,
  });
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const configureStore = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  export default configureStore;
  
