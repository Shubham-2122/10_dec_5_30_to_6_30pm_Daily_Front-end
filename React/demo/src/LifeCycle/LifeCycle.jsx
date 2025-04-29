import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            name : "Het patel"
        }
    }
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    componentWillMount(){
        console.log("mouting phase")
    }

    componentDidMount() {
        console.log("motuting phase data")
    }



    componentDidUpdate(){
        console.log("Updating phase data")
    }

    componentWillUnmount(){
        console.log("unmouting data")
    }

    render() {
        return (
            <div>
                {/* 1) mouting phase :- null  intial value:- state defined
                 2) update phase :- state data :- change 
                 3) unmouting phase :- null,state use */}
                <h1>hello name {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"bhavik patel"})}>Change name</button>
            </div>
        )
    }
}

export default LifeCycle
