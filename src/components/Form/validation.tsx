import { z } from "zod";

export const formSchema = z.object({
  item: z.string().refine((data) => data.trim() !== "", {
    message: "PhotoUrl  is required",
  }),
});

export type TFormSchema = z.infer<typeof formSchema>;
