
import { Component } from "react"
import './index.css'


class LettersCalculator extends Component {
    state = {letter:0}
    letters = (event) => {
this.setState({letter:event.target.value.length})
    }
render(){
    const {letter}=this.state
    return(
        <div className="input-card-container">
            <input type="text" onChange={this.letters} className="input-ele"/>
            <div className="count-card">
                    <h1 className="heading">No.of letters: {letter}</h1>
            </div>
        </div>
    )
}
} 

export default LettersCalculator

