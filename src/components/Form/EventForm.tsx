import { EventFormProps } from "../Types";
import { Button } from "../ui/button";

const EventForm = ({ onSubmit, onInputChange, label }: EventFormProps) => {
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
