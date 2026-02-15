import Container from "./Container.jsx";
import { useLocation } from "react-router";
import { ArrowLeft2 } from "iconsax-reactjs";

const Header = () => {
  const { pathname } = useLocation();

  const back = () => {
    history.back()
  }

  return (
    <>
      <header className={"h-18 border-b border-gray-200"}>
        <Container className={"flex items-center h-full justify-between"}>
          <div className={"flex items-center gap-3"}>
            <div className="size-12 bg-primary rounded-xl text-3xl flex justify-center items-center text-white">
              c
            </div>
            <div className="flex-col ">
              <h2 className={"!font-rokh font-bold"}>چکیفای</h2>
              <p className={"text-sm text-gray-400"}>
                نرم افزار شبیه سازی خدمات
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {pathname !== "/" && (
              <button
                onClick={back}
                className={
                  "size-12 flex justify-center items-center bg-gray-100 cursor-pointer active:scale-95 transition-all rounded-xl"
                }
              >
                <ArrowLeft2 className={"text-gray-600"} />
              </button>
            )}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
