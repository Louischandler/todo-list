//Parents
import Button from "./Button";
import Members from "./Members";
import List from "./List";

function Todo(props){
  return(
    <div className="items-center flex flex-col min-h-screen justify-center bg-gray-100 p-4">
        <h1 className="text-2x1 font-bold mb-4">TODO LIST</h1>
            <ul className="w-full max-w-md">
               <List item="Learn To React"/>
               <List item="Build a To-Do list"/>
               <List item="Master JavaScript"/>
               <List item="Apply for Jobs"/>
            </ul>   
            <div><Button/></div> 
            <div><Members/></div>
    </div>
  )

}
export default Todo;