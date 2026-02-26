import Container from "../../../components/layout/Container";
import { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import Button from "../../../components/uipart/Button";
import { useNavigate } from "react-router";
import CheckState from "../components/CheckState";

const UserListPage = () => {
  const [checks, setChecks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await window.db.getAllChecks();
      setChecks(result);
    })();
  }, []);

  const handleCreate = () => {
    navigate("/checks/issue");
  };

  const COLUMNS = [
    {
      header: "شناسه صیاد",
      accessorKey: "seyyad",
    },
    {
      header: "سری چک",
      accessorKey: "series",
    },
    {
      header: "سریال",
      accessorKey: "serial",
    },
    {
      header: "مبلغ (ریال)",
      accessorKey: "amount",
      cell: (c) => c.getValue().toLocaleString(),
    },
    {
      header: "تاریخ",
      accessorKey: "date",
      cell: (c) => new Date(c.getValue()).toLocaleString("fa-IR"),
    },
    {
      header: "توضیحات",
      accessorKey: "description",
      cell: (c) => c.getValue().substring(0, 100),
    },
    {
      header: "وضعیت",
      accessorKey: "status",
      cell: (c) => (
        <div className={"pr-3"}>
          <CheckState status={c.getValue()} />
        </div>
      ),
    },
    {
      header: "گیرنده",
      accessorKey: "receiver_id",
    },
  ];

  return (
    <>
      <Container>
        <div className="p-6 bg-white rounded-2xl mt-10 border  border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className={"!font-rokh text-2xl"}>چک ها</h2>
            <Button onClick={handleCreate}>صدور چک جدید</Button>
          </div>
          <Table columns={COLUMNS} data={checks} />
        </div>
      </Container>
    </>
  );
};

export default UserListPage;
