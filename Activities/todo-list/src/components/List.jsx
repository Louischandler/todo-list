//Child
function List(props){
  return(
    <div className="p-4 border-b-1 flex items-center justify-left mb-2 ">
        <input type="checkbox" className="mr-2" />
        <span className="flex">{props.item}</span>
    </div>
  )
}
export default List;