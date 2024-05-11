/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";

import {
  Form,
  FormSection,
  FormSubmit,
  Input,
  TUpdateSupplyValidationSchema,
  UpdateSupplyValidationSchema,
} from "@/components/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateSupplyMutation } from "@/redux/fetures/supply/supplyApi";
import { toast } from "sonner";

type FormData = {
  image?: string;
  category?: string;
  title?: string;
  amount?: string;
  description?: string;
};

const UpdateSupply = ({ _id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUpdateSupplyValidationSchema>({
    resolver: zodResolver(UpdateSupplyValidationSchema),
  });

  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("creating");

    try {
      const supplyData: {
        id: string;
        updatedData: Partial<FormData>;
      } = {
        id: _id,
        updatedData: {},
      };
      if (data.image) {
        supplyData.updatedData.image = data.image;
      }
      if (data.category) {
        supplyData.updatedData.category = data.category;
      }
      if (data.title) {
        supplyData.updatedData.title = data.title;
      }
      if (data.amount) {
        supplyData.updatedData.amount = data.amount;
      }
      if (data.description) {
        supplyData.updatedData.description = data.description;
      }
      console.log(supplyData);
      await updateSupply(supplyData).unwrap();

      toast.success("Supply created Successfully", {
        id: toastId,
        duration: 2000,
      });
      reset();
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
      console.log("error", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-orange-400 p-4 rounded-xl text-white">
        <Edit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <Form
              onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
            >
              <h1 className="text-center mb-5">Update Supply</h1>
              <FormSection>
                <Input
                  type="text"
                  id="image"
                  label="Image"
                  register={register("image")}
                  errors={errors}
                  placeholder="Image link"
                />
                <Input
                  type="text"
                  id="category"
                  label="Category"
                  register={register("category")}
                  errors={errors}
                  placeholder="Exp: Shelter kits, Personal Hygiene"
                />

                <Input
                  type="text"
                  id="title"
                  label="Title"
                  register={register("title")}
                  errors={errors}
                  placeholder="Exp: Shelter kits, Personal Hygiene"
                />
                <Input
                  type="text"
                  id="amount"
                  label="Amount"
                  register={register("amount")}
                  errors={errors}
                  placeholder="Exp: 2 bags etc..."
                />
                <Input
                  type="text"
                  id="description"
                  label="Description"
                  register={register("description")}
                  errors={errors}
                  placeholder="Write in detail"
                />
              </FormSection>
              <FormSubmit />
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateSupply;
