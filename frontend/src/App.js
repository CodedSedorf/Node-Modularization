import SignUp from './component/SignUp';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from 'react-router-dom';
import Admin_signup from './component/Admin/Admin_signup';
import Landingpage from './component/Landingpage';
import AdminLogin from './component/Admin/AdminLogin';
import FileUpload from './component/File_Upload/FileUpload';
import Signin from './component/SignIn/Signin';
import UserDashboard from './component/UserDashboard/UserDashboard';

function App() {
  let token = localStorage.token;
  return (
    <div>
      <FileUpload/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={token?<UserDashboard/>: <Navigate to="/signin"/>}/>
        <Route path='/admin' element={<Admin_signup/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
}  

export default App;
