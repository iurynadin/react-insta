import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
            // need to call firebase service that gets the user data based on the id
            // console.log(`user.uid`, user.uid); // funciona
            const response = await getUserByUserId(user.uid);
            setActiveUser(response);
            console.log("response", response); // funciona
        }
        if (user?.uid) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}
