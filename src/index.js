import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/State';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                changeNewPost={store.changeNewPost.bind(store)} 
                sendMessage={store.sendMessage.bind(store)}
                changeNewMessage={store.changeNewMessage.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
