import {Component} from "react";

export default class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Tran Minh Loc",
            class: "C1023H1"
        }
    }
    render() {
        return(
            <>
                <h1>{this.state.name} : {this.state.class}</h1>
                <input type="text" onChange={(e) => {
                    this.setState({
                        name: e.target.value,
                    })
                }}/>
                <input type="text" onChange={(e) => {
                    this.setState({
                        class: e.target.value,
                    })
                }}/>
            </>
        )
    }
}