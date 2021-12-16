import React from 'react';
import { Route } from 'react-router-dom';
import c from './App.module.css';
import AllPostsContainer from './components/content/allPosts/AllPostsContainer';
import AuthContainer from './components/content/authorization/AuthContainer';
import Enter from './components/content/authorization/enter/Enter';
import EnterContainer from './components/content/authorization/enter/EnterContainer';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import Friends from './components/content/friends/Friends';
import AddPostContainer from './components/content/profile/addPost/AddPostContainer';
import ProfileContainer from './components/content/profile/ProfileContainer';
import SavedContainer from './components/content/saved/SavedContainer';
import Settings from './components/content/settings/Settings';
import UsersContainer from './components/content/users/UsersContainer';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';

const App = (props) => {
  return (
    <div className={c.App}>
      <Header />
      <div className={c.Page}>
        <Navbar />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/allposts" render={() => <AllPostsContainer />} />
        <Route path="/saved" render={() => <SavedContainer />} />
        <Route path="/addPost" render={() => <AddPostContainer/>} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/auth" render={() => <AuthContainer />} />
        <Route path="/enter" render={() => <EnterContainer />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
