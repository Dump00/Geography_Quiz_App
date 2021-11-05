import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
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
          <ToastContainer />
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
    let string;
    if(score >= 0 && score <= 5){
        string = "Not Bad !";
    } else if (score > 5 && score <= 8){
        string = "You are Good !";
    } else {
        string = "Awesome !";
    }
    score = (status === true) ? score+=1 : score;
    if(index === 9){
      toast.error(`${string} Your Score is ${score} out of 10. If You Want To Take An Another Shot, Refresh The Page.`);
      setTimeout(() => {
        window.location.reload();
      }, 8000)
    }
    index = (index <= 8) ? index+=1 : index;
    this.setState({ 
      starting_index : index,
      score
    });
  }
}
 
export default App;