
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

 

//   const [user, setUser] = useState(null)
//   const [loggedInUserData, setLoggedInUserData] = useState (null);
//   const authData = useContext(AuthContext)
//   useEffect(()=>{
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//  const userData = JSON.parse(loggedInUser)
//  setUser(userData.role)
//  setLoggedInUserData(userData.data)

//     }
//   },[]);
//   const handleLogin = (email, password) => {
//     if (email == 'admin@example.com' && password == '123') {
//       setUser('admin')
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data:'employee' }))
//     }
//     else if (authData) {
//       const employee = authData.employees.find((e) => email == e.email && password == e.password)
//       if (employee) {
//         setUser('employee');
//         setLoggedInUserData(employee)
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data:employee}))

//       }
//     } else {
//       alert('Invalid credentials')
//     }
//   }

//   return (
//     <div>
//       {!user ? <Login handleLogin={handleLogin}></Login> : ''}
//       {user == 'admin' ? <AdminDashboard changeUser={setUser}></AdminDashboard> : ( user == 'employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}></EmployeeDashboard>: null)}
//     </div>
//   )
// }
// export default App;

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext)

  // ✅ Load from localStorage on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {

    // ✅ Admin login
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')

      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'admin',
        data: null   // ✅ FIX
      }))
    }

    // ✅ Employee login
    else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      )

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: employee   // ✅ FIX (MOST IMPORTANT)
        }))
      } else {
        alert('Invalid credentials')
      }
    }
  }

  return (
    <div>

      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}

    </div>
  )
}

export default App;