import ListGroup from 'react-bootstrap/ListGroup'

const Dashboard = () => {
    return (
        <div className="dashboard p-4">
            <h5>Your Dashboard</h5>
            <p className='text-muted'>Private To You</p>
            <ListGroup horizontal className='w-100'>
                <ListGroup.Item>
                    <div className="d-flex flex-column">
                        <p className='dashboard-number mb-1'>18</p>
                        <p className='mb-1'>Who viewed your profile</p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex flex-column">
                        <p className='dashboard-number mb-1'>30</p>
                        <p className='mb-1'>Post Views</p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="d-flex flex-column">
                        <p className='dashboard-number mb-1'>22</p>
                        <p className='mb-1'>Search Appearances</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Dashboard