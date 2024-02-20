import React, { FormEvent } from "react";
import { Button } from "../ui/button";

type EventFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
};

const EventForm: React.FC<EventFormProps> = ({
  onSubmit,
  onInputChange,
  label,
}) => {
  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <label>{label}</label>
      <input
        className="border-2 border-primary py-2 shadow-md"
        type="text"
        onChange={onInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EventForm;
