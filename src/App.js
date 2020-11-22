import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import QuizCard from './components/quizCard';
import ScoreCard from './components/scoreCard';
import Footer from './components/footer';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container-fluid'>
        <Header />
        <ScoreCard />
        <QuizCard />
        <Footer />
      </div>
     );
  }
}
 
export default App;