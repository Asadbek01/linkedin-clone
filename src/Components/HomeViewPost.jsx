import { useState, useEffect } from 'react'
import SinglePost from './SinglePost'
import SkeletonPost from './SkeletonPost'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const HomeViewPost = ({ postsAdded }) => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [randomNumber, setRandomNumber] = useState(0)
    const [numOfPosts, setNumOfPosts] = useState(20)

    const [postsChanged, setPostsChanged] = useState(0)
    const [selectedPost, setSelectedPost] = useState(null)
    const [selectedPostDetails, setSelectedPostDetails] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const fetchPostDetails = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWI0NmFhY2FhMjAwMTU1MmEzYWQiLCJpYXQiOjE2NTQyNzg4MDIsImV4cCI6MTY1NTQ4ODQwMn0.0YKFB7YP5H1tqH_-UOhnuHDBqMeJ3Jdlnyf0TCRXEiY",
                }
            })
            if (response.ok) {
                const data = await response.json()
                setSelectedPostDetails(data)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPostDetails()
    }, [selectedPost])

    const handleEdit = (id) => {
        setSelectedPost(id)
        handleShowModal()
    }

    const handleDeletePost = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.status === 401) alert('You Can Only Edit Or Delete Your Own Posts')
            if (response.ok) {
                setPostsChanged(count => count + 1)
                handleCloseModal()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdatePost = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`, {
                method: 'PUT',
                body: JSON.stringify({
                    "text": selectedPostDetails.text
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.status === 401) alert('You Can Only Edit Or Delete Your Own Posts')
            if (response.ok) {
                setPostsChanged(count => count + 1)
                handleCloseModal()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts', {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setPosts(data)
                setRandomNumber(Math.floor(Math.random() * (data.length - 100)))
                setIsLoading(false)
                console.log(data)
            } else {
                console.error('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, [postsAdded, postsChanged])

    return (
        <>
            {
                isLoading &&
                [1, 2, 3, 4].map(number => <SkeletonPost key={number} />)
            }
            {
                posts &&
                posts.slice(posts.length - numOfPosts, posts.length).reverse().map(post => <SinglePost post={post} handleEdit={handleEdit} />)
            }
            {posts && <div className="d-flex justify-content-center mt-3"><button className='button main-btn-outline' onClick={() => setNumOfPosts(count => count + 20)} >Show More </button></div>}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedPostDetails?.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control as="textarea" className='border-0' rows={3} value={selectedPostDetails?.text} onChange={e => setSelectedPostDetails({ ...selectedPostDetails, text: e.target.value })} />
                    </Form>
                    {selectedPostDetails?.image && <img src={selectedPostDetails.image} className='w-100' />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleUpdatePost}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={handleDeletePost}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default HomeViewPost