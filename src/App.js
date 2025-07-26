import React from 'react';
import './App.css';
import useFetch from './useFetch';

/* thinking of what i will do
  1. create class component
  2. create render method 
  3. constructor function + super() + this.state
  4. use componentDidMount()
  5. use fetch to fetch the Data from our API
  6. handle promises.
  7. passing the data from our API to our state.
  8. check if the data didn't come yet print word "loading" other than that print the actual data.
*/

function App() {
  const { data: info, loading } = useFetch("https://swapi.co/api/people/1");

  const getData = loading ? "loading..." : info && info.name;

  return (
    <div>
      {getData}
    </div>
  );
}

export default App;
