import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SidebarProfiles from './SidebarProfiles'

const ProfileSubSection = ({ heading }) => {

    const [profiles, setProfiles] = useState([])

    const randomNum = Math.floor(Math.random() * (profiles.length - 4))
    
    const fetchingData = async () => {
      try {
        let res = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/", {
            headers: {
              Authorization: process.env.REACT_APP_TOKEN,
            }
          })
        if (res.ok) {
          let data = await res.json()
          setProfiles(data)
        } else {
          console.log("Something goes wrong while fetching the data")
        }
      } catch (err) {
        console.log("error connecting to the server")
      }
    }
  
    useEffect(() => {
      fetchingData()
      // eslint-disable-next-line
    }, [])


    return (
        <div className='profile-sub-section mt-4'>
            <h4 className='pt-4 pl-3'>{heading}</h4>
            <Row className='p-3'>
                { profiles && 
                    profiles.slice(randomNum, randomNum + 4).map(({ _id, image, name, surname, title}) => (
                      <Col xs='12' md='6' key={_id}>
                          <SidebarProfiles _id={_id} image={image} name={name} surname={surname} title={title}/>
                      </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProfileSubSection