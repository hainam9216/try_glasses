import React, { Component } from 'react'

export default class TryGlasses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayGlass: '',
      ListGlasses: [
        { id: 1, urlJpg: './glassesImage/g1.jpg', urlPng: './glassesImage/v1.png' },
        { id: 2, urlJpg: './glassesImage/g2.jpg', urlPng: './glassesImage/v2.png' },
        { id: 3, urlJpg: './glassesImage/g3.jpg', urlPng: './glassesImage/v3.png' },
        { id: 4, urlJpg: './glassesImage/g4.jpg', urlPng: './glassesImage/v4.png' },
        { id: 5, urlJpg: './glassesImage/g5.jpg', urlPng: './glassesImage/v5.png' },
        { id: 6, urlJpg: './glassesImage/g6.jpg', urlPng: './glassesImage/v6.png' },
        { id: 7, urlJpg: './glassesImage/g7.jpg', urlPng: './glassesImage/v7.png' },
        { id: 8, urlJpg: './glassesImage/g8.jpg', urlPng: './glassesImage/v8.png' },
        { id: 9, urlJpg: './glassesImage/g9.jpg', urlPng: './glassesImage/v9.png' },
      ]
    }
  }

  hanleDisplay = (urlPng) => {
    this.setState({
      displayGlass: urlPng
    })
  }
  
  renderModal = () => {
    return (
      <section id="model-display" className="row justify-content-around">
        <div className="px-5">
          <img src="./glassesImage/model.jpg" />
        </div>
        <div id="model-try-on" className="px-5">
          <img src="./glassesImage/model.jpg" />
          <div id="tryGlass">
            <img src={this.state.displayGlass} />
          </div>
        </div>
      </section>
    )
  }
  renderProduct = () => {
    return this.state.ListGlasses.map((Product) => {
      return (
        <li key={Product.id}>
          <a onClick={() => this.hanleDisplay(Product.urlPng)}><img style={{ height: 140, width: 140 }} src={Product.urlJpg} /></a>
        </li>
      )
    })
  }
  render() {
    return (
      <section>
        {this.renderModal()}
        <ul id="glassDisplay" className='container m-auto row'>
          {this.renderProduct()}
        </ul>
      </section>
    )
  }
}
