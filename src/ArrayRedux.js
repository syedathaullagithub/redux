
import react from 'react'
import { connect } from 'react-redux'


class ArrayRedux extends react.Component {

    handleCounterINC = ((e) => {
        console.log(this.props)
        this.props.addArray()

    })


    render() {

        return (
            <div>
                <p>Array Maniplulations</p>
                <p>{this.props.arrayState.map((val) => {
                    return (<span>{val}</span>)
                })}</p>
                <button className="btn-light" onClick={this.handleCounterINC}>Add Array</button>
            </div>)
    }
}
const mapStateToProps = state => {
    return {
        arrayState: state.arrayReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArray: () => { dispatch({ type: "ADDELEMENT", payload: Math.floor(Math.random() * 10) + 1 }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArrayRedux)
