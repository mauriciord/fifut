'use strict'

import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      inputText: ''
    }
  }

  handleSearch = (event) => {
    event.preventDefault()
    axios.get(`https://thcm-cors.herokuapp.com/https://www.easports.com/br/fifa/ultimate-team/api/fut/item?jsonParamObject={"name":"${this.state.inputText}}"`)
      .then(res => this.setState({ data: res.data.items }))

  }

  renderItems = () => {
    return this.state.data.map(item => (
      <div key={item.id}>
        <div><img src={item.headshot.largeImgUrl} alt='headshot' /></div>
        <div>{`${item.commonName} ${item.firstName} ${item.lastName}`}</div>
      </div>
    ))
  }

  render () {
    return (
      <div>
        <div className='form-container'>
          <form className='search-form' onSubmit={this.handleSearch}>
            <input
              type='text'
              placeholder='Digite sua pesquisa e pressione enter'
              name='search'
              value={this.state.inputText}
              onChange={(event) => this.setState({ inputText: event.target.value })}
            />
          </form>
        </div>
        <div>
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default App
