import { Col, Row } from "react-bootstrap";
import MyButton from "../../Components/MyButton";
import MyLoader from "../../Components/MyLoader";
import MySelect from "../../Components/MySelect";
import Sidebar from "../../Layout/Sidebar";
import FloatingInput from "../../Components/FloatingInput";
import { toastGreen, toastRed } from "../../Components/My Toasts";
import { getData, setData } from "../../Config/FirebaseMethods";
import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

function AddExam() {
    const classes = Array.from({ length: 10 }, (_, i) => `Class ${i + 1} Results`);
    // const [examData, setExamData] = useState({
    //     examName: '',
    //     examClass: '',
    //     examSubject: '',
    //     examDate: '',
    //     examDuration: '',
    //     totalMarks: '',
    //     passingMarks: '',
    //     examStatus: '',
    // });
    // const [classesName, setClassesName] = useState([]);
    // const [subjectsName, setSubjectsName] = useState([]);
    // const [loader, setLoader] = useState(false);

    // const fetchData = () => {
    //     setLoader(true);
    //     getData("Classes").then((res) => {
    //         setClassesName(res.map((item) => item.ClassName));
    //     }).catch((err) => {
    //         console.log(err);
    //     });

    //     getData("Subjects").then((res) => {
    //         setSubjectsName(res.map((item) => item.SubjectName));
    //     }).catch((err) => {
    //         console.log(err);
    //     }).finally(() => {
    //         setLoader(false);
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const handleReset = () => {
    //     setExamData({
    //         examName: '',
    //         examClass: '',
    //         examSubject: '',
    //         examDate: '',
    //         examDuration: '',
    //         totalMarks: '',
    //         passingMarks: '',
    //         examStatus: '',
    //     });
    // }


    // const handleSave = (e) => {
    //     e.preventDefault();
    //     setLoader(true);
    //     console.log(examData)
    //     setData("Exams", examData).then(() => {
    //         handleReset()
    //         toastGreen("Exam has been successfully added!");
    //     }).catch((err) => {
    //         console.log(err);
    //         toastRed("Failed to add exam. Please try again.");
    //     }).finally(() => {
    //         setLoader(false);
    //     });
    // };
    const content = () => {
        return (
            <Box
            sx={{
              padding: 2,
              width: { xs: '100%', sm: '90%', md: '80%' },
              margin: '0 auto',
            }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              Exam Results
            </Typography>
      
            <Grid container spacing={3}>
              {classes.map((classTitle, index) => (
                <Grid item xs={12} key={index}>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    {classTitle}
                  </Typography>
                  <Paper elevation={5}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-around',
                        p: 2,
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Student Name
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Roll Number
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Grade
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
            );
        }
        return (
            <>
            <Sidebar element={content()} breadcrumbLink="Exams" pageName="Exam Result" breadcrumbNestedLink="Exam Result" />
        </>
    )
}

export default AddExam

     