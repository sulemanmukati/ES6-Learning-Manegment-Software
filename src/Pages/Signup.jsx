import { useNavigate } from "react-router-dom"
import MyButton from "../Components/MyButton"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Config/FirebaseConfig"
import { useState } from "react"

function Signup() {
    const [name,setName] = useState()
    const [userName,setUserName] = useState()
    const [email,setEmail] = useState()
    const [Password,setPassword] = useState()
     
    const navigate = useNavigate()
    const handleSubmit=()=>{
        console.log("name",name)
        console.log("User name",userName)
        console.log("Email",email)
        console.log("password",Password)
        
        let userObj={
        name,
        userName,
        email,
        }

        createUserWithEmailAndPassword(auth,email,Password)
        .then((userCredential) => {
           console.log("userCredential ",userCredential)
            localStorage.setItem("userData",JSON.stringify(userObj))
           // ...
            navigate('/')
            })

    }
    console.log(name)

    return (
        <>
           
                <div style={{ height: "100vh" }} className="d-flex flex-column justify-content-center align-items-center main-w3layouts wrapper bg-darkBlue">
                    <h2 className="text-center display-4 text-white fw-semibold mb-4">Sign up</h2>
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.18)" }} className="container">
                        <div className="p-2 py-sm-5 p-sm-5">
                  
                              
                            <label htmlFor="Name" className="text-white fs-5">Name</label>
                                <input value={name} className="textInputs textInputsWhite" type="text" placeholder="Name" required onChange={(e)=>{setName(e.target.value)}} />
                                
                                <label htmlFor="User Name" className="text-white fs-5">User Name</label>
                                <input id="username Name" value={userName} className="textInputs textInputsWhite" type="text" placeholder="User Name" required onChange={(e) => setUserName(e.target.value)} />


                                <label htmlFor="Email" className="text-white fs-5">Email</label>
                                <input id="Email" value={email} className="textInputs textInputsWhite" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="Password" className="text-white fs-5">Password</label>
                                <input id="Password" value={Password} className="textInputs textInputsWhite" type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                               <div className="text-white"> already have Account <button style={{border:"none",background:"none",textDecoration:'underline',color:'white'}} onClick={()=>navigate("/")}> click here </button></div>
                                <div className="row px-2">
                                    <MyButton onClick={handleSubmit} type="submit" textColor="black" bgColor="var(--orange)" hoverBgColor="#b87a00" className="px-4 py-3" btnValue="SIGNIN" />
                                </div>
                      
                        </div>
                    </div>
                </div>
    
        </>
    )
}

export default Signup