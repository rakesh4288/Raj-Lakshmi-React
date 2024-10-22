
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SiteHeader from './Components/SiteHeader';
import SiteFooter from './Components/SiteFooter';
import HomePage from './Pages/HomePage';
import ReactReduxPage from './Pages/ReactReduxPage';
import ReactFormPage from './Pages/ReactFormPage';
import ReactHookPage from './Pages/ReactHookPage';
import ReactHttpPage from './Pages/ReactHttpPage';
import ReactHttpGetPage from './Pages/ReactHttpGetPage';
import ReactHttpPostPage from './Pages/ReactHttpPostPage';
import PageNotFound from './Pages/PageNotFound';
// import Junior from './Components/Junior';
// import Green from './Components/green';
// import { useSelector } from "react-redux";
import UseStateInfo from './Components/UseStateInfo';
import UseEffectInfo from './Components/UseEffectInfo';
import UseContextInfo from './Components/UseContextInfo';
import UseMemoInfo from './Components/UseMemoInfo';
import UseReducerInfo from './Components/UseReducerInfo';
import ReactRouterPage from './Pages/ReactRouterPage';
import LearningNode from './Pages/LearningNode';
import ReactBasicInfo from './Pages/ReactBasicInfo';
import ControlledUncontrolledMain from './Pages/ControlledUncontrolledMain';
import ReactHocPage from './Pages/ReactHocPage';
import EmployeeDashboard from './Pages/EmployeeDashboard';
import EmployeeCreate from './Pages/EmployeeCreate';
import EmployeeDetails from './Pages/EmployeeDetails';
import EmployeeEdit from './Pages/EmployeeEdit';
import EmployeeList from './Pages/EmployeeList';
import InterviewPart_1 from './Pages/InterviewPart_1';


function App() {
  // const value = useSelector((data) => data.counter.value);
  // const userData = useSelector((data) => data.counter.userData);
  //  console.log('value =', value);
  // console.log('userData =', userData);
  return (
    <div className="App">
      <SiteHeader />
      <main className='mainBody'>
        <Routes>
          <Route index Component={HomePage} />
          <Route path="/home" exact Component={HomePage} />
          <Route path="basic-info-of-react" exact Component={ReactBasicInfo} />
          <Route path="/react-controlled-uncontrolled-component" exact Component={ControlledUncontrolledMain} />
          <Route path="/react-redux-tutorial" exact Component={ReactReduxPage} />
          <Route path="/react-form-handling" exact Component={ReactFormPage} />
          <Route path="/react-hook-tutorial/" Component={ReactHookPage}>
            <Route path="use-state-page" Component={UseStateInfo} />
            <Route path="use-effect-page" Component={UseEffectInfo} />
            <Route path="use-context-page" Component={UseContextInfo} />
            <Route path="use-memo-page" Component={UseMemoInfo} />
            <Route path="use-reducer-page" Component={UseReducerInfo} />
          </Route>
          <Route path='/react-http-tutorial' Component={ReactHttpPage} />
          <Route path='/http-react-get-call' Component={ReactHttpGetPage} />
          <Route path='/http-react-post-call' Component={ReactHttpPostPage} />
          <Route path="/higher-order-component-in-react" exact Component={ReactHocPage} />
          <Route path="/react-router-tutorial" Component={ReactRouterPage} />
          <Route path="/node-tutorial" Component={LearningNode} />
          <Route path="/employees-dashboard" element={<EmployeeDashboard />}>
            <Route path="create" element={<EmployeeCreate />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="details/:id" element={<EmployeeDetails />} />
            <Route path="edit/:id" element={<EmployeeEdit />} />
          </Route>
          <Route path="/interview-question-part-1" Component={InterviewPart_1} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
      </main>
      <SiteFooter />
      {/* <header className="App-header">  
        <div>
          <Junior />
        </div>

        <hr/>
        
        <h1>{value}</h1>
        <h2>{userData}</h2>
        <div>
          <Green/>
        </div>

        <hr/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
