import React from 'react'  //newsitem

const NewsItem=(props)=> {
      let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div container="my-4">
        <div className="card" >
  <img className="card-img-top" src={!imageUrl?"https://1471793142.rsc.cdn77.org/data/images/full/59855/topshot-indonesia-volcano.jpg":imageUrl} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<a href="/" class="badge badge-danger">{source}</a></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
