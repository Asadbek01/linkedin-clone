import SidebarProfiles from "./SidebarProfiles";

const OtherProfiles = ({ title, profiles }) => {

    const randomNum = Math.floor(Math.random() * (profiles.length -5))

    return (
        <div className='sidebar-wrapper'>
            <h5 className='my-3 mb-4'>{title}</h5>

            { profiles && 
            profiles.slice(randomNum, randomNum + 5).map(({ _id, image, name, surname, title}) => (
            <SidebarProfiles key={_id}  _id={_id} image={image} name={name} surname={surname} title={title}/>
            ))}
        </div>
    )
}

export default OtherProfiles