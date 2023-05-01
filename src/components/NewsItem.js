import React, { Component } from 'react'

export default class NewsItem extends Component {

  

    
  render() {
    let {title, description, urlToImage, url, publishedAt, author, name} = this.props;
    return (
      <>
        <div className="my-5 " style={{display:'flex',justifyContent:'center'}}>
        <div className="card" style={{width: '45rem', border: '1px solid #03045e'}}>
          <span className="position-absolute top-0 translate-middle badge bg-primary" style={{border:'4px solid #03045e',top:'-2%', right:'0', left: 'auto%', borderRadius:'1000px', zIndex:'1', color:'white', fontSize:'105%', fontFamily:'', display: 'flex', justifyContent:'flex-end',position:'absolute'}}>{name}</span>
        <img className="card-img-top" src={urlToImage} alt="Card image cap" style={{ border: '1px solid #03045e'}} />
        <div className="card-body" style={{ backgroundColor:'#caf0f8', border: '1px solid #03045e', padding:'30px'}}>
          <h5 className="card-title" style={{textDecoration:'underline  blue 11px'}}>{title}{title.length<=60?"...":""}</h5>
          <span class="badge badge-danger">{title.length>=40?"Live":""}</span>
          <p className='text-center'><a href={url}><u>Read more</u></a></p>
          <p className="card-text" >{description}...</p>
        </div>
        <ul className="list-group list-group-flush">
          
          <li className="list-group-item" style={{ backgroundColor:'#bde0fe',  border: '1px solid #03045e'}}>Author : {author===null?"Unknown":author}</li>
          <li className="list-group-item" style={{ backgroundColor:'#3a86ff',  border: '1px solid #03045e' }}>Published At : {new Date(publishedAt).toGMTString()}</li>
        </ul>
        <div className="card-body" style={{ backgroundColor:'#03045e',  border: '1px solid #03045e'}}>
          <a href={url} target="_blank" className="btn btn-sm  mx-1 buldge" style={{backgroundColor: '#e5e5e5',textDecorationColor: 'ActiveBorder', color:'#03045e', border:'4px solid blue', borderRadius: '100px'}}><b>Read More</b></a>
          <a href={url} target="_blank" className="btn sss btn-sm  mx-1 buldge" style={{backgroundColor: '#00b4d8' , color:'#03045e',
                               border:'3px solid white', borderRadius: '100px',
                               cursor:'pointer'}}><b>Watch Video</b></a>
        </div>
      </div>
      </div>
      </>


    )
  }
}
