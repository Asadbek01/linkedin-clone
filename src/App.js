import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer2 from "./Components/Footer2"
import MyNavbar2 from "./Components/MyNavbar2"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Profile from "./Pages/Profile"
import ProfileDetails from "./Pages/ProfileDetails"
import Jobs from "./Pages/Jobs"
import Messages from "./Pages/Messages"
import Network from "./Pages/Network"
import Notifications from "./Pages/Notifications"
import "./Footer.css"
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/network" element={<Network />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<ProfileDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  )
}

export default App

