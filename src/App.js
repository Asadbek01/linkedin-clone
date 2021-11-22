import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import MyNavbar from './Components/MyNavbar'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import ProfileDetails from './Pages/ProfileDetails'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/profile/:profileId' element={ <ProfileDetails /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

