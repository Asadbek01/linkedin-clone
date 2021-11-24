import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SkeletonPost = () => {
    return (
        <div className="profile-sub-section p-2 my-2">
        <Row className='pl-3 mb-2 align-items-center'>
        <div className="skeleton-profile-pic"></div>
        <div className="d-flex flex-column w-75 ml-2">
            <div className="skeleton-name w-50"></div>
            <div className="skeleton-bio w-25"></div>
        </div>
        </Row>
        <div className="skeleton-text w-75"></div>
        <div className="skeleton-text w-75"></div>
        <div className="skeleton-text w-50"></div>
        <hr className='my-1' />
        <Row className='text-muted post-actions justify-content-center'>
            <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                <div className="skeleton-action w-100"></div>
            </Col>
            <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                <div className="skeleton-action w-100"></div>
            </Col>
            <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                <div className="skeleton-action w-100"></div>
            </Col>
            <Col xs='2' className='d-flex align-items-center justify-content-center p-2 mx-3 rounded'>
                <div className="skeleton-action w-100"></div>
            </Col>
        </Row>
    </div>
    )
}

export default SkeletonPost