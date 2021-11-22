import ListGroup from "react-bootstrap/ListGroup"

const DashboardRowItem = ({ number, text }) => {
    return (
        <ListGroup.Item>
            <div className="d-flex flex-column">
                <p className='dashboard-number mb-1'>{number}</p>
                <p className='mb-1'>{text}</p>
            </div>
        </ListGroup.Item>
    )
}

export default DashboardRowItem