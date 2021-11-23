import { parseISO, format, differenceInCalendarMonths  } from "date-fns"
import { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ExperienceRow = ({company, id, role, area, startDate, endDate, description, setExperienceChanged}) => {

    const [experiences, setExperiences] = useState(null)
    const [editExperience, setEditExperience] = useState(false)
    const [selectedExperience, setSelectedExperience] = useState(null)

    const [newCompany, setNewCompany] = useState('')
    const [newRole, setNewRole] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newStartDate, setNewStartDate] = useState('')
    const [newEndDate, setNewEndDate] = useState('')

    const closeEditExperience = () => setEditExperience(false)
    const showEditExperience = async () => {
        setEditExperience(true)
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences/${selectedExperience}`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {  
                const data = await response.json()
                setNewCompany(data.company)
                setNewRole(data.role)
                setNewDescription(data.description)
                setNewLocation(data.area)
                setNewStartDate(data.startDate)
                setNewEndDate(data.endDate)
            } else {
                console.log('Fetch Failed')
            }
        } catch (error) {
            console.error(error)
        }   
    }

    useEffect(() => {
        setNewCompany(company)
        setNewRole(role)
        setNewDescription(description)
        setNewLocation(area)
        setNewStartDate(startDate)
        setNewEndDate(endDate)
        // eslint-disable-next-line
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        const experience = {
            "role": newRole,
            "company": newCompany,
            "startDate": newStartDate,
            "endDate": newEndDate || null,
            "description": newDescription,
            "area": newLocation
        }

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences/${selectedExperience}`, {
                method: 'PUT',
                body: JSON.stringify(experience),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setExperiences(data)
                setExperienceChanged()
                closeEditExperience()
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleDeleteExperience = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences/${selectedExperience}`, {
                method: 'DELETE', 
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                setExperienceChanged()
                closeEditExperience()
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }
    

    return (
        <>
        <Col xs='11' className='pl-3 mb-2'>
            <h4>{company}</h4>
            <h6>{role}</h6>
            <p className='text-muted mb-1'>{format(parseISO(startDate), 'MMM. yyyy')} - {endDate ? format(parseISO(endDate), 'MMM. yyyy') : 'Present'} &#8226; {endDate ? differenceInCalendarMonths(parseISO(endDate), parseISO(startDate)) : differenceInCalendarMonths(new Date(), parseISO(startDate))} months</p>
            <p className='text-muted mb-1'>{area}</p>
            <hr />
        </Col>
        <Col xs='1'>
            <i className='bi bi-pencil' onClick={() => {
                showEditExperience()
                setSelectedExperience(id)
            }}></i>
        </Col>

        <Modal show={editExperience} onHide={closeEditExperience}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Company" value={newCompany} onChange={e => setNewCompany(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Role" value={newRole} onChange={e => setNewRole(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Location" value={newLocation} onChange={e => setNewLocation(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" value={newStartDate} onChange={e => setNewStartDate(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" value={newEndDate} onChange={e => setNewEndDate(e.target.value)} />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <Button variant="danger" type="button" className='mr-4' onClick={handleDeleteExperience}>Delete</Button>
                        <Button variant="success" type="submit">Save</Button>
                    </div>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ExperienceRow