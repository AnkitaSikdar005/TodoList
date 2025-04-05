import { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")// input text
  const [todos, setTodos] = useState([])// array of todos
  const [showFinished, setshowFinished] = useState(true)
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  
   //save to localStorage
   const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
   }

   const toggleFinished =(params) =>{
      setshowFinished(!showFinished)
   }
   

  const handleEdit = (e,id) => {
   let t= todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    //deleting
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLs()

  }
  const handleDelete = (e,id) => {
      let newTodos = todos.filter(item=>{
        return item.id!==id
      });
      setTodos(newTodos)
      saveToLs()
 
    console.log(`The id is ${id}`) 
}
  const handleAdd = () => {
   setTodos([...todos,{id: uuidv4(),todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
    saveToLs()
  }

  const handleChange= (e)=>{ 
    setTodo(e.target.value)
  }  

  const handleCheckbox = (e) => {
   let id= e.target.name
   let index = todos.findIndex(item=>{
    return item.id === id
   })
    let newTodos = [...todos] ;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLs()
  }
  
  
  return (
    <>
    <Navbar/>
     <div className="md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[50%]">
      <h1 className='font-bold text-center text-3xl'>iTask - Manage your todos at one place</h1>
      <div className="addTodo my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Add a Todo</h2>
        <div className="flex">
        <input name="{todo.isCompleted}" onChange={handleChange} value={todo} type="text" className="bg-white border border-gray-300 rounded-full w-full px-5 py-1 "/>
        {/* todo of length <=3 cannnot be added */}
        <button onClick={handleAdd}  disabled={todo.length<=3} className="bg-violet-800 rounded-full hover:bg-violet-950 disabled:bg-violet-700 p-4 py-2 text-white   ">Save</button>
        </div>
      </div>
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} />
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-violet-700 opacity-25 w-[90%] mx-auto my-2'></div>
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div>No Todos to display</div>}
          {todos.map(item=>{

         return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-full  my-3 justify-between items-start">
               <div className='flex gap-5 w-full'>   
             <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
               <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
               </div>
               <div className="buttons flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}}className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1"><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e,item.id)}}className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1"><AiFillDelete /></button>
               </div>
            </div>
           })}
        </div>
      </div>

    </>
  )
}

export default App
