import { Col, Row } from "react-bootstrap"
import Sidebar from "../../Layout/Sidebar"
import MySelect from "../../Components/MySelect"
import { useEffect, useState } from "react"
import { getData, setData } from "../../Config/FirebaseMethods"
import FloatingInput from "../../Components/FloatingInput"
import MyButton from "../../Components/MyButton"
import MyLoader from "../../Components/MyLoader"
import { toastGreen, toastRed } from "../../Components/My Toasts"
import { Paper, TextField, Typography } from "@mui/material"

function GenerateFee() {
    // const [classesName, setClassesName] = useState([])
    // const [allClassesData, setAllClassesData] = useState(false)
    // const [classStudents, setClassStudents] = useState(false)
    // const [loader, setLoader] = useState(false)
    // const [feesOptions, setFeesOptions] = useState(false)

    // const fetchClassesData = () => {
    //     getData("Classes").then((res) => {
    //         setAllClassesData(res);
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    // useEffect(() => {
    //     fetchClassesData();
    //     setFeesOptions({ ...feesOptions, Year: new Date().getFullYear() })
    // }, [])

    // useEffect(() => {
    //     if (allClassesData) {
    //         if (classesName.length !== allClassesData.length) {
    //             setClassesName([...allClassesData.map((item) => item.ClassName)]);
    //         }
    //     }
    // }, [allClassesData])

    // const handleReset = () => {
    //     setFeesOptions({
    //         Year: new Date().getFullYear(),
    //         Month: "",
    //         Class: "",
    //     })
    // }

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     getData("Students")
    //         .then((res) => {
    //             setClassStudents(res.filter((item) => item.StudentClass === feesOptions.Class));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    
    // const editFeesInDatabase = () => {
    //     setLoader(true);
    //     if (classStudents.length > 0) {
    //         const promises = classStudents.map((item) => {
    //             let updatedFeeDetails = { ...item.FeeDetails };
    //             if (
    //                 updatedFeeDetails[feesOptions.Year] &&
    //                 updatedFeeDetails[feesOptions.Year][feesOptions.Month]
    //             ) {
    //                 return Promise.resolve();
    //             }
    
    //             if (!updatedFeeDetails[feesOptions.Year]) {
    //                 updatedFeeDetails[feesOptions.Year] = {};
    //             }
    //             updatedFeeDetails[feesOptions.Year][feesOptions.Month] = "Unpaid";
    
    //             let finalObj = { ...item, FeeDetails: updatedFeeDetails };
    //             console.log(finalObj, "FINAL OBJECT");
    //             return setData("Students", finalObj);
    //         });
    
    //         Promise.all(promises)
    //             .then(() => {
    //                 setLoader(false);
    //                 handleReset();
    //                 toastGreen("Fee has been successfully generated!");
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 setLoader(false);
    //                 toastRed("Failed to generate Fee. Please try again.");
    //             });
    //     } else {
    //         setLoader(false);
    //         console.log("NOT WORKING GOIG IN ELSE");
    //     }
    // };
    
    // useEffect(() => {
    //     if (classStudents.length > 0) {
    //         editFeesInDatabase();
    //     }
    // }, [classStudents]);




    // const months = [
    //     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    // ];

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



          {/* <TextField value={classes} onChange={(e)=>SetClasses(e.target.value)} sx={{mb:3}} fullWidth label="Class" defaultValue={0} type="number"/> */}

        {/* <ControlledRadioButtonsGroup sub={"Gender"} Male={'Male'} Female={'Female'}  /> */}

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
