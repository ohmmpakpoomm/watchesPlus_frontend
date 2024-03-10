import React from "react";
import Modal from "../../../components/admins/Modal";
import VerifyForm from "../transactions/VerifyForm";
import AddTrackingForm from "./AddTrackingForm";
import shippingAdmin from "./hooks/shippingAdmin";

function ShipingForm() {
  const { shippings } = shippingAdmin();

  console.log(shippings, "******************");

  return (
    <div>
      <strong className="text-gray-700 font-medium">Shipping</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <div className="overflow-x-auto">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th>id</th>
                <th>User</th>
                <th>address</th>
                <th>watch_id</th>
                <th>DateCreate</th>
                <th>status</th>
                <th>tacking_number</th>
                <th>buttonAddtackingNumber</th>
              </tr>
            </thead>
            <tbody>
              {shippings?.map((el) => (
                <tr>
                  <th>{el.id}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div
                          className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url(${el.inventory?.user?.profileImage})`,
                          }}
                        ></div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {el.inventory?.user?.firstName}
                          {el.inventory?.user?.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    {el.inventory?.watch?.modelName} - -
                    {el.inventory?.watch?.brand?.name}
                  </td>
                  <td>{el.createdAt?.slice(0, 10)}</td>
                  <td>{el.status}</td>
                  <td>{el.trackingNumber}</td>
                  <td>
                    <Modal
                      title="addTracking"
                      // id={`editBrand${el.id}`}
                      id={`addTracking${el.id}`}
                      button="btn btn-sm bg-gray-400 text-black"
                    >
                      <AddTrackingForm id={el.id} />
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShipingForm;
