
import './App.css';
import { Component } from 'react';
import Feedback from './Componests/Feedback';

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}
class App extends Component {

  render(){ 

   
  
      return(
      <div className="feedback-main-container">
  
    
<Feedback resourcesitems={resources}/>
  
      </div>
  
  
      )
  }
  } 

export default App;

