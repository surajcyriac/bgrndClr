import { useState } from 'react'
import './App.css'

function App() {

  // js code
const clor=(value)=>{
const data=value
document.body.style.backgroundColor=data
}
  return (
    // jsx code
    <>
     <div>
        <h1 className='text-center mt-5 '>Change colours </h1>
       <div className='innerdiv'>
          <button onClick={()=>clor(" rgb(247, 158, 50)")} className='m-5  button1'></button>
          <button onClick={()=>clor(" rgb(76, 118, 244")} className='m-5  button2' ></button>
          <button onClick={()=>clor("rgb(12, 197, 12)")} className='m-5  button3'></button>
          <button onClick={()=>clor(" rgb(172, 63, 223)")} className='m-5  button4'></button>
          <button onClick={()=>clor(" rgb(237, 51, 51)")} className='m-5  button5'></button>

       </div> </div>
    </>
  )
}

export default App
