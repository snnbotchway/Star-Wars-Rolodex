import { Component } from 'react';
import CardList from './components/card_list/card_list_component'
import SearchBox from './components/search_box/search_box_component.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    const url = 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json'
    fetch(url)
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return {characters: users}
          }
        )
      )
  }

  search = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(
      () => {
        return {searchField}
      }
    )
  }

  render(){
    const {characters, searchField} = this.state
    const {search} = this

    const filteredcharacters = characters.filter(
      (character) => {
        return character.name.toLocaleLowerCase().includes(searchField)
      })

    return (
      <div className="App">
        <h1 className='title'>Star Wars Rolodex</h1>
        <SearchBox className='characters-search-box' search={search} placeholder='Search characters...'/>
        <CardList className='characters-card-list' characters={filteredcharacters} />
      </div>
    );
  }
}

export default App;
