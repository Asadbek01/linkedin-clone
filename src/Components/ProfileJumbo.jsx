import { useState } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import { useLocation, Link } from "react-router-dom"
import MyButton from './MyButton'
import { BsLinkedin } from 'react-icons/bs'

const ProfileJumbo = ({ data, handleShowModal }) => {

    const location = useLocation()
    const path = location.pathname

    const [contactModal, setContactModal] = useState(false)
    const closeContactModal = () => setContactModal(false)
    const showContactModal = () => setContactModal(true)

    const [imageModal, setImageModal] = useState(false)
    const closeImageModal = () => setImageModal(false)
    const showImageModal = () => setImageModal(true)
    
    return (
        <>
        {
            data && 
            <div className='profile-jumbo'>
                <div className="d-flex justify-content-between">
                    <img src={data.image} alt="" className='profile-image ml-4 mt-5' onClick={showImageModal}/>
                    <i className='bi bi-camera-fill bg-white mr-3 mt-4 pl-1'></i>
                </div>
                <div className='myDetails'>
                    <Row className='px-4 mt-2 pt-5 details-row'>
                        <Col xs='11' className='pb-3'>
                            <h3 className='mb-1'>{data.name} {data.surname}</h3>
                            <p className='mb-1'>{data.bio}</p>
                            <p className='text-muted mb-1'>{data.area} &#8226; <span className='text-link' onClick={showContactModal}>Contact Info</span> </p>
                            <p className='text-link mb-2'>500+ connections</p>
                            <MyButton type='button main-btn mr-2' text='Open to'/>
                            <MyButton type='button second-btn-outline mr-2' text='Add Section'/>
                            <MyButton type='button second-btn-outline mr-2' text='More'/>
                        </Col>
                        <i className='bi bi-pencil p-2' onClick={handleShowModal}></i>
                    </Row>
                </div>
                <Modal show={contactModal} onHide={closeContactModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.name} {data.surname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className='my-2'>
                            <Col xs='1'>
                                <BsLinkedin size='25px'/>
                            </Col>
                            <Col xs='11'>
                                <h5>Your Profile</h5>
                                <Link to='/profile'>localhost:3000/profile</Link>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col xs='1'>
                                <BsLinkedin size='25px'/>
                            </Col>
                            <Col xs='11'>
                                <h5>Email</h5>
                                <Link to='/profile'>{data.email}</Link>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>

                <Modal show={imageModal} onHide={closeImageModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Profile Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex justify-content-center'>
                        <img src={data.image} className='modalImage' alt="" />
                    </Modal.Body>
                </Modal>

        </div>
        }

        </>
    )
}

export default ProfileJumbo