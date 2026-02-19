import Container from "../../../components/layout/Container";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";
import schema from "../utils/schema";
import Button from "../../../components/uipart/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Activity, useState } from "react";

const CheckIssuePage = () => {
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();

  const handleContinue = (e, o = "+") => {
    if (!confirm("از صحت اطلاعات خود مطمئن هستید؟")) return;
    setLevel(o === "+" ? level + 1 : level - 1);
  };

  const handleSubmit = async (e) => {
    await window.db.createUser(e);
    toast.success("کاربر با موفقیت ایجاد شد.");
    navigate("/users");
  };

  return (
    <>
      <Container className={"mt-10 flex justify-center"}>
        {level < 3 && (
          <Form
            schema={schema}
            className="bg-white border border-gray-200 p-6 max-w-190 w-full rounded-2xl"
            onSubmit={handleSubmit}
          >
            <Activity mode={level === 1 ? "visible" : "hidden"}>
              <h2 className={"!font-rokh text-2xl text-center"}>صدور چک</h2>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Input
                  name={"seyyad"}
                  label={"شناسه صیاد"}
                  dir={"ltr"}
                  autofocus
                />
                <Input name={"series"} label={"سری چک"} dir={"ltr"} />
                <Input name={"serial"} dir={"ltr"} label={"شماره سریال"} />
                <Input name={"amount"} dir={"ltr"} label={"مبلغ"} />
                <Input name={"date"} type={"date"} label={"تاریخ"} />
                <Input
                  name={"description"}
                  label={"توضیحات"}
                  multi
                  className={"p-3 min-h-20"}
                />
              </div>
              <Button
                type={"submit"}
                className={"mt-6"}
                onClick={handleContinue}
              >
                ادامه
              </Button>
            </Activity>
            <Activity mode={level === 2 ? "visible" : "hidden"}>
              <h2 className={"!font-rokh text-2xl text-center"}>گیرنده چک</h2>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Input
                  name={"national-id"}
                  label={"کد ملی"}
                  dir={"ltr"}
                  autofocus
                />
                <Input
                  name={"national-id"}
                  label={"نام و نام خانوادگی"}
                  disabled
                />
              </div>
              <Button type={"submit"} className={"mt-6"}>
                ادامه
              </Button>
            </Activity>
          </Form>
        )}
        {level === 3 && <>Hello</>}
      </Container>
    </>
  );
};

export default CheckIssuePage;
