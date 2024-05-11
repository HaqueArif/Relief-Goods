import { z } from "zod";

export const formSchema = z.object({
  item: z.string().refine((data) => data.trim() !== "", {
    message: "PhotoUrl  is required",
  }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export const LoginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 4 characters long"),
});

export type TLoginValidationSchema = z.infer<typeof LoginValidationSchema>;

export const RegistrationValidationSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().email(),
  password: z.string().min(4, "Password minimum 4 characters long"),
});

export type TRegistrationValidationSchema = z.infer<
  typeof RegistrationValidationSchema
>;

export const CreateSupplyValidationSchema = z.object({
  image: z.string().min(1, "image is Required"),
  category: z.string(),
  title: z.string().min(4, "title minimum 4 characters long"),
  amount: z.string(),
  description: z.string().min(4, "description minimum 4 characters long"),
});

export type TCreateSupplyValidationSchema = z.infer<
  typeof CreateSupplyValidationSchema
>;
export const UpdateSupplyValidationSchema = z.object({
  image: z.string().optional(),
  category: z.string().optional(),
  title: z.string().optional(),
  amount: z.string().optional(),
  description: z.string().optional(),
});

export type TUpdateSupplyValidationSchema = z.infer<
  typeof UpdateSupplyValidationSchema
>;
export const CreateCommentValidationSchema = z.object({
  email: z.string().optional(),
  details: z.string(),
});

export type TCreateCommentValidationSchema = z.infer<
  typeof CreateCommentValidationSchema
>;

// donationInfo = {
//   donator: {
//     name: data.name,
//     email: user?.email,
//   },
//   donatedField: {
//     id: _id,
//     title,
//     category,
//   },
// };

export const DonateValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  title: z.string().optional(),
  category: z.string().optional(),
  amount: z.string().optional(),
});

export type TDonateValidationSchema = z.infer<typeof DonateValidationSchema>;
