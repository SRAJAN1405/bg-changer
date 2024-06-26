
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 "
      style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-16
      inset-x-0 px-2 ">
      <div className="fixed flex flex-wrap
      justify-center bg-white rounded-3xl gap-3 px-3 py-2" >
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>Violet</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"orange"}} onClick={()=>setColor("Orange")}>Orange</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"grey"}} onClick={()=>setColor("grey")}>Grey</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"Teal"}} onClick={()=>setColor("Teal")}>Teal</button>
        <button className="outline-none px-4  rounded-3xl text-white" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
      </div>
      </div>
     </div>
  )
}

export default App
