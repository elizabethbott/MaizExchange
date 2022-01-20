import { createContext } from 'react';

const UserContext = createContext({
    user: {
        firstName: "",
        lastName: "",
        email: ""
    },
    setUser: () => { }
});

export default UserContext;