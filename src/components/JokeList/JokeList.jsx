// JokeList.jsx
import React, { useState, useEffect } from 'react';
import './list.css';

const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/search', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJokes(data.results.map(joke => joke.joke));
      setFilteredJokes(data.results.map(joke => joke.joke));
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredJokes(jokes);
    } else {
      const filtered = jokes.filter(joke => joke.toLowerCase().includes(term.toLowerCase()));
      setFilteredJokes(filtered);
    }
  };

return (
    <div>
        <div className='container'>
            <h1>Dad Jokes</h1>
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search Jokes"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className="joke-con">
                <ul>
                    {filteredJokes.map((joke, index) => (
                        <div className="joke" key={index}>
                            <li>{joke}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
        <div className="footer">
            <p>© 2024 Dad Jokes</p>
            <p>Made By <a href="https://tejasmane.netlify.app/">Tejas Mane</a></p>
        </div>
    </div>
);
};

export default JokeList;
