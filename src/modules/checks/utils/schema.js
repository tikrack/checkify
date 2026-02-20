import { z } from "zod";

const schema = z.object({
  seyyad: z
    .string()
    .length(16, { message: "شناسه باید دقیقاً ۱۶ کاراکتر باشد" })
    .regex(/^[0-9a-zA-Z]+$/, { message: "شناسه فقط می‌تواند عدد و حروف انگلیسی باشد" }),

  series: z
    .string()
    .length(4, { message: "سری باید دقیقاً ۴ کاراکتر باشد" })
    .regex(/^\d{4}$/, { message: "سری باید ۴ رقم باشد (مثال: ۱۴۰۳)" }),

  serial: z
    .string()
    .length(6, { message: "سریال باید دقیقاً ۶ کاراکتر باشد" })
    .regex(/^\d{6}$/, { message: "سریال باید ۶ رقم باشد" }),

  amount: z
    .string()
    .regex(/^\d{1,9}$/, { message: "مبلغ باید عدد باشد (حداکثر ۹ رقم)" })
    .transform((val) => Number(val))
    .refine((n) => n > 0, { message: "مبلغ باید بیشتر از صفر باشد" })
    .refine((n) => n <= 100_000_000, {
      message: "مبلغ خیلی زیاد است (حداکثر ۱۰۰ میلیون)",
    }),

  date: z
    .date({ message: "تاریخ معتبر وارد کنید" }),

  description: z
    .string()
    .min(10, { message: "حداقل ۱۰ کاراکتر وارد کنید" })
    .max(500, { message: "حداکثر ۵۰۰ کاراکتر مجاز است" })
    .trim(),

  "national-code": z
    .string()
    .trim()
    .regex(/^\d{10}$/, { message: "کد ملی باید معتبر باشد. (انگلیسی)" }),
});

export default schema;