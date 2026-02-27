import Container from "../../../components/layout/Container";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";
import schema from "../utils/schema";
import Button from "../../../components/uipart/Button";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

const CheckGetPage = () => {
  const [check, setCheck] = useState(null);
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const result = await window.db.getCheck({
      userId: window.user.id,
      seyyad: e.seyyad,
    });

    if (result.success) {
      setCheck(result.data);
      if (result.data.status === "pending") {
        setLevel(2);
      }else {
        toast.error("این چک قبلا پردازش شده است.")
      }
    } else {
      toast.error("چک مورد نظر یافت نشد.");
    }
  };

  const acceptCheck = async () => {
    if (confirm("از کار خود مطمئن هستید؟")) {
      const result = await window.db.acceptCheck(check?.seyyad);

      if (result.success) {
        toast.success(result.message);
        navigate("/home");
      } else {
        toast.error(result.message);
      }
    }
  };

  const rejectCheck = async () => {
    if (confirm("از کار خود مطمئن هستید؟")) {
      const result = await window.db.rejectCheck(check?.seyyad);

      if (result.success) {
        toast.success(result.message);
        navigate("/home");
      } else {
        toast.error(result.message);
      }
    }
  };

  return (
    <>
      <Container className={"mt-10 flex justify-center"}>
        {level === 1 && (
          <Form
            schema={schema("get")}
            className="bg-white border border-gray-200 p-6 max-w-120 w-full rounded-2xl"
            onSubmit={handleSubmit}
          >
            <h2 className={"!font-rokh text-2xl text-center mb-6"}>
              دریافت چک
            </h2>
            <Input name={"seyyad"} label={"شناسه صیاد"} dir={"ltr"} autofocus />
            <Button type={"submit"} className={"mt-6 w-full"} size={"lg"}>
              بررسی
            </Button>
          </Form>
        )}
        {level === 2 && (
          <div className="bg-white border border-gray-200 p-6 max-w-120 w-full rounded-2xl">
            <h2 className={"!font-rokh text-2xl text-center mb-8"}>بررسی چک</h2>
            <div className={"flex justify-between items-center"}>
              <span>شناسه چک</span>
              <span>{check?.seyyad}</span>
            </div>
            <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
            <div className={"flex justify-between items-center"}>
              <span>سری چک</span>
              <span>{check?.series}</span>
            </div>
            <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
            <div className={"flex justify-between items-center"}>
              <span>سریال چک</span>
              <span>{check?.serial}</span>
            </div>
            <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
            <div className={"flex justify-between items-center"}>
              <span>مبلغ (﷼)</span>
              <span>{check?.amount.toLocaleString()}</span>
            </div>
            <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
            <div className={"flex justify-between items-center"}>
              <span>تاریخ</span>
              <span dir={"ltr"}>
                {new Date(check?.date).toLocaleString("fa-IR")}
              </span>
            </div>
            <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
            <div className={"flex justify-between items-start"}>
              <span>توضیحات</span>
              <span className={"pr-10"}>{check?.description}</span>
            </div>
            <Button
              type={"submit"}
              onClick={acceptCheck}
              className={"mt-8 w-full !bg-green-600"}
              size={"lg"}
            >
              تایید چک
            </Button>
            <Button
              type={"submit"}
              onClick={rejectCheck}
              className={"mt-2 w-full !bg-red-600"}
              size={"lg"}
            >
              رد کردن چک
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default CheckGetPage;
