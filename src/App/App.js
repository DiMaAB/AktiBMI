import React, { Component } from 'react';
import './App.css';
import StartPage from '../StartPage/StartPage';
import Menu from '../Menu/Menu';
import {Switch, Route} from 'react-router-dom';
import Vaga from '../Vaga/Vaga';
import moment from 'moment';
class App extends Component {
  state={
    male: false,
    female: false,
    growth: '',
    weight: '',
    wantWeight: '',
    date: '',
    resultSub: 0,


  }
  
  componentDidMount(){
    this.time();
  }
 
  checkMale=()=>{
    this.setState({
      male: true,
      female: false,
      })
  }
  checkFemale=()=>{
    this.setState({
      female: true,
      male: false,
      })
  }
  
  inputChange=(e)=>{
      // console.log(e);
    let value=e.target.value;
    let name=e.target.name;
    this.setState({
        [name]: value,
    })
  }
  time=()=>{
    setInterval(()=>{
      let getTime=moment().format('L');
      this.setState({
        date: getTime,
      })
    }, 0)
  }
  sub=()=>{
    this.setState({
      resultSub: this.state.weight - this.state.wantWeight,
    })
  }

  render() {
    const{gender,growth,weight,wantWeight,date,resultSub,male,female}=this.state;
    console.log(date);
    return (
      <div>
        
        {/* <Menu/> */}
        <Switch>
            <Route exact path="/" render={() =>
            <StartPage 
            gender={gender} 
            growth={growth} 
            weight={weight}
            sub={this.sub}
            male={male}
            female={female}
            checkMale={this.checkMale}
            checkFemale={this.checkFemale}
            inputChange={this.inputChange}/>}/>
            <Route path="/save" render={ (props) => 
            <Menu  
            growth={growth} 
            weight={weight} 
            wantWeight={wantWeight}
            date={date}
            male={male} 
            resultSub={resultSub}
            {...props}/>}/>

           
        </Switch>
        {/* <Vaga growth={growth} weight={weight}/> */}
      </div>
    );
  }
}

export default App;