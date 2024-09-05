import { Tooltip } from "@mui/material";
import Sidebar from "../../Layout/Sidebar"
import { Col, Row } from "react-bootstrap";
import FloatingInput from "../../Components/FloatingInput";
import MyLoader from "../../Components/MyLoader";
import MyButton from "../../Components/MyButton";
import Grid from "../../Components/MyGrid";
import { useEffect, useState } from "react";
import { deleteData, getData, setData } from "../../Config/FirebaseMethods";
import { toastGreen, toastRed } from "../../Components/My Toasts";
import MyModal from "../../Components/MyModal";
import MySelect from "../../Components/MySelect";
import MyTextarea from "../../Components/MyTextarea";
import ConfirmModal from "../../Components/ConfirmModal";
import { useNavigate } from "react-router-dom";
import Tables from "../../Components/Tables";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import MyTables from "../../Components/MyTables";

function AllSubjects() {
  const [userData, setUserData] = useState([]);
  const navigate =useNavigate()
  useEffect(() => {
    getData();
  }, );
  
  //   Data get from firebase Firestore Database
  
  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(db, "subject"));
  
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
            <h3 className="card-title" style={{textAlign:'center'}}>All Students</h3>

            <MyButton onClick={()=>navigate('/dashboard/subjects/addSubjects')} margin={20} float={"right"} btnValue={'ADD'}/>
            <MyTables data={userData} classes={'Class'} group={"Group"} subject={'Subject'}/>

          
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
      <Sidebar element={content()} breadcrumbLink="Subjects" pageName="Subjects List" breadcrumbNestedLink="Subjects list" />
{/* 
      <MyModal
        title="Edit Subjects Details"
        height="50vh"
        onClose={handleCloseModal}
        isOpen={editIsOpen}
        body={
          <>
            <form onSubmit={(e) => handleEdit(e)}>
              <Row className="row-gap-2">
                <Col md={12} lg={6}>
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Subjects Name"
                      required={true}
                      onChange={(e) =>
                        seteditedSubjectObj({
                          ...editedSubjectObj,
                          SubjectName: e.target.value,
                        })
                      }
                      placeholder="Edit Subjects Name"
                      myValue={getValue("SubjectName")}
                      type="text"
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <MySelect
                      label="Select Assigned Teacher"
                      required={true}
                      defaultValue="Select Assigned Teacher"
                      value={getValue("SubjectTeacher")}
                      onChange={(e) =>
                        seteditedSubjectObj({
                          ...editedSubjectObj,
                          SubjectTeacher: e.target.value,
                        })
                      }
                      options={teachersName}
                    />
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-3">
                  <div style={{ height: "58px" }}>
                    <FloatingInput
                      label="Code (Auto Generated)"
                      disabled
                      placeholder=""
                      required={true}
                      myValue={loader ? "Loading..." : subjectObj.SubjectCode}
                      type="text"
                    />
                  </div>
                </Col>
                <Col lg={12} xl={6} className="mb-3">
                  <div>
                    <MyTextarea
                      required={false}
                      value={getValue("SubjectShortDesc")}
                      onChange={(e) =>
                        seteditedSubjectObj({
                          ...editedSubjectObj,
                          SubjectShortDesc: e.target.value,
                        })
                      }
                      label="Subjects Short Description"
                    />
                  </div>
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
        title={`Are you sure you want to delete ${subjectObj.SubjectName}`}
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
  )
}

export default AllSubjects
