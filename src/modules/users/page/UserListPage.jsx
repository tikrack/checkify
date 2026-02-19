import Container from "../../../components/layout/Container";
import { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import Button from "../../../components/uipart/Button";
import { Edit, Trash } from "iconsax-reactjs";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await window.db.getAllUsers();
      setUsers(result);
    })();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("از کار خود مطمئن هستید؟")) {
      await window.db.removeUser(id);

    }
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleCreate = () => {

  }

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
    {
      header: "عملیات",
      accessorKey: "",
      cell: (cell) => {
        return (
          <div className={"space-x-2"}>
            <button
              className={"hover:bg-red-200 cursor-pointer active:scale-95 transition-all duration-100 rounded-lg p-1"}
              onClick={() => handleDelete(cell?.row?.original?.id)}
            >
              <Trash size={20}/>
            </button>
            <button
              className={"hover:bg-green-200 cursor-pointer active:scale-95 transition-all duration-100 rounded-lg p-1"}
              onClick={() => handleEdit(cell?.row?.original?.id)}
            >
              <Edit size={20}/>
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Container>
        <div className="p-6 bg-white rounded-2xl mt-10 border  border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className={"!font-rokh text-2xl"}>کاربران</h2>
            <Button onCLick={handleCreate}>ایجاد کاربر جدید</Button>
          </div>
          <Table columns={COLUMNS} data={users} />
        </div>
      </Container>
    </>
  );
};

export default UserListPage;
