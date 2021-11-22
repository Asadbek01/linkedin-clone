import ListGroup from 'react-bootstrap/ListGroup'
import DashboardItem from './DashboardItem'
import DashboardRowItem from './DashboardRowItem'

const Dashboard = () => {

    return (
        <div className="dashboard p-4">
            <h5 className='dashboard-heading'>Your Dashboard</h5>
            <p className='text-muted'>Private To You</p>
            <ListGroup horizontal className='w-100 rounded'>
                <DashboardRowItem number='18' text='Who viewed your profile'/>
                <DashboardRowItem number='30' text='Post Views'/>
                <DashboardRowItem number='22' text='Search Appearances'/>
            </ListGroup>

            <ListGroup className='w-100 mt-4 rounded'>
                <DashboardItem title='Creator Mode' subtitle='Grow your audience and get discovered by highlighting content on your profile' icon='bi bi-megaphone-fill mr-3' />
                <DashboardItem title='My Network' subtitle='Manage your connections, events and interests' icon='bi bi-people-fill mr-3' />
                <DashboardItem title='Salary Insights' subtitle='See how your salary compares to others in the community' icon='bi bi-cash mr-3' />
                <DashboardItem title='My Items' subtitle='Keep track of your jobs, courses and articles' icon='bi bi-bookmark-fill mr-3' />
            </ListGroup>

        </div>
    )
}

export default Dashboard