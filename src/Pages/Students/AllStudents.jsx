import { Paper, TextField, Typography } from "@mui/material"
import Tables from "../../Components/Tables"
import Sidebar from "../../Layout/Sidebar"
import { Button } from "react-bootstrap"
import MyButton from "../../Components/MyButton"
import ControlledRadioButtonsGroup from "../../Components/ControlledRatioButtonsGroup"
import { useEffect, useState } from "react"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../Config/FirebaseConfig"
import { Abc } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

function AllStudents() {
  const [firstName,SetFirstName]=useState()
  const [lastName,SetLastName]=useState()
  const [Email,SetEmail]=useState()
  const [classes,SetClasses]=useState()
  // const [userData, setUserData] = useState([]);
 

  const studentobj ={
    firstName:firstName,
    lastName:lastName,
    Email:Email,
    classes:classes
  }


const handleForm=async (e)=>{
  e.preventDefault()
  console.log(firstName,lastName,Email,classes)
  try {
    const docRef = await addDoc(collection(db, "students"),studentobj);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  SetFirstName('')
  SetLastName('')
  SetEmail('')
  SetClasses('')
}



const contant =()=>{
  return(
    <>  

       <form onSubmit={handleForm}>
      <Paper elevation={24} sx={{margin:20,padding:5}}>
          <Typography variant='h4'sx={{marginBottom:5,textAlign:'center'}}>
              Registration Form
          </Typography>
          <TextField value={firstName} onChange={(e)=>SetFirstName(e.target.value)} sx={{mb:3}} fullWidth label="First Name" type="text"/>
          <TextField value={lastName} onChange={(e)=>SetLastName(e.target.value)} sx={{mb:3}} fullWidth label="Last Name" type="text"/> 
          <TextField value={Email} onChange={(e)=>SetEmail(e.target.value)} sx={{mb:3}} fullWidth label="Email" type="email"/> 
          <TextField value={classes} onChange={(e)=>SetClasses(e.target.value)} sx={{mb:3}} fullWidth label="Class" defaultValue={0} type="number"/>

        <ControlledRadioButtonsGroup sub={"Gender"} Male={'Male'} Female={'Female'}  />

<MyButton width={'100%'} btnValue={'submit'}  />

      </Paper>
  </form>
      
      </>
    )
  }
  
  
  return (
    <>
      <Sidebar element={contant()}  breadcrumbLink="Students" pageName="Students Registration" breadcrumbNestedLink="Students Registertion" />

      
    </>
  )
}

export default AllStudents
