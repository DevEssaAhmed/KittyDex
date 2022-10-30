import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/searchbox/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <h1 className='app-title'>KittyDex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search'
        className='kitty-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </>
  );
};

export default App;
