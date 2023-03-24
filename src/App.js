import './App.css';
import aiddata from './aid-data-logo.png'
import { Component } from 'react';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      name: "",
      age: 0,
      season: "",
      car: "No",
      completed: false,
      welcomeText: "Please fill out the form below:"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  /**
   * handles changes to any of the questions
   */
  onChange(event){
    if(event.target.id==="name"){
      this.setState({
        name: event.target.value
      })
    }
    else if(event.target.id==="age"){
      this.setState({
        age: event.target.value
      })
    }
    else if(event.target.id==="favorite-season"){
      this.setState({
        season: event.target.value
      })
    }
    else{
      this.setState({
        car: event.target.value
      })
    }
  }

  /**
   * handles form submission
   */
  onSubmit(event){
    event.preventDefault();
    console.log(this.state.name + " " + this.state.age + " " + this.state.season + " " + this.state.car);
    this.setState({
      completed: true,
      welcomeText: "Thank you!"
    })
  }

  render(){
    return (
      <div className="App">
        <div className="body">
          <div className="form" id="form">
            <form id="input" onSubmit = {this.onSubmit} onChange={this.onChange}>
              <p id="welcome" style={{fontSize:25, paddingBottom:25}}>{this.state.welcomeText}</p>
              
              <div style={{display: 'flex', flexDirection: 'row'}} onChange={this.onChange}>
                <input type="text" placeholder="Name" id="name" maxLength="150" style={{flex:1, marginRight:'10px'}}></input>
                <input type="number" placeholder="Age" id="age" min="0" max="125" style={{flex:1}}></input>
              </div>
              
              <label for="favorite-season">What is your favorite season?</label>
              <select id="favorite-season" style={{width:'100%'}} onChange={this.onChange}>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
              </select>

              <div id="radio-wrapper" onChange={this.onChange}>
                <label>Can you drive a car?</label>
                <input type="radio" id="yes-car" value="Yes" style={{marginLeft: '15px'}} onChange={this.onChange} checked={this.state.car === "Yes"}/><label style={{fontSize:20}}>Yes</label>
                <input type="radio" id="no-car" value="No" style={{marginLeft: '15px', fontSize:20}} onChange={this.onChange} checked={this.state.car === "No"}/><label style={{fontSize:20}}>No</label>
              </div>

              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
          <div className="block">
            {this.state.completed &&
              <p style={{fontSize:20, paddingBottom:25}}>Your answers:<br/><br/>Name: {this.state.name}<br/>Age: {this.state.age}<br/>Favorite season: {this.state.season}<br/>Drives car? {this.state.car}</p>
            }
          </div>
          <img src={aiddata} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }

};

export default App;
