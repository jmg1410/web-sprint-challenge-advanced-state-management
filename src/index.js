import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import{configureStore} from '@reduxjs/toolkit'
import "./index.css";
import App from "./App";
import reducer from "./reducers"; 
import  logger  from "redux-logger";


const { worker } = require('./mocks/browser');
worker.start();

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.