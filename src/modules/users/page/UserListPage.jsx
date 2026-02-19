import Container from "../../../components/layout/Container";
import {useEffect} from "react";

const UserListPage = () => {

    useEffect(() => {
        window.db.getAllUsers().then((users) => {
            console.log(users);
        })
    }, []);

    return <>
        <Container>

        </Container>
    </>
}

export default UserListPage