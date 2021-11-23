import { Link } from 'react-router-dom'

const ProfileOptions = () => {
    return (
        <div className='sidebar-wrapper'>
        <Link to="/">
          <div className="py-3 text-dark d-flex justify-content-between">
            <p className='mb-0'>Update your public profile and URL{" "}</p>
            <i className="bi bi-question-circle-fill"></i>
          </div>
        </Link>

        <hr className='my-1'/>

        <Link to="/">
            <div className="py-3 text-dark d-flex justify-content-between">
                <p className='mb-0'>Add your profile in another language{" "}</p>
                <i className="bi bi-question-circle-fill"></i>
            </div>
        </Link>
        
      </div>
    )
}

export default ProfileOptions