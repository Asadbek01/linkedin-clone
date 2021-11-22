import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileOptions from "./ProfileOptions";
import SidebarProfiles from "./SidebarProfiles";


const Sidebar = () => {
  
  let navigate = useNavigate();

  const [profiles, setProfiles] = useState([]);

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
        console.log("Something goes wrong while fetching the data");
      }
    } catch (err) {
      console.log("error connecting to the server");
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);


  return (
    <>
      <ProfileOptions />

      <div className='sidebar-wrapper'>
      <h5 className='my-3 mb-4'>People you may know</h5>

        { profiles && 
        profiles.slice(0, 7).map(({ _id, image, name, surname, title}) => (
          <SidebarProfiles  _id={_id} image={image} name={name} surname={surname} title={title}/>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
