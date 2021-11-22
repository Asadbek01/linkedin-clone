import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";


const Sidebar = () => {
    let navigate = useNavigate()
    function handleClick() {
    navigate('/profile')
  }
const [singleProfile, setSingleProfile]=useState([])


    const {REACT_APP_TOKEN}=process.env
    const fetchingData=async()=>{
try{  
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
                    Authorization:process.env.REACT_APP_TOKEN
            
        },
      }
    );
          
    if(res.ok){
        let data = await res.json()
        setSingleProfile(data)
console.log(singleProfile)
}else{
    console.log("Something goes wrong while fetching the data")
}

}catch(err){console.log('error connecting to the server')}
    }

useEffect(() => {
    fetchingData()
    
}, [singleProfile])

useEffect(()=>{
    fetchingData()
},[]

) 
    return (
        <>
        <h5>People you could know</h5>
        {
        singleProfile.slice(0,7).map(e=> (
          <Card key={e._id} style={{marginBottom:'5%', border:'none'}}>
            <Card.Img variant="top" src={e.image} style={{borderRadius:'50%', maxWidth:'19%'}}/>
                <Card.Body>
                    <Card.Title>{e.name}{e.surname}</Card.Title>
                    <Card.Text>
                    {e.title}
                    </Card.Text>
            <Button variant="primary" onClick={handleClick+e._id}>Connect</Button>
                </Card.Body>
          </Card>     
         ) )
         
         }   
        </>
    )}

export default Sidebar