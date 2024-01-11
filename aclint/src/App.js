import logo from './logo.svg';
import './App.css';
import Singup from './LoginSection/Singup';
import {BrowserRouter as Routers, Routes,Route} from 'react-router-dom'
import Login from './LoginSection/Login';
import NavHead from './Admin/NavHead';
import DepName from './Admin/Departments/DepName';
import Home from './Admin/Home/Home';
import Main from './Admin/MainPage/Main';
import DepHead from './Admin/DepartmentHeads/DepHead';
import Employ from './Admin/Employ/Employ';
import GetDep from './Admin/GetDep/GetDep';
import GetEmpoly from './Admin/GetEmploy/GetEmpoly';
import Cart from './Admin/Card/cart';


function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path='/' element={<Singup></Singup>}></Route>
          <Route path='/main' element={<Main></Main>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/main' element={<NavHead></NavHead>}></Route>
          <Route path='/departments' element={<DepName></DepName>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/departmentheads' element={<DepHead></DepHead>}></Route>
          <Route path='empoly'element={<Employ></Employ>}></Route>
          <Route path='getdep'element={<GetDep></GetDep>}></Route>
          <Route path='cart'element={<Cart></Cart>}></Route>


        </Routes>
      </Routers>
  
    </div>
  );
}

export default App;
