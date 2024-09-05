import {  FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import Sidebar from "../../Layout/Sidebar"
// import ControlledRadioButtonsGroup from "../../Components/ControlledRatioButtonsGroup"
import MyButton from "../../Components/MyButton"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../Config/FirebaseConfig"
import ControlledRadioButtonsGroup from "../../Components/ControlledRatioButtonsGroup"
// import { FormControl } from "react-bootstrap"


function AddSubject() {
    const [subjectName,SetSubjectName] =useState()
    const [classes,SetClasses] =useState()
  const [value, setValue] = useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    
  
    };
  
    const subjectobj ={
   subjectName:subjectName,
   value:value,
   classes:classes
      }
    
    
    const handleForm=async (e)=>{
      e.preventDefault()
      console.log(subjectName,classes,value)
      try {
        const docRef = await addDoc(collection(db, "subject"),subjectobj);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  SetSubjectName('')
  SetClasses('')
    }





    const content = () => {
        return (
            <>
                      <form onSubmit={handleForm} >
      <Paper elevation={24} sx={{margin:20,padding:5}}>
          <Typography variant='h4'sx={{marginBottom:5,textAlign:'center'}}>
          Subject Add
          </Typography>
          <TextField  value={subjectName} onChange={(e)=>SetSubjectName(e.target.value)} sx={{mb:3}} fullWidth label="Subject Name" type="text"/>
          {/* <TextField  sx={{mb:3}} fullWidth label="Last Name" type="text"/> 
          <TextField  sx={{mb:3}} fullWidth label="Email" type="email"/>  */}
          <TextField value={classes} onChange={(e)=>SetClasses(e.target.value)} sx={{mb:3}} fullWidth label="Class" defaultValue={0} type="number"/>
        {/* <ControlledRadioButtonsGroup sub={"Group"}  Male={'GeneralSciece'} Female={'Pre-Engineering'} /> */}
        <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" >Group</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Pre-Engineering" control={<Radio />} label='Pre-Engineering' />
        <FormControlLabel value='GeneralSciece' control={<Radio />} label="GeneralSciece" />
      </RadioGroup>
    </FormControl>
<MyButton width={'100%'} btnValue={'submit'}  />

      </Paper>
  </form>
            </>
        )
    }
    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Subjects" pageName="Add Subjects" breadcrumbNestedLink="Add Subjects" />
        </>
    )
}

export default AddSubject
