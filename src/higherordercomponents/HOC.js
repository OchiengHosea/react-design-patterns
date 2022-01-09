import {printProps} from "./printProps";
import UserInfo from "../components/UserInfo";
import {withUser} from "./withUser";
import {withEditableUser} from "./withEditableUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "");

export const HOC = () => {

    // <UserInfoWrapped a={1} b={2} user={{name:"Chloe", age:54}}/>

}