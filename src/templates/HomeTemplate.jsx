import Header from "../components/layout/Header.jsx";
import Container from "../components/layout/Container.jsx";
import { Paypal } from "iconsax-reactjs";
import { Link } from "react-router";

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Container className={"pt-10"}>
        <h2 className={"!font-rokh text-2xl"}>خدمات چک</h2>
        <div className="mt-5 grid grid-cols-4 gap-6">
          <Card
            href={"/check-issue"}
            icon={
              <Paypal size="40" className={"text-primary"} variant="Bold" />
            }
            title={"صدور چک"}
            description={"انجام کلیه امور صدور چک توسط سامانه"}
          />
        </div>
      </Container>
    </>
  );
};

const Card = ({ icon, description, title, href }) => {
  return (
    <>
      <Link
        to={href}
        className={
          "bg-white flex gap-2 shadow-card cursor-pointer p-6 rounded-xl active:scale-98 transition-all duration-100"
        }
      >
        {icon}
        <div className={"flex justify-start flex-col items-start"}>
          <h3 className={"!font-rokh text-lg"}>{title}</h3>
          <p className={"text-right text-sm text-gray-400 mt-1"}>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default HomeTemplate;
