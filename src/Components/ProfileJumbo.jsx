import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ProfileJumbo = ({ data }) => {

    return (
        <>
        {
            data && 
            <div className='profile-jumbo'>
                <img src={data.image} alt="" className='profile-image ml-4 mt-5'/>
                <div className='myDetails'>
                    <Row className='px-4 mt-2 pt-3'>
                        <Col xs='12' md='6'>
                            <h3 className='mb-1'>{data.name} {data.surname}</h3>
                            <p className='mb-1'>{data.bio}</p>
                            <p className='text-muted'>{data.area}</p>
                        </Col>
                        <Col xs='12' md='6' className='d-flex justify-content-end'>
                            <i className='bi bi-pencil'></i>
                        </Col>
                    </Row>
                </div>
        </div>
        }
        </>
    )
}

export default ProfileJumbo