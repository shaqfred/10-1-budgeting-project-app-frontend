import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import "./create1.css"


function Create1(){
    const [userInput, setUserInput]= useState({
       id: uuidv4,
       item_name: "",
       amount: "",
       date: "",
       from: "",
       category: "",
    })
        const [submitStatus, setSubmitStatus] = useState("")
        const API = import.meta.env.VITE_APP_API_URL
        const navigate = useNavigate()
        
        const handleInputChange = (event)=>{
            setUserInput({...userInput, [event.target.id]: event.target.value })

        }

        const handleSubmit = (event)=>{
            event.preventDefault()
            axios
            .post(`${API}/transactions`, userInput)
            .then((response)=>{
                setSubmitStatus(response.data)
                navigate("/transactions")
            })
            .catch((error)=>{
                console.log(error)
                setSubmitStatus("error")
            })
        }
        return(
            <div>
                {submitStatus === "success" && (
                    <div>Transaction successfully created!</div>
                )}
                {submitStatus === "error" && (
                    <div>There was an error creating the transaction.</div>
                )}
                <form onSubmit={handleSubmit}>
                    <label>
                        {" "}
                        Name:
                        <input
                        type="text"
                        value={userInput.item_name}
                        placeholder="Name"
                        onChange={handleInputChange}
                        id="name"
                        />
                    </label>
                    <label>
                        Amount:
                        <input
                        type="number"
                        value={userInput.amount}
                        placeholder="Number"
                        onChange={handleInputChange}
                        id="amount"
                        />
                    </label>
                    <label>
                        Date:
                        <input
                        type="text"
                        value={userInput.date}
                        onChange={handleInputChange}
                        id="date"
                        />
                    </label>
                    <label>
                        From:
                        <input
                        type="text"
                        value={userInput.from}
                        placeholder="From"
                        onChange={handleInputChange}
                        id="from"
                        />
                    </label>
                    <label>
                        Category:
                        <input
                        type="text"
                        value={userInput.category}
                        placeholder="Category"
                        onChange={handleInputChange}
                        id="category"
                        />
                    </label>
                    <button type="submit">Add New Item</button>
                </form>
            </div>
        )
}
export default Create1