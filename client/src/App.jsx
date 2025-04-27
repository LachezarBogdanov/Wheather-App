import './App.css'
import Wheather from './components/Wheather/Wheather'

import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <div className='app'>
        <Wheather />
        <ToastContainer />
    </div>
    </>
  )
}

export default App
