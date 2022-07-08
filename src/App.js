import {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

import Home from './components/Home';
import AnimalDetails from './components/animal/AnimalDetails';

import Login from './components/user/Login'
import Blog from './components/blog/Blog'
import Register from './components/user/Register'
//import Profile from './components/user/Profile';

//import { loadUser } from './actions/userActions'
//import store from './store' 

function App() {

  useEffect (() => {
    //store.dispatch(loadUser())
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/animal/:id" component={AnimalDetails} exact/>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/me" component={Profile} exact /> */}
         
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
