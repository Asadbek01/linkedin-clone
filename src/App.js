import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

  const [data, setData] = useState(null)

  const fetchMyDetails = async () => {
      try {
          const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
              headers: {
                  'Authorization': process.env.REACT_APP_TOKEN
              }
          })
          if (response.ok) {
              const data = await response.json()
              setData(data)
          } else {
              console.error('fetch failed')
          }
      } catch (error) {
          console.error(error)
      }
  }

  useEffect(() => {
      fetchMyDetails()
      // eslint-disable-next-line
  }, [])

  return (
    <BrowserRouter>
      <MyNavbar data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/feed/post/:postId" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/network" element={<Network />} />
        <Route path="/notifications" element={<Notifications data={data} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:profileId" element={<ProfileDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

