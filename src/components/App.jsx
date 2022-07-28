import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from './Notification/Notification'

 export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
onLeaveFeedback=(key)=>{
this.setState(prevState=>{
  return {
    [key]:prevState[key]+1
  }
})
}
countTotalFeedback=()=>{
  return  Object.values(this.state).reduce((acc,value)=>value+acc,0)
 }
 
 countPositiveFeedbackPercentage=()=>{

return this.state.good/(this.countTotalFeedback()) *100
 }


render(
  
){
  const total=this.countTotalFeedback();
  const positivTotal=this.countPositiveFeedbackPercentage();
 return (<div>
  <Section title='Please leave feedback'>
  <FeedbackOptions 
  options={this.state} 
  onLeaveFeedback={this.onLeaveFeedback}>
    </FeedbackOptions>
    </Section>
    
    <Notification message="There is no feedback"></Notification>
   <Section title='Statistics'>
 <Statistics options={this.state}
   good={this.state.good}
   neutral={this.state.neutral} 
   bad={this.state.bad}
   total={total}
   positivePercentage={positivTotal}>
   </Statistics>
   </Section>
   
   
  </div>)
 
   
}
}

