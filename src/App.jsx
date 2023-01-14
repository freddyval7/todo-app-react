import { useState, useEffect } from 'react'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'

function App() {

  const [click, setClick] = useState("all")

  const [chores, setChores] = useState(JSON.parse(localStorage.getItem("chores")) ?? [])
  const [chore, setChore] = useState("")

  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem("checked")) ?? [])

  useEffect(() => {
    if(chores && chores.length){
      if(checked && checked.length){
        let lastChecked = checked[checked.length - 1]
        lastChecked = false
        return setChecked([...checked, lastChecked])
      } 
      setChecked(new Array(chores.length).fill(false))
    }
  }, [chores])

  useEffect(() => {
    if(chores && chores.length){
      localStorage.setItem("chores", JSON.stringify(chores))
    }
  },[chores])

  useEffect(() => {
    if(checked && checked.length){
      localStorage.setItem("checked", JSON.stringify(checked))
    }
  },[checked])

  const handleClick = (id) => {
    setClick(id)
  }

  return (
    <div>
      <h1 className='font-bold text-4xl w-full text-center container mx-auto mt-5 mb-10'>#todo</h1>
      <div className='flex justify-between font-semibold container w-5/6 md:w-1/2 mx-auto border-b-gray-200 border-b-2 py-3 px-10'>
        <button
          className={`button ${click === "all" ? "text-active" : ""}`}
          id='all'
          onClick={() => handleClick("all")}
        >All</button>
        <button
          className={`button ${click === "active" ? "text-active" : ""}`}
          id='active'
          onClick={() => handleClick("active")}
        >Active</button>
        <button
          className={`button ${click === "completed" ? "text-active" : ""}`}
          id='completed'
          onClick={() => handleClick("completed")}
        >Completed</button>
      </div>

      {click === "all" ? (
        <All
          chore={chore}
          setChore={setChore}
          chores={chores}
          setChores={setChores}
          checked={checked}
          setChecked={setChecked}
        />
      ) : click === "active" ? (
        <Active
          chore={chore}
          setChore={setChore}
          chores={chores}
          setChores={setChores}
          checked={checked}
          setChecked={setChecked}
        />
      ) : click === "completed" ? (
        <Completed
          chore={chore}
          setChore={setChore}
          chores={chores}
          setChores={setChores}
          checked={checked}
        />
      ) : null}
    </div>
  )
}

export default App
