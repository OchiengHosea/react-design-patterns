import {withEditableUser} from "./withEditableUser";

export const UserInfoForm = withEditableUser(({user, onChangeUser, onSaveUser, onResetUser}) => {
    const {name, age, hairColor} = user || {};

    return user ? (
        <>
            <label>Name:</label>
            <input value={name} onChange={e => onChangeUser({name: e.target.value})} />
        </>
    ) : null
})