import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
 state = {
  persons: [
    {name: 'Hussain',age :24},
    {name: 'Haider',age :75},
    {name: 'Maria',age :23}
  ],
  otherProperty: 'badboo shark',
  showPersons: false

 }

 nameChangedHandler = (event) => {

  this.setState({
    persons: [
      {name: this.state.persons[0].name,age :24},
      {name: event.target.value ,age :75},
      {name: 'Maria',age :this.state.persons[2].age}
    ]

     
  });

 }

 deletePersonsHandler = () =>{

 }

togglePersonsHandler= () => {
  const doesShow= this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  });


}


   render() {

    let persons=null;
    if(this.state.showPersons) {
      persons=(
      
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={this.deleteNameHandler}
            name={person.name} 
            age={person.age} />
          })
          }
   
  
        </div> 
      );
    }

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
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}

       
     
      </div>
    );
  }


 


}

export default App;
