import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return (
            <section id="model-display" className="row justify-content-between">
                <div className="px-5">
                    <img src="./glassesImage/model.jpg"/>
                </div>
                <div id="model-try-on" className="px-5">
                    <img src="./glassesImage/model.jpg"/>
                    <div id="tryGlass">
                    </div>
                </div>
                </section>
        )
    }
}
