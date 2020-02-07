import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput 
        addBand={this.props.addBand}
        />

        {this.props.bands.map(band => { return (
          <li key={band.name}>
            {band.name}
          </li>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({type: 'ADD_BAND', payload: formData})
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
//   }
// }


export default connect (mapStateToProps, mapDispatchToProps)(BandsContainer)

