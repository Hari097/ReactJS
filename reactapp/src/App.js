import LettersCalculator from './Componests/LettersCalculator';
import './App.css';
import { Component } from 'react';
class App extends Component {




  render() {


  return(
    <div className='letter-card-container'>

<div className='letter-card'>
  <div className='heading-card'>
    <h1 className='heading'>Calculate the lettes you enters</h1>
  </div>

  <div className='image-card'>
  <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' alt='image' className='image'/>
  </div>

</div>

      <LettersCalculator/>
    </div>
  )
  }
}

export default App;
