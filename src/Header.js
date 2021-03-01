import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        return (
            <div className="bg-light">
                {/* {this.props.counter>=5 && this.props.counter<=10 &&
                 <div className="spinner-border" style={{marginTop:"10px"}}></div>} */}
                  {/* <div class="progress bg-success">
    <div class="progress-bar" style={{width:this.props.counter+"%"}}>{this.props.counter+"%"}</div>
  </div> */}
                 <span style={{float:'right'}}>{this.props.counter}</span>
               <h1 style={{marginBottom:"40px"}}>{this.props.header}</h1> 
            </div>
        )
    }
}
const mapStateToProps = state => {
    // console.log(state)
    return {
      counter: state.myReducer
    }
  }
export default connect(mapStateToProps)(Header)
