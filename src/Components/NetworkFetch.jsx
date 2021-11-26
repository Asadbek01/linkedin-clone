import { useEffect, useState } from "react"
import NetworkCard from "./NetworkCard"
import { Row, Col } from "react-bootstrap"

const NetworkFetch = () => {
  const [profiles, setProfiles] = useState([])

  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (res.ok) {
        let data = await res.json()
        setProfiles(data)
        console.log(data)
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
    <div className="profile-sub-section mt-4 container">
      <Row className=" pt-3 pb-0">
        <Col xs="8">
          <p className=" pl-3 ">Pepole You may know from Strive School </p>
        </Col>
        <Col xs="4" className="d-flex align-items-center ">
          <p className="   ml-auto">See all</p>
        </Col>
      </Row>

      <Row className="p-3 mt-0 ">
        {profiles &&
          profiles.slice(0, 50).map(({ _id, image, name, surname, title }) => (
            <Col xs="12" sm={6} md="3" key={_id}>
              <NetworkCard
                _id={_id}
                image={image}
                name={name}
                surname={surname}
                title={title}
              />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default NetworkFetch
