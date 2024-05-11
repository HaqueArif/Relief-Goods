/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Droplet } from "lucide-react";

import {
  DonateValidationSchema,
  Form,
  FormSection,
  FormSubmit,
  Input,
  TDonateValidationSchema,
} from "@/components/Form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useAppSelector } from "@/redux/fetures/hooks";
import { selectCurrentUser } from "@/redux/fetures/auth/authSlice";
import { useCreateDonationMutation } from "@/redux/fetures/donation/donationApi";
import GotoLogin from "@/components/ui/gotoLogin";
import { useNavigate } from "react-router-dom";

const Donate = ({ _id, title, category }) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TDonateValidationSchema>({
    resolver: zodResolver(DonateValidationSchema),
  });

  //   const [updateSupply] = useUpdateSupplyMutation();
  const [createDonation] = useCreateDonationMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Donating");

    try {
      const donationInfo = {
        donator: {
          name: data.name,
          email: user?.email,
        },
        donatedField: {
          id: _id,
          title,
          category,
          amount: data.amount,
        },
      };
      console.log("donationInfo==>", donationInfo);
      await createDonation(donationInfo).unwrap();

      toast.success("Your Donation Successful", {
        id: toastId,
        duration: 2000,
      });
      reset();
      navigate("/dashboard/dashboard-home");
    } catch (error: any) {
      toast.error(error.data.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
      console.log("error", error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-[#0094DA] px-4 py-2 flex rounded-xl text-white">
          Donate
          <Droplet />
        </DialogTrigger>
        <DialogContent>
          {user === null ? (
            <GotoLogin />
          ) : (
            <DialogHeader>
              <DialogTitle>
                You're donating into{" "}
                <span className="text-green-700">{title}</span>!
              </DialogTitle>
              <DialogDescription>
                <Form
                  onSubmit={
                    handleSubmit(onSubmit) as SubmitHandler<FieldValues>
                  }
                >
                  <FormSection>
                    <Input
                      type="text"
                      id="name"
                      label="What should we call you"
                      register={register("name")}
                      errors={errors}
                      placeholder="Your Name"
                    />

                    <Input
                      type="text"
                      id="email"
                      label="Your Email"
                      register={register("email")}
                      errors={errors}
                      defaultValue={user?.email}
                      disabled
                      placeholder="Your Email"
                    />

                    <Input
                      type="text"
                      id="title"
                      label="Title"
                      register={register("title")}
                      errors={errors}
                      defaultValue={title}
                      disabled
                      placeholder="Exp: Shelter kits, Personal Hygiene"
                    />
                    <Input
                      type="number"
                      id="amount"
                      label="Amount"
                      register={register("amount")}
                      errors={errors}
                      placeholder="Exp: $ USD"
                    />
                  </FormSection>
                  <FormSubmit />
                </Form>
              </DialogDescription>
            </DialogHeader>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donate;
