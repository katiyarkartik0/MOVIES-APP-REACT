import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";


class App extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre"
  }

  setFilter = (filter) =>{
    this.setState({ selectedFilter: filter})
  }

  toggleLike = (id) =>{
    let index = this.state.movies.findIndex((el)=>{
      return el._id === id;
    })
    
    let currMoviesArr = this.state.movies.map((el) => el);
    if(currMoviesArr[index].liked){
      currMoviesArr[index].liked=false;
    }
    else{
      currMoviesArr[index].liked=true;
    }

    this.setState({movies:currMoviesArr})
  }

  deleteMovies = (id) =>{
    let filteredArr = this.state.movies.filter((el) =>{
      return el._id !== id;
    })

    this.setState({movies:filteredArr})
  }
  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");

      let genreJson = await responseGenre.json();
      let moviesJson = await responseMovies.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson
      })
    };

    f();
  }

  render() {
    return <div>
  
      <Navbar />
      
      <div className="row">
        <Filter 
        handleFilter = {this.setFilter}
        selectedFilter={this.state.selectedFilter}
        genreData = {this.state.genre}/>
        <div class = "col-9 p-4">
          <Search total = {this.state.movies.length}/>
          <div class = "col-9">
          <Table 
          toggleLike={this.toggleLike}
          deleteMovies={this.deleteMovies}
          selectedFilter={this.state.selectedFilter}
          moviesData = {this.state.movies}/>
          </div>
          
        </div>
        


    
      </div>

    </div>
  }
}

export default App;
