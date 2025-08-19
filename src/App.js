
import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SiteHeader from './Components/SiteHeader';
import SiteFooter from './Components/SiteFooter';
import HomePage from './Pages/HomePage';
import ReactReduxPage from './Pages/ReactReduxPage';
import BasicImageUploadPage from './Pages/BasicImageUploadPage';
import BasicLiveSearchPage from './Pages/BasicLiveSearchPage';
import CompleteFormPage from './Pages/CompleteFormPage';
import CheckboxOperationPage from './Pages/CheckboxOperationPage';
import ReactHookPage from './Pages/ReactHookPage';
import ReactHttpPage from './Pages/ReactHttpPage';
import ReactHttpGetPage from './Pages/ReactHttpGetPage';
import ReactHttpPostPage from './Pages/ReactHttpPostPage';
import PageNotFound from './Pages/PageNotFound';
import UseStateInfo from './Components/UseStateInfo';
import UseEffectInfo from './Components/UseEffectInfo';
import UseContextInfo from './Components/UseContextInfo';
import UseMemoInfo from './Components/UseMemoInfo';
import UseReducerInfo from './Components/UseReducerInfo';
import UseRefInfo from './Components/UseRefInfo';
import ReactRouterPage from './Pages/ReactRouterPage';
import LearningNode from './Pages/LearningNode';
import ReactBasicInfo from './Pages/ReactBasicInfo';
import ControlledUncontrolledMain from './Pages/ControlledUncontrolledMain';
import LifeCycleMethod from './Pages/LifeCycleMethod';
import ReactFragment from './Pages/ReactFragment';
import ReactHocPage from './Pages/ReactHocPage';
import EmployeeDashboard from './Pages/EmployeeDashboard';
import EmployeeCreate from './Pages/EmployeeCreate';
import EmployeeDetails from './Pages/EmployeeDetails';
import EmployeeEdit from './Pages/EmployeeEdit';
import EmployeeList from './Pages/EmployeeList';
import InterviewSeries_1 from './Pages/InterviewSeries_1';
import InterviewSeries_2 from './Pages/InterviewSeries_2';
import InterviewSeries_3 from './Pages/InterviewSeries_3';
import ComputerMaterialDashboard from './Pages/ComputerMaterialDashboard';
import ComputerMaterialList from './Pages/ComputerMaterialList';
import ChildToParentPage from './Pages/ChildToParentPage';
import AscDescOrder from './Pages/AscDescOrder';
import UseCallBackInfo from './Components/UseCallBackInfo';
import RadioSelection from './Pages/RadioSelection';
import DebouncingPage from './Pages/DebouncingPage';
import ReactCustomHook from './Pages/ReactCustomHook';
import LazyLoadingPage from './Pages/LazyLoadingPage';
import CountryFullDetails from './Components/CountryFullDetails';
import ReduxCrudPage from './Pages/ReduxCrudPage';
import ReduxCrudCreate from './Pages/ReduxCrudCreate';
import ReduxCrudUpdate from './Pages/ReduxCrudUpdate';
import GitAndGitHub from './Pages/GitAndGitHub';
import ReduxThunkGetApi from './Pages/ReduxThunkGetApi';
import DataVirtualizationPage from './Pages/DataVirtualizationPage';
import ReactTestingPage from './Pages/ReactTestingPage';
import EmpReduxMain from './EmployeeReduxCrud/EmpReduxMain';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <main className='mainBody'>
        <Routes>
          <Route index Component={HomePage} />
          <Route path="/home" exact Component={HomePage} />
          <Route path="basic-info-of-react" exact Component={ReactBasicInfo} />
          <Route path="/react-controlled-uncontrolled-component" exact Component={ControlledUncontrolledMain} />
          <Route path="/life-cycle-method-in-react" exact Component={LifeCycleMethod}/>
          
          <Route path="/react-redux-tutorial" exact Component={ReactReduxPage} />
          <Route path="/simple-crud-using-redux-toolkit" Component={ReduxCrudPage} />
          <Route path="/redux-create-new-contact" Component={ReduxCrudCreate}/>
          <Route path="edit-student/:id" Component={ReduxCrudUpdate} />
          <Route path="/what-is-git-and-git-github" Component={GitAndGitHub}/>
          <Route path="/http-get-api-calling-via-redux-thunk" Component={ReduxThunkGetApi}/>

          <Route path="/checkbox-operation-in-react" exact Component={CheckboxOperationPage} />
          <Route path="/radio-operation-in-react" exact Component={RadioSelection}/>
          <Route path="/how-to-handle-form-in-react" exact Component={CompleteFormPage} />
          <Route path="/how-to-upload-files" exact Component={BasicImageUploadPage} />
          <Route path="/basic-live-search" exact Component={BasicLiveSearchPage} />
          <Route path="/how-to-create-custom-hook" Component={ReactCustomHook}/>

          <Route path="employee-crud-via-redux" Component={EmpReduxMain} />
          
          <Route path="/react-hook-tutorial/" Component={ReactHookPage}>
            <Route path="use-state-page" Component={UseStateInfo} />
            <Route path="use-effect-page" Component={UseEffectInfo} />
            <Route path="use-context-page" Component={UseContextInfo} />
            <Route path="use-memo-page" Component={UseMemoInfo} />
            <Route path="use-callback-page" Component={UseCallBackInfo} />
            <Route path="use-reducer-page" Component={UseReducerInfo} />
            <Route path="use-ref-page" Component={UseRefInfo}/>
          </Route>
          
          <Route path='/react-http-tutorial' Component={ReactHttpPage} />
          <Route path='/http-react-get-call' Component={ReactHttpGetPage} />
          <Route path='/http-react-get-call/country-full-info/:id' Component={CountryFullDetails}/>
          <Route path='/http-react-post-call' Component={ReactHttpPostPage} />
          <Route path='/how-to-perform-ascending-descending-order' Component={AscDescOrder}/>
          <Route path='/data-virtualization-in-react' Component={DataVirtualizationPage}/>

          <Route path="/fragment-in-react" Component={ReactFragment} />
          <Route path="/higher-order-component-in-react" exact Component={ReactHocPage} />
          <Route path="/how-to-pass-data-from-child-to-parent-component" exact Component={ChildToParentPage} />
          <Route path="/what-is-debouncing-and-throttling" exact Component={DebouncingPage} />
          <Route path="/what-is-lazy-loading-in-react" exact Component={LazyLoadingPage}/>
          <Route path="/react-router-tutorial" Component={ReactRouterPage} />
          <Route path="/node-tutorial" Component={LearningNode} />
          
          <Route path="/employees-dashboard" element={<EmployeeDashboard />}>
            <Route path="create" element={<EmployeeCreate />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="details/:id" element={<EmployeeDetails />} />
            <Route path="edit/:id" element={<EmployeeEdit />} />
          </Route>

          <Route path="/how-to-write-test-cases-in-react" Component={ReactTestingPage}/>
          
          <Route path="/interview-series-part-1" Component={InterviewSeries_1} />
          <Route path="/interview-series-part-2" Component={InterviewSeries_2} />
          <Route path="/interview-series-part-3" Component={InterviewSeries_3} />
          <Route path="computer-material-dashboard" Component={ComputerMaterialDashboard}>
            <Route path="product-list" element={<ComputerMaterialList />} />
          </Route>

          <Route path="*" Component={PageNotFound} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
