import { Col, Container, Row } from "react-bootstrap"
import ProfileJumbo from "../Components/ProfileJumbo"
import Sidebar from "../Components/Sidebar"

const Profile = () => {
    return (
        <Container>
            <Row>
                <Col xs='12' md='9'>
                    <ProfileJumbo />
                </Col>
                <Col xs='12' md='3'>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile