import Header from "../components/layout/Header.jsx";
import Container from "../components/layout/Container.jsx";
import Form from "../components/form/Form";
import Input from "../components/form/Input";

const CheckIssueTemplate = () => {
  return (
    <>
      <Container className={"pt-10"}>
        <Form>
            <Input name={"Hel"}/>
        </Form>
      </Container>
    </>
  );
};

export default CheckIssueTemplate;
