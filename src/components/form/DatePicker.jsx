import { useController, useFormContext } from "react-hook-form";
import DP from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import clsx from "clsx";

const DatePicker = ({ name, showTime = false, className }) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <DP
      value={value ? new Date(value) : ""}
      onChange={(date) => onChange(date ? date.toDate() : null)}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      inputClass={clsx(className, "w-full")}
      plugins={showTime ? [<TimePicker key="time" hideSeconds />] : []}
    />
  );
};

export default DatePicker;

