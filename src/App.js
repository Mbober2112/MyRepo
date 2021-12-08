import React from 'react';
import { Route } from 'react-router-dom';
import c from './App.module.css';
import AllPosts from './components/content/allPosts/AllPosts';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import Friends from './components/content/friends/Friends';
import AddPostContainer from './components/content/profile/addPost/AddPostContainer';
import Profile from './components/content/profile/Profile.jsx';
import Saved from './components/content/saved/Saved';
import Settings from './components/content/settings/Settings';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';

const App = (props) => {
  return (
    <div className={c.App}>
      <Header />
      <div className={c.Page}>
        <Navbar />
        <Route path="/profile" render={() => <Profile profilePage={props.state.addPostState.profilePage} />} />
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>} />
        <Route path="/allposts" render={() => <AllPosts allPostsPage={props.state.addPostState.allPostsPage} />} />
        <Route path="/saved" render={() => <Saved allPostsPage={props.state.addPostState.allPostsPage}/>} />
        <Route path="/addPost" render={() => <AddPostContainer store={props.store} />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
