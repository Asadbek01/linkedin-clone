import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ProfileOptions from "./ProfileOptions";


const Sidebar = () => {
  
  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }
  const [singleProfile, setSingleProfile] = useState([]);

  const { REACT_APP_TOKEN } = process.env;
  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );

      if (res.ok) {
        let data = await res.json();
        setSingleProfile(data);
        console.log(singleProfile);
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

      <div
        style={{
          backgroundColor: "#ffff",
          border: "solid 1px lightgray",
          paddingLeft: "5%",
          paddingTop: "5%",
          borderRadius: "15px",
        }}
      >
        <h5 style={{ paddingBottom: "15%" }}>People you could know</h5>

        {singleProfile.slice(0, 7).map((e) => (
          <Card
            key={e._id}
            style={{ marginBottom: "5%", border: "none", textAlign: "center" }}
          >
            <Card.Img
              variant="top"
              src={e.image}
              style={{ borderRadius: "50%", maxWidth: "19%" }}
            />
            <Card.Body
              style={{
                paddingLeft: "10%",
                marginLeft: "5%",
                marginTop: "-25%",
              }}
            >
              <Card.Title>
                {e.name}
                {e.surname}
              </Card.Title>
              <Card.Text>{e.title} </Card.Text>
              <div style={{borderRadius:'50%'}}>
              <Button className='btn'
                variant="outline-secondary"
                onClick={() => navigate(`/profile/${e._id}`)}
              >
                Connect
              </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
