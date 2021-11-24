import { useState, useEffect } from 'react'
import SinglePost from './SinglePost'
import SkeletonPost from './SkeletonPost'
import MyButton from './MyButton'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const HomeViewPost = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [randomNumber, setRandomNumber] = useState(0)
    const [numOfPosts, setNumOfPosts] = useState(25)
    const [showModal, setShowModal] = useState(false)
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)

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
    }, [])

    return (
        <>
        {
            isLoading && 
            [1, 2, 3, 4].map(number => <SkeletonPost key={number}/> )
        }
        {
            posts &&
                posts.slice(posts.length - numOfPosts, posts.length).reverse().map(post => <SinglePost post={post} handleShowModal={handleShowModal}/> )
        }
        { posts && <div className="d-flex justify-content-center mt-3"><button className='button main-btn-outline' onClick={() => setNumOfPosts(count => count + 25)} >Show More </button></div> }

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
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

        </>
    )
}

export default HomeViewPost