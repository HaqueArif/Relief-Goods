/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CreateCommentValidationSchema,
  Form,
  Input,
  TCreateCommentValidationSchema,
} from "@/components/Form";
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/fetures/auth/authSlice";
import {
  useCreateCommentsMutation,
  useGetCommentsQuery,
} from "@/redux/fetures/comments/commentsApi";
import { useAppSelector } from "@/redux/fetures/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Comments = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TCreateCommentValidationSchema>({
    resolver: zodResolver(CreateCommentValidationSchema),
  });
  const user = useAppSelector(selectCurrentUser);
  const [createComment] = useCreateCommentsMutation();
  const { data, isLoading } = useGetCommentsQuery({});
  if (isLoading) {
    return <p>Loading.....</p>;
  }

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("creating");
    const email = user?.email || "Unknown User";
    try {
      const commentData = {
        email: email,
        details: data.details,
      };
      console.log("commentData=======>>", commentData);
      await createComment(commentData).unwrap;
      toast.success("Comment Posted", {
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
    <div>
      <div className="border p-3 bg-slate-50">
        <div className=" mb-5 max-w-[500px]">
          <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
            <Input
              className=""
              type="text"
              register={register("details")}
              id="comment"
              errors={errors}
              label="Comments"
              placeholder="Share your message of gratitude..."
            />
            <br />
            <Button type="submit">Post Comment</Button>
          </Form>
        </div>
        <div className="h-[500px] overflow-y-auto">
          {data
            ?.slice()
            .reverse()
            .map((comment, i) => (
              <ul key={i} className="bg-slate-200 p-3 rounded-xl my-1">
                <li className=" text-gray-800 flex gap-3">
                  <MessageCircle className="text-blue-400" />{" "}
                  {comment?.data?.details}
                </li>
                <li className="text-sm text-gray-500">
                  Email: {comment?.data?.email}
                </li>
                <li className="text-sm text-gray-500">
                  Date: {comment?.currentDate}
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
