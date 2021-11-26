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
import NetworkFetch from "../Components/NetworkFetch"

const Network = ({myInfo}) => {
  const [postsAdded, setPostsAdded] = useState(0)
  return (
    <Container>
      <Row>
        <Col xs="4">
          <NetWorkLeftSideBar myInfo={myInfo}/>
        </Col>
        <Col xs="8">
          <NetworkFirstPart />
          <NetworkFetch />
        </Col>
      </Row>
    </Container>
  )
}

export default Network
