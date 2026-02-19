import Container from "../../../components/layout/Container";
import {useEffect} from "react";

const UserListPage = () => {

    useEffect(() => {
        window.db.createUser({
            name: "محمد رضا",
            family: "نصراله زاده",
            username: "tikrack",
            password: "1234",
            phone: "09030422838",
            nationalCode: "1251016089",
        }).then(r => {
            console.log(r)
        })
    }, []);

    return <>
        <Container>

        </Container>
    </>
}

export default UserListPage