import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RankList from './components/RankList'

function App() {


  return (
    <div className='flex content-center flex-col flex-1 contain bg-[#333333] m-0 p-0  min-h-full'>
      <Navbar />
      <div className='content-center justify-around'>
        <h1 className='font-small text-[#ffffff] text-2xl'>Top 3</h1>
      </div>
      <div className='m-2 flex flex-col content-center mb-4 mt-2'>
        <RankList />
      </div>
      <div className='flex align-middle justify-around mt-2 mb-4'>
        <button className='font-small rounded-md w-12 h-8 bg-[#FECD04]'>Add</button>
      </div>
      <div className='flex justify-around text-[#ffffff]'>desgined by @Anudeep</div>
    </div>
  )
}

export default App
