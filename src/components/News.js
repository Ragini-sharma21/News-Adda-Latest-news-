import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 //import { useResolvedPath } from 'react-router-dom';

const News =(props)=> {
  
  const[articles, setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
   document.title=`${props.category}-News Adda`;



  

   const updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9adfc722f23b4657b5aa1c9e21d5113d&page=1&pageSize=${props.pageSize}`;
    setLoading(true)
    let data=  await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);

   }
    
    
      useEffect(()=>{
        document.title=`${props.category}-News Adda`;
      updateNews();
      
    
    },[])

    // const handlePrevClick= async()=>{
    //  setPage(page-1)
    //         updateNews();
        
    //   }

    // const handleNextClick=async()=>{


        
            
    //         setPage(page+1)
    //         updateNews();
    //     }
     
    
   const fetchMoreData=async()=>{
      
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9adfc722f23b4657b5aa1c9e21d5113d&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      // setState({loading:true});
      let data= await fetch(url);
      let parsedData= await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      
    
    };

    
  
    return (
      <div className="container my-3">
          <h1 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>News Adda-Top Headlines from {props.category} Category</h1>
           {loading&&<Spinner/>} 

          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
           <div className="container">
          <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>  
              })}
              
              </div>
          </div>
          </InfiniteScroll>

          {/* <div class="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr;previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
 */}

          {/* </div> */}

       
      </div>
    )
  
}

News.defaultProps={
  country:'in',
  pageSize:5,
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News
