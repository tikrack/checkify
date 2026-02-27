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
      setLevel(2);
    } else {
      toast.error("چک مورد نظر یافت نشد.");
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
            <h2 className={"!font-rokh text-2xl text-center mb-6"}>
              بررسی چک
            </h2>
            <Button type={"submit"} className={"mt-4 w-full !bg-green-600"} size={"lg"}>
              تایید چک
            </Button>
            <Button type={"submit"} className={"mt-2 w-full !bg-red-600"} size={"lg"}>
              رد کردن جک
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default CheckGetPage;
