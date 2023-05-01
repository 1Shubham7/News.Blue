import React, { Component } from 'react'


export default class Navbar extends Component {
  render() {
    const style = {
      backgroundColor: '#0077b6',
      border: 'solid 2px white',
      color: '#03045e', 
      fontSize: '38px',
      fontWeight: '600',
      textShadow: '1px 1px #000'
    }

    const colorStyle = {
      fontFamily: 'Roboto',
      fontWeight:'250',
      fontSize: '16px'
    }

    return (
      
        <div>
      <nav className="navbar navbar-expand-lg  py-2" style={{border:'2px solid #03045e', backgroundColor:'#023047', border: "1.5px solid currentcolor" , boxShadow:"0 0 3px currentcolor", color:"#55c2da"}}> 
  <a className="navbar-brand news mx-5" href="#" style={{fontFamily:'Roboto',textDecoration:'overline',fontSize:'24px' , color:'white'}} ><strong>News.Blue</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item mx-2 ">
        <a className="nav-link news catagoryColor" href="#" style={colorStyle} >Subscribe<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link news catagoryColor" href="#" style={colorStyle}>News Letter</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link news catagoryColor" href="#" style={colorStyle}>Blogs</a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link news catagoryColor" href="#" style={colorStyle}>Highlights</a>
      </li>
      
    </ul>
    <ul className="navbar-nav left mx-3">
      <li className="nav-item   nav-left">
        <a className="nav-link news catagoryColor" href="#" style={colorStyle}>Sign In</a>
      </li>
    </ul>
      
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 buldge" type="search" placeholder="Search" aria-label="Search" />
      <button type="submit" style={{color:"#55c2da", border: "2px solid currentcolor" , boxShadow:"0 0 3px currentcolor"}} className="btn btn-primary hover:bscribe g-red-400 mx-2">Submit</button>

    </form>
  </div>
</nav>
      </div>
    )
  }
}
