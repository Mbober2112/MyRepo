import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, changeNewMessage, changeNewPost, sendMessage } from './redux/State';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewPost={changeNewPost} 
                sendMessage={sendMessage}
                changeNewMessage={changeNewMessage}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
