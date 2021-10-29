import logo from './logo.svg';
import './App.css';
import {SplitScreen} from "./SplitScreen";
const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor:"red"}}>{name}</h1>
}

const RigthHandComponent = ({message}) => {
  return <h2 style={{backgroundColor:"green"}}>{message}</h2>
}
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={"Left"}/>
      <RigthHandComponent message={"right"}/>
    </SplitScreen>
  );
}

export default App;
