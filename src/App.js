import logo from './logo.svg';
import './App.css';
import React from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({[name]:value});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(res=>res.json()).
    then(res=> this.setState({robots:res}));
  }

  render(){
    const filterRobots = this.state.robots.filter((value)=>{
      return(value.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase()));
    });
    return (
      <div className="App">
        <h2>Monsters Rolodex</h2>
        <SearchBox name="searchField" placeholder="Search Robots" handleChange={this.handleChange} style="search"/>
        <CardList robots={filterRobots}/>
      </div>
    );
  }
  
}

export default App;
