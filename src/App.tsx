import { useState } from 'react'
import reactLogo from './assets/react.svg'

const App = (): JSX.Element => {

  return (
    <>
      <div className='w-100 d-flex justify-content-center pt-4 align-items-center'>
        <h1 className='text-center px-4 py-2' style={{ border: "1px solid #fff", borderRadius: "10px", color: "white" }}>App todo</h1>
        <button className='btn btn-success mx-3'>Button</button>
      </div></>)
}

export default App
