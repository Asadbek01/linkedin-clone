import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import SinglePost from '../Components/SinglePost'
import { useEffect, useState } from 'react'

const Post = () => {

    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [profile, setProfile] = useState(null)

    const fetchPost = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setPost(data)
                fetchProfile(data.user)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchProfile = async id => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setProfile(data)
                console.log(data)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs='8'>
                    {(post && profile) && <SinglePost post={post} profile={profile}/> }
                </Col>
            </Row>
        </Container>
    )
}

export default Post