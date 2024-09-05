import MyLoader from "../../Components/MyLoader";
import Sidebar from "../../Layout/Sidebar"
import Grid from "../../Components/MyGrid"
import { useEffect, useState } from "react";
import { deleteData, getData, setData } from "../../Config/FirebaseMethods";
import { toastGreen, toastRed } from "../../Components/My Toasts";
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import MyButton from "../../Components/MyButton";
import ConfirmModal from "../../Components/ConfirmModal";
import MySelect from "../../Components/MySelect";
import { Col, Row } from "react-bootstrap";
import FloatingInput from "../../Components/FloatingInput";
import MyModal from "../../Components/MyModal";

function AllExamsSchedule() {
  const examData = [
    {
      className: 'Class 1 - Mathematics',
      date: '2024-08-15',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 1 - English',
      date: '2024-08-16',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 2 - Science',
      date: '2024-08-17',
      startTime: '09:30 AM',
      endTime: '12:30 PM',
    },
    {
      className: 'Class 2 - History',
      date: '2024-08-18',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 3 - Geography',
      date: '2024-08-19',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 3 - Physics',
      date: '2024-08-20',
      startTime: '02:00 PM',
      endTime: '05:00 PM',
    },
    {
      className: 'Class 4 - Chemistry',
      date: '2024-08-21',
      startTime: '03:00 PM',
      endTime: '06:00 PM',
    },
    {
      className: 'Class 5 - Mathematics',
      date: '2024-08-22',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 5 - English',
      date: '2024-08-23',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 6 - Science',
      date: '2024-08-24',
      startTime: '09:30 AM',
      endTime: '12:30 PM',
    },
    {
      className: 'Class 6 - History',
      date: '2024-08-25',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 7 - Geography',
      date: '2024-08-26',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 7 - Physics',
      date: '2024-08-27',
      startTime: '02:00 PM',
      endTime: '05:00 PM',
    },
    {
      className: 'Class 8 - Chemistry',
      date: '2024-08-28',
      startTime: '03:00 PM',
      endTime: '06:00 PM',
    },
    {
      className: 'Class 9 - Mathematics',
      date: '2024-08-29',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },
    {
      className: 'Class 9 - English',
      date: '2024-08-30',
      startTime: '10:00 AM',
      endTime: '01:00 PM',
    },
    {
      className: 'Class 10 - Physics',
      date: '2024-08-31',
      startTime: '11:00 AM',
      endTime: '02:00 PM',
    },
    {
      className: 'Class 10 - Chemistry',
      date: '2024-09-01',
      startTime: '01:00 PM',
      endTime: '04:00 PM',
    },
    {
      className: 'Class 10 - Mathematics',
      date: '2024-09-02',
      startTime: '09:00 AM',
      endTime: '12:00 PM',
    },

  ];

 
  const content = () => (
    <>
 
    <Box sx={{ padding: 2, width: { xs: '100%', sm: '90%', md: '80%' }, margin: '0 auto' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Exam Schedule
      </Typography>
      
      {examData.map((exam, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              textAlign: 'center',
              p: 2,
              borderRadius: '8px',
              width: { xs: '100%', sm: '90%', md: '80%' }, // Responsive width
              maxWidth: 800,
            }}
          >
               <Typography sx={{ fontFamily: 'fantasy', ml: 2 }} variant="body1">
                  {exam.className}
                </Typography>
                <Typography sx={{ ml: 2, mt: 1, fontSize: 20, color: 'gray' }} variant="body1">
                  Date: {exam.date}
                </Typography>
                <Typography sx={{ ml: 2, mt: 1, fontSize: 20, color: 'gray' }} variant="body1">
                  Start Time: {exam.startTime} | End Time: {exam.endTime}
                </Typography>
            <MyButton margin={10} btnValue="view Detail"/>
          </Paper>
        </Box>
      ))}
    </Box>
  
    </>
  );

  return (
    <>
      <Sidebar element={content()} breadcrumbLink="Exams" pageName="All Exams Schedule" breadcrumbNestedLink="All Exams" />
      {/* <MyModal title="Edit Exam Details" height="50vh" onClose={handleCloseModal} isOpen={editIsOpen}
        body={(
          <>
            <form onSubmit={handleEdit}>
              <div className='mb-0'>
                <h3 className='fs-5 mb-0'>Exam Information</h3> <hr className='mt-2' />
              </div>
              <Row>
                <Col md={12} lg={6}>
                  <FloatingInput
                    label="Exam Name"
                    required={true}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examName: e.target.value })}
                    placeholder="Edit Exam Name"
                    myValue={getValue("examName")}
                    type="text"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <MySelect
                    label="Class"
                    required={true}
                    defaultValue="Please Select Class"
                    value={getValue("examClass")}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examClass: e.target.value })}
                    options={classesName}
                  />
                </Col>
                <Col md={12} lg={6}>
                  <MySelect
                    label="Subject"
                    required={true}
                    defaultValue="Please Select Subject"
                    value={getValue("examSubject")}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examSubject: e.target.value })}
                    options={subjectsName}
                  />
                </Col>
                <Col md={12} lg={6}>
                  <FloatingInput
                    label="Date"
                    required={true}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examDate: e.target.value })}
                    placeholder="Edit Date"
                    myValue={getValue("examDate")}
                    type="date"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <FloatingInput
                    label="Duration (in minutes)"
                    required={true}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examDuration: e.target.value })}
                    placeholder="Edit Duration"
                    myValue={getValue("examDuration")}
                    type="number"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <FloatingInput
                    label="Total Marks"
                    required={true}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, totalMarks: e.target.value })}
                    placeholder="Edit Total Marks"
                    myValue={getValue("totalMarks")}
                    type="number"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <FloatingInput
                    label="Passing Marks"
                    required={true}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, passingMarks: e.target.value })}
                    placeholder="Edit Passing Marks"
                    myValue={getValue("passingMarks")}
                    type="number"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <MySelect
                    label="Status"
                    required={true}
                    defaultValue="Please Select Status"
                    value={getValue("examStatus")}
                    onChange={(e) => setEditedExamObj({ ...editedExamObj, examStatus: e.target.value })}
                    options={["Scheduled", "Completed", "Canceled"]}
                  />
                </Col>
              </Row>
              <div className="text-end mt-2">
                <MyButton
                  bgColor="var(--darkBlue)"
                  hoverBgColor="var(--orange)"
                  className="me-2"
                  btnValue={(<div className="d-flex align-items-center gap-2">Update <lord-icon src="https://cdn.lordicon.com/dangivhk.json" trigger="hover" style={{ width: "37px", height: "37px" }} /></div>)}
                  type="submit"
                />
              </div>
              {actionLoader && <MyLoader />}
            </form>
          </>
        )}
        footer={(
          <div>
            <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2" btnValue="Close" onClick={handleCloseModal} />
          </div>
        )} />
      <ConfirmModal title={`Are you sure you want to delete ${examObj.examName} for class ${examObj.examClass}`}
        icon={(<lord-icon src="https://cdn.lordicon.com/jxzkkoed.json" trigger="hover" style={{ width: "120px", height: "120px" }} />)}
        onClose={handleCloseModal} isOpen={delIsOpen}
        body={(
          <>
            <MyButton bgColor="var(--red)" hoverBgColor="rgb(139, 0, 0)" className="me-4" btnValue="Yes, Delete" onClick={() => { handleCloseModal(); handleDelete() }} />
            <MyButton bgColor="var(--green)" hoverBgColor="#00943e" btnValue="No, Cancel" onClick={handleCloseModal} />
          </>
        )} /> */}
    </>
  );
}

export default AllExamsSchedule;