let Pagination = (props) => {
  console.log(props);
  let arr = [];
  for (let i = 1; i <= props.numberOfPages; i++) {
    arr.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination mt-4">
        {arr.map((el) => {
          return (
            <li 
            onClick={(e)=>{
              props.selectPage(el);
            }}
            class={`page-item ${props.currPage===el?"active":""}`}>
              <a class="page-link">{el}</a>
            </li>
          );
        })}

      </ul>
    </nav>
  )
}

export default Pagination;