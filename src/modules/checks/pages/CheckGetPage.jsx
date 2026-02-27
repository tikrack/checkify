import Container from "../../../components/layout/Container";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";
import schema from "../utils/schema";
import Button from "../../../components/uipart/Button";
import { useNavigate } from "react-router";

const CheckGetPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

  };

  return (
    <>
      <Container className={"mt-10 flex justify-center"}>
        <Form
          schema={schema("get")}
          className="bg-white border border-gray-200 p-6 max-w-120 w-full rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className={"!font-rokh text-2xl text-center mb-6"}>دریافت چک</h2>
          <Input name={"seyyad"} label={"شناسه صیاد"} dir={"ltr"} autofocus />
          <Button type={"button"} className={"mt-6 w-full"} size={"lg"}>
            بررسی
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CheckGetPage;
