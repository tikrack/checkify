import Container from "../../../components/layout/Container";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";
import schema from "../utils/schema";
import Button from "../../../components/uipart/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Activity, useState } from "react";

const CheckIssuePage = () => {
  const [fullName, setFullName] = useState("");
  const [formData, setFormData] = useState(null);
  const [level, setLevel] = useState(1);
  const navigate = useNavigate();

  const handleContinue = (e, o = "+") => {
    if (!confirm("از صحت اطلاعات خود مطمئن هستید؟")) return;
    setLevel(o === "+" ? level + 1 : level - 1);
  };

  const handleSubmit = async (e) => {
    setFormData(e);
    setLevel(3)
  };

  const handleChangeNational = async (e) => {
    const result = await window.db.getUserByNationalId(e.target.value);

    if (result) {
      toast.success("کاربر یافت شد.");
      setFullName(result.name + " " + result.family);
    } else {
      setFullName("");
    }
  };

  const handleSendData = async () => {
    await window.db.issueCheck(formData);
    toast.success("چک با موفقیت صادر شد.");
    navigate("/");
  }

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
                <Input name={"amount"} dir={"ltr"} label={"مبلغ (ریال)"} />
                <Input name={"date"} type={"date"} label={"تاریخ"} />
                <Input
                  name={"description"}
                  label={"توضیحات"}
                  multi
                  className={"p-3 min-h-20"}
                />
              </div>
              <Button
                type={"button"}
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
                  name={"national-code"}
                  label={"کد ملی"}
                  dir={"ltr"}
                  autofocus
                  onChange={handleChangeNational}
                />
                <Input
                  name={"fullName"}
                  value={fullName}
                  label={"نام و نام خانوادگی"}
                  disabled
                  useForm={false}
                  updatable
                />
              </div>
              <Button
                type={"submit"}
                className={"mt-6"}
                disabled={fullName.trim() === ""}
              >
                ادامه
              </Button>
            </Activity>
          </Form>
        )}
        {level === 3 && <>
          <div className="bg-white border border-gray-200 p-6 max-w-150 w-full rounded-2xl text-gray-700">
            <h2 className={"!font-rokh text-black text-2xl text-center mb-8"}>تایید اطلاعات</h2>
            <div>
              <div className={"flex justify-between items-center"}>
                <span>شناسه چک</span>
                <span>{formData?.seyyad}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>سری چک</span>
                <span>{formData?.series}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>سریال چک</span>
                <span>{formData?.serial}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>مبلغ (﷼)</span>
                <span>{formData?.amount}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>تاریخ</span>
                <span>{formData?.date.toLocaleString("fa-IR")}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>توضیحات</span>
                <span>{formData?.description}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>کد ملی گیرنده</span>
                <span>{formData?.["national-code"]}</span>
              </div>
              <hr className={"h-px border-0 opacity-100 bg-gray-200 my-4"} />
              <div className={"flex justify-between items-center"}>
                <span>نام گیرنده</span>
                <span>{fullName}</span>
              </div>
            </div>
            <Button className={"mt-6"} onClick={handleSendData}>تایید اطلاعات</Button>
          </div>
        </>}
      </Container>
    </>
  );
};

export default CheckIssuePage;
