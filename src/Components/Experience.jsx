import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'

const Experience = ({ heading }) => {

    const [experiences, setExperiences] = useState(null)

    const fetchExperiences = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/619b5603bdf6a10015e98bb8/experiences`, {
                headers: {
                    'Authorization': process.env.REACT_APP_TOKEN
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
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
    }, [])

    return (
        <div className='profile-sub-section mt-4'>
            <Row className='justify-content-between px-3'>
                <h4 className='pt-4 pl-3'>{heading}</h4>
                <i className='bi bi-plus mt-3 mr-4'></i>
            </Row>
            <Row className='p-3'>
                { experiences && 
                    experiences.map(({company, _id, role, area, startDate}) => (
                        <div key={_id} className='pl-3'>
                            <h3>{company}</h3>
                            <h6>{role}</h6>
                            <p className='text-muted'>{startDate}</p>
                            <p className='text-muted'>{area}</p>
                        </div>
                    ))
                }
            </Row>
        </div>
    )
}

export default Experience