
import Sidebar from "../../Layout/Sidebar"

import MyButton from "../../Components/MyButton"
import { Paper, TextField, Typography } from "@mui/material"

function GenerateFee() {
   

    const content = () => {
        return (
            <>
      <Paper elevation={24} sx={{margin:20,padding:5}}>
          <Typography variant='h4'sx={{marginBottom:5,textAlign:'center'}}>
              Fess Payment
          </Typography>
          <TextField  sx={{mb:3}} fullWidth label="Name" type="text"/>
          <TextField  sx={{mb:3}} fullWidth label="Father Name" type="text"/>
          <TextField  sx={{mb:3}} fullWidth label="class" type="number"/> 
          <TextField  sx={{mb:3}} fullWidth label="Amount" type=""/> 
  
          <TextField  sx={{mb:3}} fullWidth label="payment Method" type=""/> 



<MyButton width={'100%'} btnValue={'submit'}  />
</Paper>
            </>
        )
    }

    return (
        <>
            <Sidebar element={content()} breadcrumbLink="Fees" pageName="Generate Monthly Fee" breadcrumbNestedLink="Fee Submission" />
        </>
    )
}

export default GenerateFee
