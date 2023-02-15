import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";



export default function AllRoutes( ){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                
            </Routes>
        </div>
    )
}
