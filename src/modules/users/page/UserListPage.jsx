import Container from "../../../components/layout/Container";
import {useEffect, useState} from "react";
import Table from "../../../components/table/Table";

const COLUMNS = [
    {
        header: "نام",
        accessorKey: "name",
    },
    {
        header: "نام خانوادگی",
        accessorKey: "family",
    },
    {
        header: "کد ملی",
        accessorKey: "national-code",
    },
    {
        header: "نام کاربری",
        accessorKey: "username",
    },
    {
        header: "رمز عبور",
        accessorKey: "password",
    },
    {
        header: "تلفن",
        accessorKey: "phone",
    },
]

const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await window.db.getAllUsers()
            setUsers(result)
        })()
    }, []);

    return <>
        <Container>
            <Table columns={COLUMNS} data={users} />
        </Container>
    </>
}

export default UserListPage