import Header from "../components/layout/Header.jsx";
import Container from "../components/layout/Container.jsx";

const CheckIssueTemplate = () => {
  return (
    <>
      <Header />
      <Container className={"pt-10"}>
        <h2 className={"!font-rokh text-2xl"}>خدمات چک</h2>
        <div className="mt-5 grid grid-cols-4 gap-6"></div>
      </Container>
    </>
  );
};

export default CheckIssueTemplate;
