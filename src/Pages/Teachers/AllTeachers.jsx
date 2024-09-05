import { useEffect, useState } from "react";

import Sidebar from "../../Layout/Sidebar";

import MyButton from "../../Components/MyButton";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import Tables from "../../Components/Tables";

function AllTeachers() {
  const [userData, setUserData] = useState([]);
  const navigate =useNavigate()
 
  
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

        </>
  );
}

export default AllTeachers;
