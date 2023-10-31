import react from "react"
import axios from "axios"
import{ useState, useEffect} from "react"
import { Link } from "react-router-dom"
// import { redirect } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"


function App() {
    const API =import.meta.env.VITE_APP_API_URL
    
 const [budgetData, setBudgetData]=useState([])
 
useEffect(()=>{
axios
 .get(`${API}/transactions`)
 .then((response) => {
   console.log(response.data)
  setBudgetData(response.data)
 })
 .catch((error)=>console.log(error))},
    
[])

 return (
    <Router>

  
  <div>
    <h1>
<Link to="/">
    <p>HomePage1</p>
</Link>
    </h1>
    <ul>
       {budgetData.map((resource)=> <li key={resource.id}>
       
        <Link to={`/transactions/${resource.id}`}>{resource.item_name}</Link>
        </li>
       )}
    </ul>
  </div>
  </Router>
    
   
  )
    }  
export default App;

