import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Enter } from './pages/Enter'
import { Login } from "./pages/Login"
import { Register } from './pages/Register'

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route>
                <Route path="/Enter" element={<Enter />}></Route>
                <Route path="/Register" element={<Register />}></Route>
            </Routes>
        </Router>
    )
}