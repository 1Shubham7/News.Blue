import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SlideShow.css'
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class CatagoryBar extends Component {
  

  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-sm  " style={{backgroundColor:'#023047', border:'2px solid white'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav mr-auto ml-auto" >
      <li className="nav-item">
        <Link className="nav-link news catagoryColor" to="/business">Business<span className="sr-only">(current)</span></Link>
      </li>
      {/* a tag reloads the page, link tag does not */}
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/tech">Tech<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/entertainment">Entertainment<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/general">General<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/health">Health<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/science">Science<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link news catagoryColor" to="/sports">Sports<span className="sr-only">(current)</span></Link>
      </li>
      </ul>
  </div>
</nav>
      </>
    )
  }
}
