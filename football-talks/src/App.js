import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import c from './App.module.css';
import AllPostsContainer from './components/content/allPosts/AllPostsContainer';
import AuthContainer from './components/content/authorization/AuthContainer';
import EnterContainer from './components/content/authorization/enter/EnterContainer';
import DialogsContainer from './components/content/dialogs/DialogsContainer';
import ProfileContainer from './components/content/profile/ProfileContainer';
import Footer from './components/footer/Footer.tsx';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar.tsx';

const SavedContainer = React.lazy(() => import('./components/content/saved/SavedContainer'));
const AddPostContainer = React.lazy(() => import('./components/content/profile/addPost/AddPostContainer'));
const UsersContainer = React.lazy(() => import('./components/content/users/UsersContainer'));
const Friends = React.lazy(() => import('./components/content/friends/Friends'));
const SettingsContainer = React.lazy(() => import('./components/content/settings/SettingsContainer'));

class App extends React.Component {
  render () {
    return (
      <div className={c.App}>
        <HeaderContainer />
        <div className={c.Page}>
          <Navbar />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/allposts" render={() => <AllPostsContainer />} />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Route path="/saved" render={() => <SavedContainer />} />
            <Route path="/addPost" render={() => <AddPostContainer/>} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/settings" render={() => <SettingsContainer />} />
          </React.Suspense>
          <Route path="/auth" render={() => <AuthContainer />} />
          <Route path="/enter" render={() => <EnterContainer />} />
        </div>
        <Footer />
      </div>
    );
  }
}  

export default compose (
  connect(null, {}),
  withRouter,) (App);


// }= (props) => {
//   return (
//     <div className={c.App}>
//       <HeaderContainer />
//       <div className={c.Page}>
//         <Navbar />
//         <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
//         <Route path="/dialogs" render={() => <DialogsContainer />} />
//         <Route path="/allposts" render={() => <AllPostsContainer />} />
//         <Route path="/saved" render={() => <SavedContainer />} />
//         <Route path="/addPost" render={() => <AddPostContainer/>} />
//         <Route path="/users" render={() => <UsersContainer />} />
//         <Route path="/friends" render={() => <Friends />} />
//         <Route path="/settings" render={() => <SettingsContainer />} />
//         <Route path="/auth" render={() => <AuthContainer />} />
//         <Route path="/enter" render={() => <EnterContainer />} />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
