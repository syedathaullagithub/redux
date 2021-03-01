import React, { Component } from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return (
            <div className="bg-primary " style={{ position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                color: 'white'}}>
                <div class="progress">
                <div class="progress-bar" style={{ width: this.props.counter + "%" }}>{this.props.counter + "%"}</div>
                </div>

                
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
export default connect(mapStateToProps)(Footer)
