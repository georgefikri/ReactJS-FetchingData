import React from 'react';
import './App.css';

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

class App extends React.Component {
  constructor(){
    super();
    this.state= {
        /* add boolean because if loading print word loading */
        loading: false,
        info: {}
    }
  }

  componentDidMount(){
    /* Before the Fetch : changing the state of loading to true to print word loading */
    this.setState({loading:true})
    fetch("https://swapi.co/api/people/1")
    .then( response => response.json())
    .then(data => {
      this.setState({
        /* after fetching and getting the data reversing the loading to false print our data back */
        loading: false,
        info: data
      })
    })
  }

  render(){
    /* if state.loading is true print word loading else print name */
    let getData = this.state.loading === true ? "loading..." : this.state.info.name

    return (
        <div>
          {getData}
        </div>
    )
  }
}
export default App;
