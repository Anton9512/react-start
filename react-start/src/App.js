import './App.css';
import Nav from './components/Navbar/Nav';
import News from './components/News/News';
import {BrowserRouter, Route} from "react-router-dom"
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const  App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
          <Route path="/profile/:userId?" render={ () => <ProfileContainer/>}/>
          <Route path="/users" render={ () => <UsersContainer/>}/>
          <Route path="/news" render={ () => <News/>}/>
          <Route path="/music" render={ () => <Music/>}/>
          <Route path="/settings" render={ () => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

