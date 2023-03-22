import React, { Component } from 'react'

export class Newsitem extends Component {
  

  render() {
   let {title, description, imageUrl, newsurl} = this.props;
    return (
      <>
      <div className="my-4">
      <div className="card" style={{width: '18rem', height:'auto'}}>
      <img style={{width:'286px', height:'170px'}} src={!imageUrl ? 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw334idw7rIwksxuD0wtMzMm&ust=1679490881353000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICEzZyN7f0CFQAAAAAdAAAAABAE ' : imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{description}</p>
        <a rel="noreferrer" style={{display: 'block'}} href={newsurl} target="_blank" className=" text-center btn btn-center btn-sm btn-dark">Read More</a>
        </div>
      </div>

      </div>
      </>
    )
  }
}

export default Newsitem
