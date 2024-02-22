import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddRecentEvent from "./AddRecentEvent";
import { useGetRecentEvents } from "@/api/dashboard/recentEvents/recent.event.hook";
import UpdateRecentEvent from "./UpdateRecentEvent";
import DeleteRecentEvent from "./DeleteRecentEvent";
import { EventProps } from "@/components/Types";

const RecentEvents = () => {
  const { data, isLoading, isError } = useGetRecentEvents();

  if (isLoading) {
    <p>Loading.....</p>;
  }
  if (isError) {
    <p>Something went wrong.....</p>;
  }

  return (
    <div>
      <div className="py-10">
        <div className="max-w-4xl mx-auto  glass-gradient p-2 sm:p-20 rounded-lg">
          <h3 className="text-4xl text-center font-extrabold">
            Recent Event's
          </h3>
          <div className="flex items-center justify-between">
            <h4 className=" text-xl font-extrabold mb-5">
              Total Item
              <span className="text-primary">{data?.data.length}</span>
            </h4>

            <AddRecentEvent />
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
                      <UpdateRecentEvent itemId={item._id} />
                      <DeleteRecentEvent itemId={item._id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
