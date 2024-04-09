import {Component} from "react";
import Inside from "./Inside";

export default class Demo extends Component{
    constructor(props) {
        super(props);

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
            ],
            inputName: '',
            inputAge:','
        }
    }
    render() {
        return(
            <>
                <h2>{this.props.x}</h2>
                {this.state.isShow && <Inside></Inside>}
              <button onClick={() => {
                  this.setState(state => {
                      return{
                          isShow: !state.isShow
                      }
                  })
              }}>Click</button>
                <hr/>
                <hr/>
                {this.state.list.map(item => (
                    <h2>{item.name} | {item.age}</h2>
                ))}

                <input type="text" onChange={(e) => {
                    this.setState({
                        inputName: e.target.value
                    })
                }}/>
                <input type="text" onChange={(e) => {
                    this.setState({
                        inputAge: e.target.value
                    })
                }}/>
                <button onClick={()=> {
                    this.setState((state) => {
                        return {
                            list: [...state.list, {name: state.inputName , age: state.inputAge}]
                        }
                        }
                    )
                }}>ADD</button>
            </>
        )
    }
}