import { useState } from 'react'
import axios from "axios"
import{useState, useEffect} from "react"
import './index.css'
import {Link, useNavigate}from "react-router-dom"


function Index() {
    const navigate = useNavigate()
 const [allbudgetData, setAllBudgetData]=useState([])
 


 const API =import.meta.env.VITE_APP_API_URL
//  console.log(API)
useEffect(()=>{
axios
 .get(`${API}/transactions`)
 .then(response=>{
  // console.log(response)
  setAllBudgetData(response.data)
 })
 .catch(()=>{
    navigate("/")
 })
}, [navigate, API])


  return (
  <div>
    <h1>
<Link to="/">
    <p>HomePage1</p>
</Link>
    </h1>
    <ul>
       {allbudgetData.map((resource)=>{
        <li key={resource.id}>
        <a href={`/transactions/${resource.id}`}>{resource.item_name}</a>
        </li>
       })}
    </ul>
  </div>
  
    
   
  )
}

export default Index
