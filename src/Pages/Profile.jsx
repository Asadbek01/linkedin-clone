import { useEffect, useState } from "react"
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap"
import ProfileJumbo from "../Components/ProfileJumbo"
import Sidebar from "../Components/Sidebar"
import Dashboard from "../Components/Dashboard"


const Profile = () => {

    const [data, setData] = useState(null)
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [bio, setBio] = useState(null)
    const [area, setArea] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)
  
    const fetchMyDetails = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setName(data.name)
                setSurname(data.surname)
                setBio(data.bio)
                setArea(data.area)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        fetchMyDetails()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        handleCloseModal()
    }
    
    return (
        <Container>
            <Row>
                <Col xs='12' md='9'>
                    <ProfileJumbo data={data} handleShowModal={handleShowModal}/>
                    <Dashboard />
                </Col>
                <Col xs='12' md='3'>
                    <Sidebar />
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={surname} onChange={e => setSurname(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control type="text" placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Location" value={area} onChange={e => setArea(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Save</Button>
                </Form>
                </Modal.Body>
            </Modal>

        </Container>
    )
}

export default Profile