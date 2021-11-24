import HomeLeftSidebar from "../Components/HomeLeftSidebar"
import HomeRightSidebar from "../Components/HomeRightSidebar"
import HomeCreatePost from "../Components/HomeCreatePost"
import HomeViewPost from "../Components/HomeViewPost"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs='2'>
                    <HomeLeftSidebar />
                </Col>
                <Col xs='7'>
                    <HomeCreatePost />
                    <HomeViewPost />
                </Col>
                <Col xs='3'>
                    <HomeRightSidebar />
                </Col>
            </Row>
        </Container>
    )
}

export default Home