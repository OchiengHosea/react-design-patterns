import {useEffect, useState} from "react";
import axios from "axios";

export const withUser = (Component, url) => {
    return props => {
        const [user, setUser] = useState(null);
        useEffect(() => {
            (async () => {
                const response = await axios.get(url);
                setUser(response.data);
            })();
        });
        return <Component {...props} user={user} />
    }
}