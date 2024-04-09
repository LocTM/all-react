import {Component} from "react";
import Inside from "./Inside";

export default class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Tran Minh Loc",
            class: "C1023H1",
            isShow: true
        }
        this.state = {
            list:[
                {
                    name: "Loc",
                    age: 20,
                    score: 100
                },
                {
                    name: "Tuan Anh",
                    age: 30,
                    score: 100
                }
            ]
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
                <h2>{this.props.x}</h2>
                {this.state.isShow && <Inside></Inside>}
              <button onClick={() => {
                  this.setState(state => {
                      return{
                          isShow: !state.isShow
                      }
                  })
              }}>Click</button>
            </>
        )
    }
}