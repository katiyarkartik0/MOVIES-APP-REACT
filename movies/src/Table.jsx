import Pagination from "./Pagination";
import React from "react";
import "./Table.css"

class Table extends React.Component {
    state = {
        currPage: 1,
    }

    selectPage = (value) =>{
        this.setState({currPage:value});
    }
    render() {
        let allMovies = this.props.moviesData;
        let currFilter = this.props.selectedFilter;
        

        let FilteredMoviesArray = allMovies.filter((el) => {
            if (currFilter == "All Genre") {
                return el;
            }
            else if (currFilter == el.genre.name) {
                return el;
            }
        })

        FilteredMoviesArray = FilteredMoviesArray.filter((el)=>{
            let UIoutput = el.title
            UIoutput = UIoutput.toLowerCase();
            let userInput = this.props.search.toLowerCase();
            if(UIoutput.includes(userInput)){
                return el;
            }
        })
        let numberOfPages = Math.ceil(FilteredMoviesArray.length/4);
        let startIndex = (this.state.currPage - 1) * 4;
        let endIndex = Math.min(FilteredMoviesArray.length, this.state.currPage * 4)
        let arrToBeUsedInTable = FilteredMoviesArray.slice(startIndex, endIndex);
        return (
            <>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrToBeUsedInTable.map((el) => {
                                return (
                                    <tr key={el._id}>
                                        <td>{el.title}</td>
                                        <td>{el.genre.name}</td>
                                        <td>{el.numberInStock}</td>
                                        <td>{el.dailyRentalRate}</td>
                                        <td
                                            onClick={() => {
                                                this.props.toggleLike(el._id);
                                            }}
                                        >
                                            {el.liked ? (
                                                <span class="material-icons-outlined">favorite</span>
                                            ) : (
                                                <span class="material-icons-outlined">
                                                    favorite_border
                                                </span>
                                            )}
                                        </td>
                                        <td
                                            onClick={() => {
                                                this.props.deleteMovies(el._id);
                                            }}
                                        ><button class="table-delete-btn">delete</button></td>
                                    </tr>
                                )
                            })

                            }
                        </tbody>

                    </table>
                </div>
                <Pagination 
                selectPage={this.selectPage}
                currPage = {this.state.currPage}
                numberOfPages={numberOfPages}/>
            </>

        )

    }
}

export default Table;