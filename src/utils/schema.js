import { z } from "zod";

const schema = (type) => {
  switch (type) {
    case "login":
      return z.object({
        username: z.string().min(3, { message: "حداقل ۳ کاراکتر وارد کنید." }),
        password: z.string().min(8, { message: "حداقل ۸ کاراکتر وارد کنید." }),
      });
  }
};

export default schema;