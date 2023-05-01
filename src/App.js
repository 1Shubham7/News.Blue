import './App.css';
import Navbar from './components/Navbar';
import News  from './components/News';
import React, {Component} from 'react'
import CatagoryBar from './components/CatagoryBar';
import SlidesShow from './components/SlidesShow';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'


//  API key : 4c8485b319b7402b8d2728b59067d2c2


export default class App extends Component { 
  // state = {
  //   progress:0
  // }
  // setProgress = (progress)=>{
  //  this.setState({progress: progress})
  // }

  render() {
    const images = [
      'SlideThree.jpg',
      'SlideOne.jpg',
      'SlideTwo.jpg',
    ];
    return (
      <>
      <Router>
      <div style={{background:'#6dbcdb', backgroundBlendMode:'color-burn'}} >
        
        <Navbar />
        {/* <LoadingBar
         color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => setProgress(0)} 
       /> */}
        <SlidesShow images={images} syle={{maxWidth: '100%', overflow:'hidden', border: '2px solid white'}}/> 
        <CatagoryBar />
          <Routes>
            <Route exact path="/business" key="business" element={<News  catagory={"business"} />} />
            <Route exact path="/tech" key="tech" element={<News  pageSize={9} country={"in"} catagory={"techcrunch"} />} />
            <Route exact path="/sports" key="sprots" element={<News  pageSize={9} country={"in"} catagory={"sports"} />} />
            <Route exact path="/general" key="general" element={<News  pageSize={9} country={"in"} catagory={"general"} />} />
            <Route exact path="/entertainment" key="entertainment" element={<News  pageSize={9} country={"in"} catagory={"entertainment"} />} />
            <Route exact path="/science" key="science" element={<News  pageSize={9} country={"in"} catagory={"science"} />} />
            <Route exact path="/health" key="health" element={<News  pageSize={9} country={"in"} catagory={"health"} />} />
            <Route exact path="/" key="normal" element={<News  pageSize={9} catagory={""} country={"in"} />} />
          </Routes>
      </div>
      </Router>
      <Footer />
      </>
    )
  }
}

