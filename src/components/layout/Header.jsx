import Container from "./Container.jsx";

const Header = () => {
  return <>
    <header className={"h-18 border-b border-gray-200"}>
      <Container className={"flex items-center h-full justify-between"}>
        <div className={"flex items-center gap-3"}>
          <div className="size-12 bg-primary rounded-xl text-3xl flex justify-center items-center text-white">c</div>
          <div className="flex-col ">
            <h2 className={"!font-rokh font-bold"}>چکیفای</h2>
            <p className={"text-sm text-gray-400"}>نرم افزار شبیه سازی خدمات</p>
          </div>
        </div>
      </Container>
    </header>
  </>
}

export default Header