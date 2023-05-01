import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
    }
 
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props){
        super();
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        };
        // this.handleNextClick = this.handleNextClick.bind(this);
        // this.handlePreviousClick = this.handlePreviousClick.bind(this);

    }
    // you can't change props, you can pass props and set state and then change it

async updateNews(){
    this.props.setProgress(0)
    this.setState({loading: true})
    const url = `https://newsapi.org/v2/everything?q=${this.props.catagory}&sortBy=publishedAt&apiKey=4c8485b319b7402b8d2728b59067d2c2&pageSize=9`;
    let data =  await fetch(url);
    let parseData = await data.json();
    this.setState({
        articles:parseData.articles,
        totalResults : parseData.totalResults,
        loading: false
    })    
    this.props.setProgress(100)

  
    document.title = `News.Tech ${this.props.catagory===""?"": "- " + this.capitalize(this.props.catagory)}`;
}
 

async componentDidMount(){
    // componentDidMount runs after the render method
    this.updateNews();
}

fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/everything?&q=${this.state.catagory}&from=2023-04-20&to=2023-04-20&sortBy=publishedAt&language=en&apiKey=4c8485b319b7402b8d2728b59067d2c2&page=${this.state.page}&pageSize=9`;
    let data =  await fetch(url);
    let parseData = await data.json();
    this.setState({articles: this.state.articles.concat(parseData.articles),
        totalResults : parseData.totalResults,
        loading: false
    })
  };
//   AWAIT CAN ONLY BE USED WITH ASYNC FUNCTION

// handlePreviousClick = async () => {
//     this.setState({page:this.state.page-1})
//     this.updateNews();
// }

// async handleNextClick(){
//     if (! (this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)))
//  {
//     this.setState({page:this.state.page+1})
//     this.updateNews();
//  }

// }
 



  render() {

    return (
        <>
        <h1 className='text-center my-3' style={{ textDecoration:'underline blue 5px', textDecorationColor:'ButtonShadow'}}>Top {this.props.catagory===""?"":this.capitalize(this.props.catagory)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
        {/* Infinite scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        ></InfiniteScroll>
        

        <div className="container">
        <div className="row">
        {!this.state.loading && this.state.articles?.map((x)=>{
            return (
            <div className="col-md-12" key={x.url}>
            {/* whenever you using .map and iterate, you need a unique key prop */}
            <NewsItem name={x.source.name} title={x.title? x.title.slice(0,90):""} description={x.description?x.description.slice(0,240):""}  url={x.url}  author={x.author} publishedAt={x.publishedAt} urlToImage={x.urlToImage!==null?x.urlToImage:"https://images.macrumors.com/t/sQq3ISG7wB1R3UzqQ8Ri9zesa54=/2500x/article-new/2023/03/iPhone-15-Pro-Multi-Purpose-button-Mute-Switch-Feature-Purple.jpg"} />
            </div>
       )})}
        </div>
        </div>
        
        {/* <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="Button" className="btn btn-sm btn-warning" style={{backgroundColor: '#00b4d8' , color:'#03045e',border:'3px solid white', borderRadius: '100px',cursor:'pointer'}} onClick={this.handlePreviousClick}><b>&larr; Previous Page</b></button>
        <button  disabled={(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))} type="Button" className="btn btn-sm btn-warning" style={{backgroundColor: '#e5e5e5',textDecorationColor: 'ActiveBorder', color:'#03045e', border:'4px solid blue', borderRadius: '100px'}} onClick={this.handleNextClick}><b>Next Page &rarr;</b></button>
        
        </div> */}
        <br />

        </>
        )
  }
}