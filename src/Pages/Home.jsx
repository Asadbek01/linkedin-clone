import HomeLeftSidebar from "../Components/HomeLeftSidebar"
import HomeRightSidebar from "../Components/HomeRightSidebar"
import HomeCreatePost from "../Components/HomeCreatePost"
import HomeViewPost from "../Components/HomeViewPost"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Home = () => {

    const [postsAdded, setPostsAdded] = useState(0)

    return (
        <Container>
            <Row>
                <Col xs='3'>
                    <HomeLeftSidebar />
                </Col>
                <Col xs='6'>
                    <HomeCreatePost setPostsAdded={setPostsAdded} />
                    <HomeViewPost postsAdded={postsAdded} />
                </Col>
                <Col xs='3'>
                    <HomeRightSidebar />
                </Col>
            </Row>
        </Container>
    )
}

export default Home