import {useEffect, useState} from "react";
import axios from "axios";

export const withEditableUser = (Component, url) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(url);
                setOriginalUser(response.data);
                setUser(response.data);
            })()
        })

        const onChangeUser = changes => {
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
            const response = await axios.post(url, {user});
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }
        return <Component {...props} user={user} onSaveUser={onSaveUser} onResetUser={onResetUser}/>
    }
}