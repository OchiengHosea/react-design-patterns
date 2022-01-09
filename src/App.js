import logo from './logo.svg';
import './App.css';
import {SplitScreen} from "./SplitScreen";
import { UncontrolledForm } from './controlledcomponents/UncontroledForm';
import {ControlledForm} from "./controlledcomponents/ControlledForm";
import {Modal} from "./layoutcomponents/Modal";
import {CurrentUserLoader} from "./containercomponents/CurrentUserLoader";
import UserInfo from "./components/UserInfo";
import {ResourceLoader} from "./containercomponents/ResourceLoader";
import {DataSource} from "./containercomponents/DataSource";
import axios from "axios";
import {useState} from "react";
import {ControlledModal} from "./controlledmodals/ControlledModal";
import {UncontrolledOnboardingFlow} from "./onboardingflows/UncontrolledOnboardingFlow";
import {Register} from "./onboardingflows/Register";
import {printProps} from "./higherordercomponents/printProps";
import {withUser} from "./higherordercomponents/withUser";
const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor:"red"}}>{name}</h1>
}

const RigthHandComponent = ({message}) => {
  return <h2 style={{backgroundColor:"green"}}>{message}</h2>
}

const getLocalStorageData = key => {
    return localStorage.getItem(key);
}

function App() {
    const [shouldShowModal, setShouldShowModal] = useState();
  return (
      // <CurrentUserLoader>
      //     <UserInfo />
      // </CurrentUserLoader>
      // <ResourceLoader resourceUrl="" resourceName="users">
      //     <UserInfo />
      // </ResourceLoader>

      // <DataSource getDataFunc={async () => {
      //     const response = axios.get('');
      //     return (await response).data
      // }} resourceName={"users"}/>
    //   <>
    //   <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
    //       setShouldShowModal(false);
    //   }}>
    //       <h3>I am modal</h3>
    //   </ControlledModal>
    //   <button onClick={() => setShouldShowModal(!shouldShowModal)}>
    //       {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
    //   </button>
    // </>
      <UserInfoWithLoader />

  );
}

export default App;
