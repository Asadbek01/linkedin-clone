import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Components/Footer"
import MyNavbar from "./Components/MyNavbar"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import Profile from "./Pages/Profile"
import ProfileDetails from "./Pages/ProfileDetails"
import Jobs from "./Pages/Jobs"
import Messages from "./Pages/Messages"
import Network from "./Pages/Network"
import Notifications from "./Pages/Notifications"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
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
      <Footer />
    </BrowserRouter>
  )
}

export default App

