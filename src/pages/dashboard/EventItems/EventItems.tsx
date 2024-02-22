import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetEventItems } from "@/api/dashboard/eventItems/event.hook";

import AddEvent from "./AddEvent";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";
import { EventProps } from "@/components/Types";

const EventItems = () => {
  const { data, isLoading, isError } = useGetEventItems();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto glass-gradient p-2 sm:p-20 rounded-lg">
        <h3 className="text-4xl text-center font-extrabold mb-5">
          Event Items
        </h3>
        <div className="flex items-center justify-between">
          <h4 className=" text-xl font-extrabold">
            Total Item <span className="text-primary">{data?.data.length}</span>
          </h4>

          <AddEvent />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((item: EventProps, i: number) => (
              <TableRow key={i}>
                <TableCell>
                  <img
                    className=" max-h-[365px]"
                    src={item.item}
                    alt="event-instrument"
                  />
                </TableCell>
                <TableCell>event item {i + 1}</TableCell>

                <TableCell>
                  <div className="flex gap-2 items-center justify-end">
                    <UpdateEvent itemId={item._id} />
                    <DeleteEvent itemId={item._id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventItems;
