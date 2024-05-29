
import { Component } from "react"
import './index.css'




class Feedback extends Component {  
  state = {clickemoji:false}
  feedbackcard =()=>{
    const {resourcesitems}=this.props
    const {emojis}=resourcesitems   
    
    return(

      <div className="feedbaack-card-container">
      <h1 className="">
      How satisfied are you with our Customer support performance
      </h1>
      <ul className="emojis-list">
        {
      emojis.map((each)=>(
      <li  key={emojis.id}>
      
      <button className="emojis-btn" onClick={this.onClickemoji}>
        <img src={emojis.imageUrl} alt={emojis.name} className="emoji"/>
      </button>
      
      <span>{emojis.name}</span>
      
      </li>
      
      ))
      
      
        }
      </ul>
            
          </div>
    )
  }

  thanksfeedback =()=>{

    return(

      <div className="feedbaack-card-container">
      
     
            
          </div>
    )
  }


  onClickemoji = () => {
this.setState({clickemoji:true})
  }
render(){ 

 
  const {clickemoji}=this.state

    return(
   
<div>
{
  clickemoji ? this.thanksfeedback() :this.feedbackcard()  
}
</div>

    )
}
} 
export default Feedback


