import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ProfileJumbo from "../Components/ProfileJumbo"
import Sidebar from "../Components/Sidebar"
import { useParams } from "react-router-dom"
import ProfileSubSection from "../Components/ProfileSubSection"
import Experience from "../Components/Experience"

const ProfileDetails = ({ myInfo }) => {
  const params = useParams()
  const profileId = params.profileId
  console.log(profileId)

  const [data, setData] = useState(null)

  const fetchMyDetails = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profileId}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        setData(data)
      } else {
        console.error("fetch failed")
      }
    } catch (error) {
      console.error(error)
    }
}
    
    useEffect(() => {
        fetchMyDetails()
        // eslint-disable-next-line
    }, [profileId])

  return (
    <Container>
      <Row>
        <Col xs="12" md="9">
          <ProfileJumbo data={data} />
          <div className="dashboard"></div>
          <ProfileSubSection heading="Activity" myInfo={myInfo} />
        </Col>
        <Col xs="12" md="3">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileDetails
