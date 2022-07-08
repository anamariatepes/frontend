import React, { Fragment } from 'react'
import {Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
//import {logout} from "../../actions/userActions"

import Search from './Search';

import '../../App.css'
const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {user, loading} = useSelector(state => state.auth)

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   alert.success('Logged out successfully!')
  // }
  return(
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
           <div className="navbar-brand">
            <img src="/images/logo.png" />
    </div>
  </div>

  <div className="col-12 col-md-6 mt-2 mt-md-0">
    <Route render= {({history}) => <Search history={history} />} />
    
  </div>

  <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
  <Link to="/blog" className="btn" id="blog_btn">Blog</Link>

    <Link to="/login" className="btn" id="login_btn">Login</Link>

    <span id="cart" className="ml-3">Adoptiile tale</span>
    <span className="ml-1" id="cart_count">0</span>
  </div>
</nav>

    </Fragment>
)
}

export default Header