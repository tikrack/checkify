import Container from "../../../components/layout/Container";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";
import schema from "../utils/schema";
import Button from "../../../components/uipart/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UserCreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    await window.db.createUser(e)
    toast.success("کاربر با موفقیت ایجاد شد.")
    navigate("/users");
  }

  return (
    <>
      <Container className={"mt-10 flex justify-center"}>
        <Form
          schema={schema}
          className="bg-white border border-gray-200 p-6 max-w-190 w-full rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className={"!font-rokh text-2xl text-center"}>ایجاد کاربر</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Input name={"name"} label={"نام"} placeholder={"علی"} autofocus />
            <Input
              name={"family"}
              label={"نام خانوادگی"}
              placeholder={"گیاهی"}
            />
            <Input
              name={"national-code"}
              label={"کد ملی"}
              placeholder={"۰۰۰۰۰۰۰۰۰۰"}
            />
            <Input
              name={"username"}
              dir={"ltr"}
              label={"نام کابری"}
              placeholder={"aligiahi"}
            />
            <Input
              name={"password"}
              type={"password"}
              dir={"ltr"}
              label={"رمز عبور"}
              placeholder={"1234"}
            />
            <Input
              name={"phone"}
              dir={"ltr"}
              label={"تلفن"}
              placeholder={"0912789567"}
            />
          </div>
          <Button type={"submit"} className={"mt-6"}>
            ثبت اطلاعات
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default UserCreatePage;
