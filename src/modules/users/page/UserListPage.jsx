import Container from "../../../components/layout/Container";
import {useEffect, useState} from "react";
import Table from "../../../components/table/Table";
import Button from "../../../components/uipart/Button";

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
            <div className="p-6 bg-white rounded-2xl mt-10 border  border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <h2 className={"!font-rokh text-2xl"}>کاربران</h2>
                    <Button>ایجاد کاربر جدید</Button>
                </div>
                <Table columns={COLUMNS} data={users} />
            </div>
        </Container>
    </>
}

export default UserListPage