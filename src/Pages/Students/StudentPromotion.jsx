import { useEffect, useState } from 'react'
import Sidebar from '../../Layout/Sidebar'
import { getData, setData } from '../../Config/FirebaseMethods'
import MyLoader from '../../Components/MyLoader'
import MySelect from '../../Components/MySelect'
import FloatingInput from '../../Components/FloatingInput'
import { Col, Row } from 'react-bootstrap'
import { toastGreen, toastRed } from '../../Components/My Toasts'
import MyButton from '../../Components/MyButton'
import Tables from '../../Components/Tables'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Config/FirebaseConfig'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function StudentPromotion() {
    const [userData, setUserData] = useState([]);
    const navigate =useNavigate()
  
    
    useEffect(() => {
        getData();
      }, );
      
      //   Data get from firebase Firestore Database
      
      const getData = async () => {
        try {
          const arr = [];
          const getData = await getDocs(collection(db, "students"));
      
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

                <MyButton onClick={()=>navigate('/dashboard/students/StudentsRegistration')} margin={20} float={"right"} btnValue={'ADD'}/>
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
            <Sidebar element={content()} breadcrumbLink="Students" pageName="Student List" breadcrumbNestedLink="Student List" />
        </>
    )
}

export default StudentPromotion
