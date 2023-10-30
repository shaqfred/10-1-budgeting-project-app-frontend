import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
 const [budgetData, setBudgetData]=useState([])
 
 const API =import.meta.env.VITE_APP_API_URL
 console.log(API)
 axios.get(
  `${API}/transactions
  `

 ).then(response=>{
  // console.log(response)
  setBudgetData(response.data)
 }).catch(error=>console.log(error))


  return (
  
    <div className='App'>Home</div>  
   
  )
}

export default App
