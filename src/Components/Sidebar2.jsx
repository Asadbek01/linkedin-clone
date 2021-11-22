import { useEffect, useState } from "react"
import OtherProfiles from "./OtherProfiles"
import ProfileOptions from "./ProfileOptions"

const Sidebar2 = () => {
  
  const [profiles, setProfiles] = useState([])

  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/", {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          }
        })
      if (res.ok) {
        let data = await res.json();
        setProfiles(data);
        console.log(profiles);
      } else {
        console.log("Something goes wrong while fetching the data")
      }
    } catch (err) {
      console.log("error connecting to the server")
    }
  }

  useEffect(() => {
    fetchingData()
  }, [])


  return (
    <>
      <ProfileOptions />
      <OtherProfiles title='People also viewed' profiles={profiles} />      
      <OtherProfiles title='People you may know' profiles={profiles} />      
    </>
  );
};

export default Sidebar2
