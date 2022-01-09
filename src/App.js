import logo from './logo.svg';
import './App.css';
import {SplitScreen} from "./SplitScreen";
import { UncontrolledForm } from './constrolledcomponents/UncontroledForm';
import {ControlledForm} from "./constrolledcomponents/ControlledForm";
import {Modal} from "./layoutcomponents/Modal";
import {CurrentUserLoader} from "./containercomponents/CurrentUserLoader";
import UserInfo from "./components/UserInfo";
import {ResourceLoader} from "./containercomponents/ResourceLoader";
const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor:"red"}}>{name}</h1>
}

const RigthHandComponent = ({message}) => {
  return <h2 style={{backgroundColor:"green"}}>{message}</h2>
}
function App() {
  return (
      // <CurrentUserLoader>
      //     <UserInfo />
      // </CurrentUserLoader>
      <ResourceLoader resourceUrl="" resourceName="users">
          <UserInfo />
      </ResourceLoader>
  );
}

export default App;
