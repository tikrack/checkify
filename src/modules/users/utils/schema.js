import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "باید حداقل از ۳ کاراکتر باشد." }),
  family: z.string().min(3, { message: "باید حداقل از ۳ کاراکتر باشد." }),
  "national-code": z
    .string()
    .trim()
    .regex(/^\d{10}$/, { message: "کد ملی باید معتبر باشد. (انگلیسی)" }),
  username: z.string().min(3, { message: "باید حداقل از ۳ کاراکتر باشد." }),
  password: z.string().min(8, { message: "باید حداقل از ۸ کاراکتر باشد." }),
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { message: "تلفن باید معتبر باشد. (انگلیسی)" }),});

export default schema;
