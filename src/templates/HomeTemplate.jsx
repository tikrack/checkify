import Container from "../components/layout/Container.jsx";
import {Paypal, User} from "iconsax-reactjs";
import {Link} from "react-router";

const HomeTemplate = () => {
    return (<>
            <Container className={"pt-10"}>
                <h2 className={"!font-rokh text-2xl"}>خدمات چک</h2>
                <div className="mt-3 grid grid-cols-4 gap-6">
                    <Card
                        href={"/check-issue"}
                        icon={<Paypal size="42" className={"text-warning"} variant="Bold"/>}
                        title={"صدور چک"}
                        description={"انجام کلیه امور صدور چک توسط سامانه"}
                    />
                </div>
                <h2 className={"!font-rokh text-2xl mt-12"}>پیشرفته</h2>
                <div className="mt-3 grid grid-cols-4 gap-6">
                    <Card
                        href={"/users"}
                        icon={<User size="42" className={"text-warning"} variant="Bold"/>}
                        title={"کاربران"}
                        description={"مدیریت کلیه کاربران سامانه چکیفای"}
                    />
                </div>
            </Container>
        </>);
};

const Card = ({icon, description, title, href}) => {
    return (<>
            <Link
                to={href}
                className={"bg-white flex items-center gap-3 shadow-card cursor-pointer p-6 rounded-xl active:scale-98 transition-all duration-100"}
            >
                {icon}
                <div className={"flex justify-start flex-col items-start"}>
                    <h3 className={"!font-rokh text-lg"}>{title}</h3>
                    <p className={"text-right text-sm text-gray-400 mt-1"}>{description}</p>
                </div>
            </Link>
        </>);
};

export default HomeTemplate;
