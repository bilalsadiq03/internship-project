import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex  relative w-screen h-screen'>
      <Sidebar />
      <Header />
     </div>

     <div className='p-4 absolute top-16 left-60 bg-slate-100 h-full w-full'>
      <Main />
     </div>

    
     
    </>
  )
}

export default App
