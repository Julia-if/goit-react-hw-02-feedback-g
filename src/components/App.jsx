import { Component } from "react";

 export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
onLeaveFeedback=(e)=>{

const items = Object.keys(this.state)
const nameBtn = items[0];
console.log(nameBtn);
}
render(){
 return (
  <div>

    <button type="button" data-name="Good" onClick={this.onLeaveFeedback}>Good</button>
    <button type="button" data-name="Neutral" onClick={this.onLeaveFeedback}>Neutral</button>
    <button type="button" data-name="Bad" onClick={this.onLeaveFeedback}s>Bad</button>
  </div>
 )
}
}

