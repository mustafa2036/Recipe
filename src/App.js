import React , {useEffect, useState} from 'react'
import {Routes , Route , Navigate , useNavigate} from 'react-router-dom'
import Navbar from './Header/Navbar'
import Home from './Home/Home'
import Pizza from './Food/Pizza'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import NewsContextProvider from './Store/Store'
import Login from './Login/Login'
import Register from './Register/Register'
import jwtDecode from 'jwt-decode'
import Pasta from './Food/Pasta'
import Corn from './Food/Corn'
import HomeDetalis from './Home/HomeDetalis'
import Carrot from './Food/Carrot'
import NotFound from './NotFound/NotFound'
import Chicken from './Food/Chicken'
import Cake from './Food/Cake'


export default function App() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  function saveUserData()
  {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken)
    setUserData(decodedToken)
  }

  function logOut()
  {
    setUserData(null)
    localStorage.removeItem('userToken');
    navigate('/login')
  }

  useEffect(()=> {
    if(localStorage.getItem('userToken'))
    {
      saveUserData()
    }
  } , [])

  function ProtectedRoute(props)
  {
    if(localStorage.getItem('userToken') === null)
    {
      // Navigeto login
      return <Navigate to='/login'/>
    }
    else
    {
      // navigte li
      return props.children
    }
  }
  return (
    <>
    <NewsContextProvider>
      <Navbar logOut={logOut} userData={userData}/>
        <div className='container py-4'>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='home' element={<ProtectedRoute>{<Home/>}</ProtectedRoute>}/>
            <Route path='pizza' element={<ProtectedRoute><Pizza/></ProtectedRoute>}/>
            <Route path='pasta' element={<ProtectedRoute><Pasta/></ProtectedRoute>}/>
            <Route path='corn' element={<ProtectedRoute><Corn/></ProtectedRoute>}/>
            <Route path='carrot' element={<ProtectedRoute><Carrot/></ProtectedRoute>}/>
            <Route path='chicken' element={<ProtectedRoute><Chicken/></ProtectedRoute>}/>
            <Route path='cake' element={<ProtectedRoute><Cake/></ProtectedRoute>}/>
            <Route path='homedetalis' element={<ProtectedRoute><HomeDetalis/></ProtectedRoute>}>
            <Route path=':recipe_id' element={<ProtectedRoute><HomeDetalis/></ProtectedRoute>}/>
            </Route>
            <Route path='contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
            <Route path='login' element={<Login saveUserData={saveUserData}/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer/>
    </NewsContextProvider>
    </>
  )
}
