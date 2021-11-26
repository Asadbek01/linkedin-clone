import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ExperienceRow from './ExperienceRow'

const Experience = ({ heading }) => {

    const [experiences, setExperiences] = useState(null)
    const [experienceChanged, setExperienceChanged] = useState(0)
    const [addExperience, setAddExperience] = useState(false)

    const closeAddExperience = () => setAddExperience(false)
    const showAddExperience = () => setAddExperience(true)

    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        const experience = {
            "role": role,
            "company": company,
            "startDate": startDate,
            "endDate": endDate || null,
            "description": description,
            "area": location
        }

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences`, {
                method: 'POST',
                body: JSON.stringify(experience),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setExperiences(data)
                setExperienceChanged(count => count + 1)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchExperiences = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                setExperiences(data)
            } else {
                console.error('fetch failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchExperiences()
        // eslint-disable-next-line
    }, [experienceChanged])

    return (
        <div className='profile-sub-section mt-4 single-list-item'>
            <Row className='justify-content-between px-3'>
                <h4 className='pt-4 pl-3'>{heading}</h4>
                <i 
                    className='bi bi-plus mt-3 mr-4'
                    onClick={showAddExperience}
                ></i>
            </Row>
            
            <Row className='p-3'>
                { experiences && 
                    experiences.map(({company, _id: id, role, area, startDate, endDate}) => (
                        <ExperienceRow key={id} company={company} id={id} role={role} area={area} description={description} startDate={startDate} endDate={endDate} experienceChanged={experienceChanged} setExperienceChanged={() => setExperienceChanged(count => count + 1)}/>
                    ))
                }
            </Row>

            <Modal show={addExperience} onHide={closeAddExperience}>
            <Modal.Header closeButton>
                <Modal.Title>Add Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </Form.Group>

                    <Button variant="success" type="submit">Add</Button>
                </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Experience