import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parseISO, differenceInHours  } from "date-fns"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const SinglePost = ({ post }) => {

    const [selectedPost, setSelectedPost] = useState(null)
    const [selectedPostDetails, setSelectedPostDetails] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

    const fetchPostDetails = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${selectedPost}`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
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
    }, [])


    return (
        <div className="profile-sub-section p-2 my-2">
            <Row className='pl-3 mb-2 justify-content-between mr-3 mt-2'>
                <div className="d-flex w-75">
                    <img src={post.user.image} className='profile-image' alt="" />
                    <div className="d-flex flex-column w-75 ml-2">
                        <Link to={`/profile/${post.user._id}`} className='text-dark'><h6 className='mb-0'>{post.user.name} {post.user.surname} &#8226; <span className='text-muted font-weight-normal'>Following</span></h6></Link>
                        <p className='text-muted reduced-text mb-0'>{post.user.bio}</p>
                        <p className='text-muted mb-0'>{differenceInHours(new Date(), parseISO(post.createdAt))}h &#8226; <i className='bi bi-globe2'></i></p>
                    </div>
                </div>
                <i className='bi bi-three-dots' onClick={() => {
                    handleShowModal()
                    setSelectedPost(post._id)
                }}></i>
            </Row>
            <p className='pl-2 mt-2 mb-2'>{post.text}</p>
            <hr className='my-1' />
            <Row className='text-muted post-actions justify-content-center'>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-hand-thumbs-up'></i>
                    <p className='mb-0 ml-2'>Like</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-chat-right-text'></i>
                    <p className='mb-0 ml-2'>Comment</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-arrow-90deg-right'></i>
                    <p className='mb-0 ml-2'>Share</p>
                </Col>
                <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                    <i className='bi bi-send'></i>
                    <p className='mb-0 ml-2'>Send</p>
                </Col>
            </Row>

            
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{selectedPostDetails?.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedPostDetails?.text}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseModal}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>{selectedPost}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseModal}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SinglePost