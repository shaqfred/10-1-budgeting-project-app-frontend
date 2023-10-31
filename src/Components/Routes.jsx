import NavBar from "./NavBar.jsx"
import Create1 from "./Create1.jsx"
import Show from "./Show.jsx"
import HomePage1 from "./HomePage1.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "../App.jsx"


export default function Routes(){
    return (
        <div className="Routes">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage1 />} />
                    <Route path="/transactions" element={<App />} />
                    <Route path="/transactions/:id" element={<Show />} />
                    <Route path="/transactions/new" element={<Create1 />} />
                </Routes>
            </Router>
        </div>
    )
}