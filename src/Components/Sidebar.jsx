import { useEffect, useState } from "react"
import OtherProfiles from "./OtherProfiles"
import ProfileOptions from "./ProfileOptions"

const Sidebar = () => {

  const [profiles, setProfiles] = useState([])

  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWI0NmFhY2FhMjAwMTU1MmEzYWQiLCJpYXQiOjE2NTQyNzg4MDIsImV4cCI6MTY1NTQ4ODQwMn0.0YKFB7YP5H1tqH_-UOhnuHDBqMeJ3Jdlnyf0TCRXEiY",
        }
      })
      if (res.ok) {
        let data = await res.json();
        setProfiles(data);
      } else {
        console.log("Something goes wrong while fetching the data")
      }
    } catch (err) {
      console.log("error connecting to the server")
    }
  }

  useEffect(() => {
    fetchingData()
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <ProfileOptions />
      <OtherProfiles title='People also viewed' profiles={profiles} />
      <OtherProfiles title='People you may know' profiles={profiles} />
    </>
  );
};

export default Sidebar