
import { Paper, TextField, Typography } from '@mui/material';
import Sidebar from '../../Layout/Sidebar'

import {  useState } from 'react';
import ControlledRadioButtonsGroup from '../../Components/ControlledRatioButtonsGroup';
import MyButton from '../../Components/MyButton';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Config/FirebaseConfig';

function AddTeachers() {


    const [firstName,SetFirstName]=useState()
    const [lastName,SetLastName]=useState()
    const [Email,SetEmail]=useState()
    const [classes,SetClasses]=useState()
 
   
  
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
      const docRef = await addDoc(collection(db, "teacher"),studentobj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    SetFirstName('')
    SetLastName('')
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
            <TextField value={Email} onChange={(e)=>SetEmail(e.target.value)} sx={{mb:3}} fullWidth label="Email" type="email"/> 
            <TextField value={classes} onChange={(e)=>SetClasses(e.target.value)} sx={{mb:3}} fullWidth label="Class" defaultValue={0} type="number"/>
  
          <ControlledRadioButtonsGroup sub={"Gender"} Male={'Male'} Female={'Female'}   />
  
  <MyButton width={'100%'} btnValue={'submit'}  />
  
        </Paper>
    </form>
        
        </>
      )
    }
    

    return (
        <Sidebar
            element={content()}
            breadcrumbLink="Teachers"
            pageName="Teachers Registration"
            breadcrumbNestedLink="Teachers Registration"
        />
    );
}

export default AddTeachers;
