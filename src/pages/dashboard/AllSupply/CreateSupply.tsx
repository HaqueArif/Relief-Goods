/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CreateSupplyValidationSchema,
  FormSection,
  FormSubmit,
  Input,
  TCreateSupplyValidationSchema,
} from "@/components/Form";

import { useCreateSupplyMutation } from "@/redux/fetures/supply/supplyApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { toast } from "sonner";

const CreateSupply = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateSupplyValidationSchema>({
    resolver: zodResolver(CreateSupplyValidationSchema),
  });

  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("creating");

    try {
      const supplyData = {
        image: data.image,
        title: data.title,
        category: data.category,
        amount: data.amount,
        description: data.description,
      };
      await createSupply(supplyData).unwrap();

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
    <div className="flex flex-col  justify-center items-center max-w-md mx-auto h-screen px-2 sm:px-5">
      <div className="border border-black px-1 py-5 sm:py-10 sm:px-5 w-[100%] glass-gradient">
        <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
          <h1 className="text-center text-[30px] mb-5">Create Supply</h1>
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
      </div>
    </div>
  );
};

export default CreateSupply;

{
  /* <Select onValueChange={(value) => setCategory(value)}>
<SelectTrigger className="w-full mt-2">
  <SelectValue placeholder="Category" />
</SelectTrigger>
<SelectContent>
  <SelectItem value="foodSupplies">Food Supplies</SelectItem>
  <SelectItem value="shelterKits">Shelter Kits</SelectItem>
  <SelectItem value="clothing">Clothing</SelectItem>
  <SelectItem value="personalHygiene">
    Personal Hygiene
  </SelectItem>
  <SelectItem value="medicalSupplies">
    Medical Supplies
  </SelectItem>
  <SelectItem value="waterContainers">
    Water Containers
  </SelectItem>
  <SelectItem value="emergencyBlankets">
    Emergency Blankets
  </SelectItem>
  <SelectItem value="solarLanterns">Solar Lanterns</SelectItem>
  <SelectItem value="childrensSupplies">
    Children's Supplies
  </SelectItem>
  <SelectItem value="communicationSupplies">
    Communication Supplies
  </SelectItem>
  <SelectItem value="agriculturalSupplies">
    Agricultural Supplies
  </SelectItem>
</SelectContent>
</Select> */
}
