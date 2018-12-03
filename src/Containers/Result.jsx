import React, { Component } from 'react';
import Message from '../Components/Message';
import { connect } from 'react-redux';
import {updateRandomHouse, updateSpecificHouse} from '../actions';

class Result extends Component {
  constructor(props) {
    super(props)
    this.count = 0;
    setInterval(() => {
      this.count++;
      this.props.updateSpecificCall(this.count%4)
    }, 1000)
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.houses.housesList.map(house => <h5 key={house}>{house}</h5>)}
        </ul>
        <Message message={this.props.houses.selectedHouse} />
      </div>
    )
  }
}

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => ({ 
  updateRandomCall: () => dispatch(updateRandomHouse()), 
  updateSpecificCall: (id) => dispatch(updateSpecificHouse(id)), 
})
export default connect(mapStateToProps, mapDispatchToProps)(Result)