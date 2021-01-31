import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL ='http://jsonplaceholder.typicode.com'; //This URL will be used application wide. 
axios.defaults.headers.common['Authorization']='AUTH TOKEN'; //Common Authorization token for all request
axios.defaults.headers.post['Content-Type']='application/json'; //default content type for all post request

axios.interceptors.request.use(request=>{
    console.log(request);
    return request;
}, error=>{
    console.log(error);
    return Promise.reject(error);
});
axios.interceptors.response.use(response=>{
    console.log(response);
    return response;
}, error=>{
    console.log(error);
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
