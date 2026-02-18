import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = ({
  children,
  schema,
  defaultValues = {},
  onSubmit,
  className,
}) => {
  const methods = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode: "onBlur",
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={className}
          noValidate
        >
          {children}
        </form>
      </FormProvider>
    </>
  );
};

export default Form;
