import { useGetSuppliesQuery } from "@/redux/fetures/supply/supplyApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { EventProps } from "@/components/Types";
import { NavLink } from "react-router-dom";
import DeleteSupply from "./DeleteSupply";
import UpdateSupply from "./UpdateSupply";

const AllSupply = () => {
  const { data } = useGetSuppliesQuery({});
  console.log(data);

  return (
    <div>
      <div className="py-10">
        <div className="max-w-4xl mx-auto glass-gradient p-2 sm:p-20 rounded-lg">
          <h3 className="text-4xl text-center font-extrabold mb-5">
            All Supply
          </h3>
          <div className="flex items-center justify-between">
            <h4 className=" text-xl font-extrabold">
              Total Item <span className="text-primary">{data?.length}</span>
            </h4>
            <NavLink
              className="bg-primary text-white px-3 py-1 rounded-lg"
              to="/dashboard/create-supply"
            >
              Create Supply +
            </NavLink>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-end">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((item: EventProps, i: number) => (
                <TableRow key={i}>
                  <TableCell>
                    <span>{item.title}</span>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.amount}</TableCell>

                  <TableCell>
                    <div className="flex gap-2 items-center justify-end">
                      <UpdateSupply _id={item._id} />
                      <DeleteSupply _id={item._id} />
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

export default AllSupply;
