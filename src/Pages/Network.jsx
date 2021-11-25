import HomeLeftSidebar from "../Components/HomeLeftSidebar"
import HomeRightSidebar from "../Components/HomeRightSidebar"
import HomeCreatePost from "../Components/HomeCreatePost"
import HomeViewPost from "../Components/HomeViewPost"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import HomeSideBarFooter from "../Components/HomeSideBarFooter"
import NetWorkLeftSideBar from "../Components/NetWorkLeftSideBar"
import NetworkFirstPart from "../Components/NetworkFirstPart"

const Network = () => {
  const [postsAdded, setPostsAdded] = useState(0)
  return (
    <Container>
      <Row>
        <Col xs="4">
          <NetWorkLeftSideBar />
        </Col>
        <Col xs="8">
          <NetworkFirstPart />
        </Col>
      </Row>
    </Container>
  )
}

export default Network
