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