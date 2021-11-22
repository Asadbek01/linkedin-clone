import ListGroup from 'react-bootstrap/ListGroup'
import DashboardItem from './DashboardItem'

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

            <ListGroup className='w-100 mt-4'>
                <DashboardItem title='Creator Mode' subtitle='Grow your audience and get discovered by highlighting content on your profile' icon='bi bi-megaphone-fill mr-3' />
                <DashboardItem title='My Network' subtitle='Manage your connections, events and interests' icon='bi bi-people-fill mr-3' />
                <DashboardItem title='Salary Insights' subtitle='See how your salary compares to others in the community' icon='bi bi-cash mr-3' />
                <DashboardItem title='My Items' subtitle='Keep track of your jobs, courses and articles' icon='bi bi-bookmark-fill mr-3' />
            </ListGroup>

        </div>
    )
}

export default Dashboard