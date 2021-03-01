import React, { Component } from 'react'
import { connect } from "react-redux";

class Name extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: ""
        }
    }
    handleSubmit = e => {
        if (e.target.name === "reset") {
            this.props.resetUser()
        }

        if (this.state.firstName === '' && this.state.lastName === '') {
            return;
        }
        this.props.dispatchUser(this.state)
        this.setState({
            firstName: "",
            lastName: ""
        })
    }
    handleDelete=(id)=>{
        console.log(id)
        this.props.deleteUser(id)

        
    }
    handleChange = e => {
        this.setState((prevState) => {
            return {
                ...prevState, [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>

                {/* FirstName:  <input name="firstName" onChange={this.handleChange} value={this.state.firstName} />
              LastName:  <input name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                <p ><button className="btn btn-outline-success"  onClick={this.handleSubmit}>Add User</button></p>
                <p ><button className="btn btn-outline-success"  name='reset' onClick={this.handleSubmit}>Reset Users</button></p> */}


                <div class="container mt-6">
                    <h3>Add Users in your app</h3>

                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">User</span>
                            </div>
                            <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                            <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                            <input type='button' className="btn-light" onClick={this.handleSubmit} value='Add' />
                            <input type='button' className="btn-light" name='reset' onClick={this.handleSubmit} value='reset' />
                        </div>
                        <ul className="list-group">
                    {this.props.name.length > 0 && this.props.name.map((v,i) => {
                        return (<li key ={i} className="list-group-item">{v.firstName} {" "} {v.lastName} <span style={{float:"right"}}><input type='button' onClick={()=>this.handleDelete(i)} value="X"/></span></li>)
                    })}
                </ul>   
                    </form>


                </div>



             
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        name: state.userRedux
    }
}

const mapDispatchToProps = (dispatch) => {

    //console.log(increment)
    return {
        dispatchUser: (state) => { dispatch({ type: "ADDUSER", payload: state }) },
        resetUser: (state) => { dispatch({ type: "RESETUSER" }) },
        deleteUser: (id) => { dispatch({ type: "DELETEUSER",payload:id }) }

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Name);
