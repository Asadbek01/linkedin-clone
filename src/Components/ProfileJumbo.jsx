import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useLocation } from "react-router-dom"
import MyButton from './MyButton'

const ProfileJumbo = ({ data, handleShowModal }) => {

    const location = useLocation()
    const path = location.pathname
    console.log(path)

    return (
        <>
        {
            data && 
            <div className='profile-jumbo'>
                <div className="d-flex justify-content-between">
                    <img src={data.image} alt="" className='profile-image ml-4 mt-5'/>
                    <i className='bi bi-camera-fill bg-white mr-3 mt-4 pl-1'></i>
                </div>
                <div className='myDetails'>
                    <Row className='px-4 mt-2 pt-5 details-row'>
                        <Col xs='12' md='8' className='pb-3'>
                            <h3 className='mb-1'>{data.name} {data.surname}</h3>
                            <p className='mb-1'>{data.bio}</p>
                            <p className='text-muted mb-1'>{data.area} &#8226; <span className='text-link'>Contact Info</span> </p>
                            <p className='text-link mb-2'>500+ connections</p>
                            <MyButton type='button main-btn mr-2' text='Open to'/>
                            <MyButton type='button second-btn-outline mr-2' text='Add Section'/>
                            <MyButton type='button second-btn-outline mr-2' text='More'/>
                        </Col>
                        <Col xs='12' md='4' className='d-flex justify-content-end'>
                            <h6 className='pr-5 mr-5 d-none d-md-flex'>Google</h6>
                            { path === '/profile' && <i className='bi bi-pencil p-2' onClick={handleShowModal}></i> }
                        </Col>
                    </Row>
                </div>
        </div>
        }
        </>
    )
}

export default ProfileJumbo