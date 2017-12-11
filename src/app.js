'use strict'

import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
  }

  handleSearch = (e) => {
    e.preventDefault()

    axios.get(`https://thcm-cors.herokuapp.com/https://www.easports.com/br/fifa/ultimate-team/api/fut/item?jsonParamObject={"name":"${e.target.search.value}}"`)
      .then(res => this.setState({ data: res.data.items }))

    e.target.search.value = ''
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
