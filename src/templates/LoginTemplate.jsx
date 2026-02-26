import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Button from "../components/uipart/Button";
import schema from "../utils/schema";

const LoginTemplate = () => {
  const handleSubmit = (e) => {
    const result = window.db.loginWithCredential({
      username: e.username,
      password: e.password,
    })

    console.log(result);
  };

  return (
    <>
      <main className={"flex justify-center items-center h-dvh"}>
        <div className="border border-gray-200 bg-white p-6 rounded-2xl min-w-100">
          <div className={"flex flex-col items-center justify-center gap-3"}>
            <div className="size-12 bg-primary rounded-xl text-3xl flex justify-center items-center text-white">
              c
            </div>
            <h2 className={"!font-rokh text-xl font-bold"}>ورود به سامانه</h2>
          </div>
          <Form
            className={"mt-6 space-y-5"}
            onSubmit={handleSubmit}
            schema={schema("login")}
          >
            <Input
              name={"username"}
              label={"نام کاربری"}
              autofocus
              required
              dir={"ltr"}
            />
            <Input
              name={"password"}
              label={"رمز عبور"}
              type={"password"}
              required
              dir={"ltr"}
            />
            <Button className={"w-full"} type={"submit"} size={"lg"}>
              ورود
            </Button>
          </Form>
        </div>
      </main>
    </>
  );
};

export default LoginTemplate;
