
import react from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './redux/myActions'

class Counter extends react.Component {

  handleCounterINC = ((e) => {
    console.log("handle", this.props)
    if (e.target.name === 'plus') {
      this.props.dispatchAction()
    } else if (e.target.name === 'minus') {
      this.props.dispatchActionMinus()
    }
    else {
      this.props.dispatchActionReset()
    }

  })
  // handleCounterDEC=(()=>{
  //   console.log("handle" ,this.props)
  //   this.props.dispatchActionMinus()
  // })

  render() {

    return (
      <div>
        
        <div class="btn-group btn-">
          <button  className="btn btn-light" name='plus' onClick={this.handleCounterINC}>ADD</button>
          <button className="btn btn-light" name='minus' onClick={this.handleCounterINC}>MINUS</button>
          <button  className="btn btn-light" name='reset' onClick={this.handleCounterINC}>RESET</button>
        </div>
        {/* <button type="button" className="btn btn-success" name='plus' onClick={this.handleCounterINC}>
        Add <span className="badge badge-light">{this.props.counter}</span>
        </button>
        <button type="button" className="btn btn-success" name='minus' onClick={this.handleCounterINC}>
          Minus <span className="badge badge-light">{this.props.counter}</span>
        </button>
        <button type="button" className="btn btn-success" name='reset' onClick={this.handleCounterINC}>
          Reset <span className="badge badge-light">{this.props.counter}</span>
        </button> */}
      </div>)
  }
}
const mapStateToProps = state => {
  // console.log(state)
  return {
    counter: state.myReducer
  }
}

const mapDispatchToProps = (dispatch) => {

  //console.log(increment)
  return {
    dispatchAction: () => { dispatch(increment()) },
    dispatchActionMinus: () => { dispatch(decrement()) },
    dispatchActionReset: () => { dispatch(reset()) }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);