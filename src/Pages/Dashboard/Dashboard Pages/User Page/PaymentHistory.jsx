import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  // if (isLoading) return <p>Loading payments...</p>;
  // if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Payment History</h2>
      <p>Number of Payments: {payments.length}</p>

      {/* table  */}
      <div className="table mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-600 rounded-xl text-[#ffffff] text-base font-semibold">
              <tr>
                <th></th>
                <th>EMAIL</th>
                <th className="uppercase">Transaction ID</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?.transactionId}</td>
                  <td>{item?.price}</td>
                  <th>{new Date(item.date).toLocaleDateString("en-GB")} </th>
                  <th>{item?.status}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
