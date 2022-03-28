import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import c from './App.module.css';
import AllPosts from './components/content/allPosts/AllPosts';
import Auth from './components/content/authorization/Auth';
import Enter from './components/content/authorization/enter/Enter';
import Dialogs from './components/content/dialogs/Dialogs';
import Friends from './components/content/friends/Friends';
import AddPost from './components/content/profile/addPost/AddPost';
import ProfileContainer from './components/content/profile/ProfileContainer';
import Saved from './components/content/saved/Saved';
import { Settings } from './components/content/settings/Settings';
import { Users } from './components/content/users/Users';
import Footer from './components/footer/Footer';
import { Header } from './components/header/Header';
import Navbar from './components/navbar/Navbar';

// const Saved = React.lazy(() => import('./components/content/saved/Saved'));
// const AddPost = React.lazy(() => import('./components/content/profile/addPost/AddPost'));
// const Users = React.lazy(() => import('./components/content/users/Users'));
// const Friends = React.lazy(() => import('./components/content/friends/Friends'));
//const SettingsContainer = React.lazy(() => import('./components/content/settings/SettingsContainer'));

class App extends React.Component {
  render () {
    return (
      <div className={c.App}>
        <Header />
        <div className={c.Page}>
          <Navbar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/allposts" render={() => <AllPosts />} />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Route path="/saved" render={() => <Saved />} />
            <Route path="/addPost" render={() => <AddPost/>} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/settings" render={() => <Settings />} />
          </React.Suspense>
          <Route path="/auth" render={() => <Auth />} />
          <Route path="/enter" render={() => <Enter />} />
        </div>
        <Footer />
      </div>
    );
  }
}  

export default compose<React.ComponentType> (
  connect(null, {}),
  withRouter,) (App);
