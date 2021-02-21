import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
 state = {
  persons: [
    {name: 'Hussain',age :24},
    {name: 'Haider',age :75},
    {name: 'Nazrah',age :23}
  ],
  otherProperty: 'badboo shark'
 }

 nameChangedHandler = (event) => {

  this.setState({
    persons: [
      {name: 'Hussain',age :24},
      {name: event.target.value ,age :75},
      {name: 'Nazrah',age :22}
    ]

     
  });

 }

 switchNameHandler = (newName) => {
  //console.log('was clicked!');
  this.setState({
    persons: [
      {name: newName,age :24},
      {name: 'Haider',age :75},
      {name: 'Nazrah',age :22}
    ]

     
  });
};


   render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
     
    return (
      <div className="App">
      <h1>This is a react application.</h1>
      <p>this works.</p>
      <button style={style}
      onClick={()=> this.switchNameHandler('Hussain!!')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler.bind(this, 'badboo shark')} />
      
      <Person name={this.state.persons[1].name} 
      age={this.state.persons[1].age} 
      changed={this.nameChangedHandler}>My Hobbies: Cricket</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }


 


}

export default App;
