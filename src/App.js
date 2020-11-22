import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import QuizCard from './components/quizCard';
import ScoreCard from './components/scoreCard';
import Footer from './components/footer';
import { quizList } from './db/quizList'

class App extends Component {
  state = { 
    list : quizList,
    starting_index : 0,
    score : 0
   }
  render() { 
    return ( 
      <div className='container-fluid'>
        <Header />
        <ScoreCard score={this.state.score}/>
        <QuizCard list={this.state.list} index={this.state.starting_index} onAnsSubmit={this.handleAnsSubmit}/>
        <Footer />
      </div>
     );
  }
  handleAnsSubmit = status => {
    let index = this.state.starting_index;
    let score = this.state.score;
    index = (index <= 9) ? index+=1 : index;
    score = (status === true) ? score+=1 : score;
    this.setState({ 
      starting_index : index,
      score
    });
  }
}
 
export default App;