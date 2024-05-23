import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/web'
import Searchcode from './components/system'
import Price from './components/Package'




const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home  part={'1'}/>}></Route>
        <Route path='/dashbord' element={<Home part={'1'} />}></Route>
        <Route path='/home' element={<Home  part={'1'}/>}></Route>

        <Route path='/packages' element={<Price  part={'1'}/>}></Route>
        <Route path='/Packages' element={<Price  part={'1'}/>}></Route>


        <Route path='/Services' element={<Home  part={'2'}/>}></Route>



        <Route path='/Aboutus' element={<Home  part={'3'}/>}></Route>
        <Route path='/About' element={<Home  part={'3'}/>}></Route>


        <Route path='/Posts' element={<Home  part={'4'}/>}></Route>
        <Route path='/posts' element={<Home  part={'4'}/>}></Route>


        <Route path='/onePost/:postid' element={<Home  part={'5'}/>}></Route>
        <Route path='/onepost/:postid' element={<Home  part={'5'}/>}></Route>


        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>


        <Route path='/Searchcode' element={<Searchcode part={'1'} />} />
        <Route path='/Searchcode/dashbord' element={<Searchcode part={'1'} />} />


        <Route path='/Searchcode/search' element={<Searchcode part={'2'} />} />

        <Route path='/Searchcode/account' element={<Searchcode part={'3'} />} />
        <Route path='/Searchcode/*' element={<Searchcode part={'1000'} />} />
        <Route path='/*' element={<Home  part={'44'}/>}></Route>



      </Routes>
    </BrowserRouter>

  )
}

export default App