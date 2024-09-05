import { useEffect, useState } from "react";

import Sidebar from "../../Layout/Sidebar";

import MyButton from "../../Components/MyButton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import { Paper, TextField, Typography } from "@mui/material";
import ControlledRadioButtonsGroup from "../../Components/ControlledRatioButtonsGroup";
import { useNavigate } from "react-router-dom";
import Tables from "../../Components/Tables";

function AllTeachers() {
  const [userData, setUserData] = useState([]);
  const navigate =useNavigate()
  // const [allStudentsData, setAllStudentData] = useState(false)
  // const [studentsName, setStudentsName] = useState([])
  // const [specificStudent, setSpecificStudent] = useState([])
  // const [selectedName, setSelectedName] = useState([])
  // const [newClass, setNewClass] = useState("")
  // const [loader, setLoader] = useState(false)
  // const [actionLoader, setActionLoader] = useState(false);

  // const fetchData = () => {
  //     setLoader(true)
  //     getData("Students").then((res) => {
  //         setAllStudentData(res)
  //         setLoader(false)
  //     }).catch((err) => {
  //         setLoader(false)
  //         console.log(err)
  //     })
  // }


  // useEffect(() => {
  //     fetchData()
  // }, [])

  // useEffect(() => {
  //     if (allStudentsData) {
  //         setSpecificStudent(allStudentsData.filter((item) => selectedName == item.StudentFirstName))
  //     }
  // }, [selectedName])

  // useEffect(() => {
  //     if (allStudentsData) {
  //         if (studentsName.length !== allStudentsData.length) {
  //             setStudentsName([...allStudentsData.map((item) => item.StudentFirstName)]);
  //         }
  //     }
  // }, [allStudentsData])

  // const handleEdit = (e) => {
  //     e.preventDefault();
  //     setActionLoader(true);
  //     const finalObj = { ...specificStudent[0], StudentClass: newClass }
  //     console.log(finalObj);
  //     setData("Students", finalObj).then(() => {
  //         handleReset()
  //         fetchData()
  //         setActionLoader(false);
  //         toastGreen("Record successfully updated!")
  //     }).catch((err) => {
  //         console.log(err)
  //         setActionLoader(false);
  //         toastRed("Failed to update data. Please try again.")
  //     })
  // };

  // const handleReset = () => {
  //     setSpecificStudent([""]);
  //     setSelectedName([])
  //     setNewClass("")
  // }
  
  useEffect(() => {
      getData();
    }, );
    
    //   Data get from firebase Firestore Database
    
    const getData = async () => {
      try {
        const arr = [];
        const getData = await getDocs(collection(db, "teacher"));
    
        getData.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
        });
    
        setUserData(arr);
      } catch (error) {
        console.log(error);
      }
    };



  const content = () => {
      return (
          <> 
               <div className="container">
      <div className="row">
        <div className=" col-sm-12">
          <div style={{width:'100%'}} className="card">
            <div className="card-header">
              <h3 className="card-title" style={{textAlign:'center'}}>All Teachers</h3>

              <MyButton onClick={()=>navigate('/dashboard/teachers/TeachersRegistretion')} margin={20} float={"right"} btnValue={'ADD'}/>
              <Tables data={userData}/>

            
            </div>
          </div>
        </div>
      </div>
    </div>
             
          </>
      )
  }

  return (
    <>
      <Sidebar
        element={content()}
        breadcrumbLink="Teachers"
        pageName="Teachers list"
        breadcrumbNestedLink="Teachers list"
      />

      {/* <MyModal
        title="Edit Teachers Details"
        height="65vh"
        onClose={handleCloseModal}
        isOpen={editIsOpen}
        body={
          <>
            <form onSubmit={(e) => handleEdit(e)}>
              <div className="mt-4 mb-0">
                <h3 className="fs-5 mb-0">Personal Information</h3>{" "}
                <hr className="mt-2" />
              </div>
              <Row className="row-gap-2">
                <Col md={12} lg={6}>
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers First Name"
                      required={true}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherFirstName: e.target.value,
                        })
                      }
                      placeholder="Edit Teachers First Name"
                      myValue={getValue("TeacherFirstName")}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers Last Name*"
                      required={true}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherLastName: e.target.value,
                        })
                      }
                      placeholder="Edit Teachers Last Name"
                      myValue={getValue("TeacherLastName")}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <MySelect
                      label="Select Gender*"
                      required={true}
                      defaultValue="Please Select Gender"
                      value={getValue("TeacherGender")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherGender: e.target.value,
                        })
                      }
                      options={["Male", "Female"]}
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Date Of Birth*"
                      required={true}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherDOB: e.target.value,
                        })
                      }
                      myValue={getValue("TeacherDOB")}
                      placeholder="Edit Teachers Date of birth"
                      type="date"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers Fathers Name*"
                      required={true}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherFatherName: e.target.value,
                        })
                      }
                      placeholder="Edit Teachers Fathers Name"
                      myValue={getValue("TeacherFatherName")}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <MySelect
                      label="Select Religion*"
                      required={true}
                      defaultValue="Please Select Religion"
                      value={getValue("TeacherReligion")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherReligion: e.target.value,
                        })
                      }
                      options={["Islam", "Hindu", "Christian", "Others"]}
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers Address*"
                      required={true}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherAddress: e.target.value,
                        })
                      }
                      placeholder="Edit Teachers Address"
                      myValue={getValue("TeacherAddress")}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Enter Teachers CNIC*"
                      placeholder="Enter Teachers CNIC"
                      required={true}
                      myValue={getValue("TeacherCNIC")}
                      type="text"
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherCNIC: e.target.value,
                        })
                      }
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers Email*"
                      required={true}
                      myValue={getValue("TeacherEmail")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherEmail: e.target.value,
                        })
                      }
                      placeholder="Enter Teachers Email Address"
                      type="email"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Teachers Phone*"
                      required={true}
                      myValue={getValue("TeacherPhone")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherPhone: e.target.value,
                        })
                      }
                      placeholder="Enter Teachers Phone Number"
                      type="text"
                    />
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <h3 className="fs-5 mb-0">Academic Information</h3>{" "}
                <hr className="mt-2" />
              </div>
              <Row className="row-gap-2">
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="ID (Auto Generated)"
                      disabled
                      placeholder=""
                      required={true}
                      myValue={loader ? "Loading..." : teacherObj.TeacherId}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <MySelect
                      label="Select Subject*"
                      required={true}
                      defaultValue="Please Select Subject"
                      value={getValue("TeacherSubject")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherSubject: e.target.value,
                        })
                      }
                      options={allSubjectsData}
                    />
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <h3 className="fs-5 mb-0">Additional Information</h3>{" "}
                <hr className="mt-2" />
              </div>
              <Row className="row-gap-2">
                <Col lg={12} xl={6} className="mb-3">
                  <div>
                    <MyTextarea
                      required={false}
                      value={getValue("TeacherShortBio")}
                      onChange={(e) =>
                        setEditedTeacherObj({
                          ...editedTeacherObj,
                          TeacherShortBio: e.target.value,
                        })
                      }
                      label="Teachers Short Bio"
                    />
                  </div>
                </Col>
                <Col lg={12} xl={6}>
                  <div>
                    <label htmlFor='imageInput'>Upload Student Photo (150px X 150px)</label> <br />
                    <input
                      type="file"
                      onChange={(e) => setEditedTeacherObj({ ...editedTeacherObj, TeacherImage: e.target.value })}
                      id='imageInput'
                      accept='image/*'
                    />
                  </div>
                  {editedTeacherObj.TeacherImage ? (
                    <div>
                      <p>Selected file: {editedTeacherObj.TeacherImage}</p>
                    </div>
                  ) : (
                    teacherObj.TeacherImage && (
                      <div>
                        <p>Current file: {teacherObj.TeacherImage}</p>
                      </div>
                    )
                  )}
                </Col>
              </Row>
              <hr className="mt-4 mb-2" />
              <div className="text-end" >
                <MyButton bgColor="var(--darkBlue)" hoverBgColor="var(--orange)" className="me-2" btnValue={(<div className="d-flex align-items-center gap-2">Save <lord-icon src="https://cdn.lordicon.com/dangivhk.json" trigger="hover" style={{ width: "37px", height: "37px" }} /></div>)} type="submit" />
              </div>
            </form>
          </>
        }
        footer={
          <div>
            <MyButton
              bgColor="var(--darkBlue)"
              hoverBgColor="var(--orange)"
              className="me-2"
              btnValue="Close"
              onClick={handleCloseModal}
            />
          </div>
        }
      />

      <ConfirmModal
        title={`Are you sure you want to delete ${teacherObj.TeacherFirstName} ${teacherObj.TeacherLastName}`}
        icon={
          <lord-icon
            src="https://cdn.lordicon.com/jxzkkoed.json"
            trigger="hover"
            style={{ width: "120px", height: "120px" }}
          />
        }
        onClose={handleCloseModal}
        isOpen={delIsOpen}
        body={
          <>
            <MyButton
              bgColor="var(--red)"
              hoverBgColor="rgb(139, 0, 0)"
              className="me-4"
              btnValue="Yes, Delete"
              onClick={()=>{handleCloseModal(); handleDelete()}}
            />
            <MyButton
              bgColor="var(--green)"
              hoverBgColor="#00943e"
              btnValue="No, Cancel"
              onClick={handleCloseModal}
            />
          </>
        }
      /> */}
    </>
  );
}

export default AllTeachers;
