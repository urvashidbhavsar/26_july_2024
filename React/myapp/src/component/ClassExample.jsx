import React from "react"

class classExample extends React.Component{
    constructor(){
        super()
        let a = 10
    }
    render(){
        return(
            <React.Fragment>
                <h1>Class Component invoke</h1>
            </React.Fragment>
        )
    }
}
export default classExample