import React from "react";
import Button from "../../../components/Button";
import ShippingModal from "./ShippingModal";
import useAuth from "../../../hooks/useAuth";
import CancelModal from "./CancelModal";

export default function TableList(props) {
  const { authUser } = useAuth();

  const { pending, activeData, setLoading, waitingData  ,loading } = props;

  
  return (
    <>
    {/* pendingLists */}
      {pending && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {pending.map((e, i) => {
                return (
                  <tr className="hover" key={e.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} />
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>{e.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* watingLists */}
      {waitingData && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Edit Address</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {/* waitingLists */}
              {waitingData.map((e, i) => {
                return (
                  <tr className="hover" key={e.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} />
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>
                      <Button
                        bg="green"
                        color="white"
                        onClick={async () => {
                          document
                            .getElementById(`address_edit_${e.id}`)
                            .showModal();
                        }}
                      >
                        Edit Address
                      </Button>

                      <ShippingModal
                        loading={loading}
                        index={e.id}
                        authUser={authUser}
                        inventoryId={e.id}
                        setLoading={setLoading}
                        referenceNumber={e.referenceNumber}
                        
                      />
                    </td>
                    <td>
                      <Button
                        bg="red"
                        color="white"
                        onClick={() =>
                          document.getElementById("cancel").showModal()
                        }
                      >
                        CANCEL
                      </Button>
                      <CancelModal inventoryId={e.id} setLoading={setLoading} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {/* {watch in inventory} */}
      {activeData && (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Model Name</th>
                <th>Brand</th>
                <th>Reference Number</th>
                <th>Shipping</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {activeData.map((e, i) => {
                return (
                  <tr className="hover" key={e.id}>
                    <th>{i + 1}</th>
                    <td>
                      <img className="w-20" src={e.watch.watchImage} />
                    </td>
                    <td>{e.watch.modelName}</td>
                    <td>{e.watch.brand.name}</td>
                    <td>{e.referenceNumber}</td>
                    <td>
                      <Button
                        bg="green"
                        color="white"
                        onClick={() =>
                          document.getElementById(`address_${e.id}`).showModal()
                        }
                      >
                        Shipping
                      </Button>
                      <ShippingModal
                        index={e.id}
                        authUser={authUser}
                        inventoryId={e.id}
                        setLoading={setLoading}
                        referenceNumber={e.referenceNumber}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
