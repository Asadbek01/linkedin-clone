import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";


const Sidebar = () => {
const [singleProfile, setSingleProfile]=useState([])


    const {REACT_APP_TOKEN}=process.env
    const fetchingData=async()=>{
try{  
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: {
            header:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2Mzc1NzAwMzIsImV4cCI6MTYzODc3OTYzMn0.9MfD5cIuykfDcocO2fL36DzwwP2pRZQdayLmSTUTG5M",
          },
        }),
      }
    );
          
    if(res.ok){
        let data = await res.json()
console.log(data)
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
                singleProfile.map(e=> (
                <Card key={e._id}>
            <Card.Img variant="top" src={e.image} />
                <Card.Body>
                    <Card.Title>{e.name}{e.surname}</Card.Title>
                    <Card.Text>
                    {e.title}
                    </Card.Text>
            <Button variant="primary">Connect</Button>
                </Card.Body>
            </Card>     
         ) )
         
         }
                 
    
        </>
    )

}

export default Sidebar