import { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap';
import FloatingInput from "../../Components/FloatingInput"
import MyLoader from "../../Components/MyLoader"
import { getData, setData } from "../../Config/FirebaseMethods"
import Sidebar from "../../Layout/Sidebar"
import { toastGreen, toastRed } from "../../Components/My Toasts"
import MySelect from "../../Components/MySelect";
import MyButton from "../../Components/MyButton";
import { Paper, TextField, Typography } from "@mui/material";
import ControlledRadioButtonsGroup from "../../Components/ControlledRatioButtonsGroup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

function AddClass() {
    const [firstName,SetFirstName]=useState()

  const [lastName,SetLastName]=useState()
  const [fatherName,SetFatherName]=useState()
  const [Email,SetEmail]=useState()
  const [classes,SetClasses]=useState()
  // const [userData, setUserData] = useState([]);
 

  const studentobj ={
    firstName:firstName,
    lastName:lastName,
    fatherName:fatherName,
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
  SetFatherName('')
  SetEmail('')
  SetClasses('')
}


const content =()=>{
  return(
    <>  

       <form onSubmit={handleForm}>
      <Paper elevation={24} sx={{margin:20,padding:5}}>
          <Typography variant='h4'sx={{marginBottom:5,textAlign:'center'}}>
              Registration Form
          </Typography>
          <TextField value={firstName} onChange={(e)=>SetFirstName(e.target.value)} sx={{mb:3}} fullWidth label="First Name" type="text"/>
          <TextField value={lastName} onChange={(e)=>SetLastName(e.target.value)} sx={{mb:3}} fullWidth label="Last Name" type="text"/> 
          <TextField value={fatherName} onChange={(e)=>SetFatherName(e.target.value)} sx={{mb:3}} fullWidth label="Father Name" type="text"/> 
          
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
            <Sidebar element={content()} breadcrumbLink="Classes" pageName="Add Class" breadcrumbNestedLink="Add Class" />
        </>
    )
}

export default AddClass
