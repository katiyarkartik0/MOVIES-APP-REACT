let Search = (props) => {
    return (
        <>
            <p class="mt-4">
                Showing {props.total} movies from the database
            </p>
            <div >
                <button type="button" class="btn btn-primary ">New</button>
            </div>

            <div class="col-5 mt-4">
                <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping"></input>
                </div>
            </div>
        
        </>
    )
}

export default Search;