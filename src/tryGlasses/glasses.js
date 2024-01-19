import React, { Component } from 'react'

export default class Glasses extends Component {
  constructor(props){
    super(props)

    this.state={
      ListGlasses:[
        {id:1, urlJpg: './glassesImage/g1.jpg', urlPng: './glassesImage/v1.jpg'},
        {id:2, urlJpg: './glassesImage/g2.jpg', urlPng: './glassesImage/v2.jpg'},
        {id:3, urlJpg: './glassesImage/g3.jpg', urlPng: './glassesImage/v3.jpg'},
        {id:4, urlJpg: './glassesImage/g4.jpg', urlPng: './glassesImage/v4.jpg'},
        {id:5, urlJpg: './glassesImage/g5.jpg', urlPng: './glassesImage/v5.jpg'},
        {id:6, urlJpg: './glassesImage/g6.jpg', urlPng: './glassesImage/v6.jpg'},
        {id:8, urlJpg: './glassesImage/g8.jpg', urlPng: './glassesImage/v7.jpg'},
        {id:9, urlJpg: './glassesImage/g9.jpg', urlPng: './glassesImage/v8.jpg'},
      ]
    }
  }
  renderProduct = () => {
    return this.state.ListGlasses.map((Product)=>{
      return(
        <li key={Product.id}>
          <a ><img style={{height: 140, width:140}} src={Product.urlJpg}/></a>
        </li>
      )
    })
  }

  render() {
    return (
      <ul id="glassDisplay" className='container m-auto row'>
        {this.renderProduct()}
      </ul>
    )
  }
}
