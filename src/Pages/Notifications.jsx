import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card,Button } from 'react-bootstrap'
import SecondNotification from '../Components/SecondNotification'
import Image from '../assets/Asadbek.png'
const Notifications = () => {

    const [notification, setNotification] = useState([])
    const fetchingData = async () => {
        try {
          let res = await fetch(
            "https://striveschool-api.herokuapp.com/api/profile/", {
              headers: {
                Authorization: process.env.REACT_APP_TOKEN,
              }
            })
          if (res.ok) {
            let data = await res.json();
            setNotification(data);
            console.log(notification);
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
        <>
            <Container>
                <Row>
                    <Col xs={"6"} md={"3"} >
                    <Card
             style={{ width: '17rem', height: '10rem', }}
                 className="mb-1"
                               >
                        <Card.Body className=''>
                            <Card.Title className='text-center'> Notifications </Card.Title>
                            <Card.Text className='text-secondary text-center'>
                            <p >You have new notifications</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Header className='text-center'>Improve your notifications <br />
                        <Link to='/' className='text-center'>View settings</Link>
                        </Card.Header>
                    </Card>
                </Col>
                <Col>
                <SecondNotification profiles={notification} />      
                </Col>

                <Col xs={"6"} md={'4'}>
                    <Card
             style={{ width: '25rem', height: '16rem', }}
                 className="mb-1"
                               >
                        <Card.Body className=''>
                           <Card.Title className='text-center h6'>EU Funds, free business courses, stories and <br /> curiosities about IP.</Card.Title>
                            <img className='notif_img' src={Image}/>
                            <Card.Title className='text-center second_title '>All about Intellectual Property for SMEs</Card.Title>
                         <Button className='outline-primary' variant="outline-primary">Follow</Button>{' '}
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
          </>
      )
}
export default Notifications