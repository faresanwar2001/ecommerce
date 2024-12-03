import  { Toaster } from 'react-hot-toast';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Categories from './components/Categories/Categories'
import Notfound from './components/Notfound/Notfound'
import Brands from './components/Brands/Brands'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider from './Context/UserContext'
import CartContextProvider from './Context/CartContext'
import CheckOut from './components/CheckOut/CheckOut';




let routers = createBrowserRouter([
  {path:"" ,element:<Layout/> , children:[
    {index:true,element:<ProtectedRoute> <Home/> </ProtectedRoute> },
    {path:"products",element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:"categories",element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:"cart",element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:"productDetails/:id/:category",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"checkout",element:<ProtectedRoute><CheckOut/></ProtectedRoute>},
    {path:"register",element:<Register/>},
    {path:"login",element:<Login/>},
    {path:"*",element:<Notfound/>},

  ]}
])
function App() {
  

  return (
    <>
    <CartContextProvider>
    <UserContextProvider>
    <CounterContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster/>

    </CounterContextProvider>

    </UserContextProvider>
    </CartContextProvider>

   
    </>
  )
}

export default App
