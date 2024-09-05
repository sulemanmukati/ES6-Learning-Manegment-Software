import { useEffect, useState } from "react";
import Sidebar from "../../Layout/Sidebar"
import FloatingInput from "../../Components/FloatingInput";

import MyButton from "../../Components/MyButton";
import MyTextarea from "../../Components/MyTextarea";
import { getData, setData } from "../../Config/FirebaseMethods";
import MySelect from "../../Components/MySelect";
import MyLoader from "../../Components/MyLoader";
import { toastGreen, toastRed } from "../../Components/My Toasts";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';;
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

function AddSyllabus() {
    const [subjectName,SetSubjectName] =useState()
    const [classes,SetClasses] =useState()
  const [image, setImage] = useState();

  
    const subjectobj ={
   subjectName:subjectName,
    image:image,
   classes:classes
      }
    
    
    const handleForm=async (e)=>{
      e.preventDefault()
      console.log(subjectName,classes,image)
      try {
        const docRef = await addDoc(collection(db, "subject"),subjectobj);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  SetSubjectName('')
  SetClasses('')
  setImage('')
    }

    
    const handleImage = (e) => {
        const file = e.target.files[0];
    
        const urlImg = URL.createObjectURL(file);
    
        console.log(urlImg);
    
        setImage(urlImg);
      };



    const content = () => {
        return (
            <>
                      <form onSubmit={handleForm} >
      <Paper elevation={24} sx={{margin:20,padding:5}}>
          <Typography variant='h4'sx={{marginBottom:5,textAlign:'center'}}>
          Subject Add
          </Typography>
          <TextField value={subjectName} onChange={(e)=>SetSubjectName(e.target.value)} sx={{mb:3}} fullWidth label="Subject Name" type="text"/>

          <TextField value={classes} onChange={(e)=>SetClasses(e.target.value)} sx={{mb:3}} fullWidth label="Class" defaultValue={0} type="number"/>
    
          <TextField
                  required
                  onChange={handleImage}
                  fullWidth
                  name="image"
                  type="file"
                  
                />
      

    
         
<br /><br />
<MyButton width={'100%'} btnValue={'submit'}  />

      </Paper>
  </form>
            </>
        )
    }
    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Syllabus" pageName="Add Syllabus" breadcrumbNestedLink="Add Syllabus" />
        </>
    )
}

export default AddSyllabus
