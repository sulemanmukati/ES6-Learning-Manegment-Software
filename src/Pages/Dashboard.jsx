import Sidebar from "../Layout/Sidebar"


function Dashboard() {
 
  const content = () => {
    return (
      <>
       
    
      </>
    )
  }

  return (
    <>
      <Sidebar element={content()} breadcrumbLink="Admin" breadcrumbNestedLink="Dashboard" pageName="Admin Dashboard" />
    </>
  )
}

export default Dashboard
