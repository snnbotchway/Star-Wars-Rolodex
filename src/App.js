import { useEffect, useState } from 'react';
import CardList from './components/card_list/card_list_component'
import SearchBox from './components/search_box/search_box_component.jsx'
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([characters]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json'
    fetch(url)
      .then((response) => response.json())
      .then((users) => setCharacters(users))
  },[]);

  useEffect(() => {
    const currentFilteredCharacters = characters.filter(
      (character) => {
        return character.name.toLocaleLowerCase().includes(searchField)
      });
    setFilteredCharacters(currentFilteredCharacters);
  },[searchField,characters]);
  
  const search = (e) => {
    const currentSearchField = e.target.value.toLocaleLowerCase()
    setSearchField(currentSearchField)
  }
  
  return (
    <div className="App">
        <h1 className='title'>Star Wars Rolodex</h1>
        <SearchBox className='characters-search-box' search={search} placeholder='Search characters...'/>
        <CardList className='characters-card-list' characters={filteredCharacters} />
      </div>
  );
}
 
export default App;
