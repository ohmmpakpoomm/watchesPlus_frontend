import React from "react";
import VerifyForm from "./VerifyForm";
import Modal from "../../../components/admins/Modal";
import inventoryAdmin from "./hooks/inventoryAdmin";
import FailverifyForm from "./FailverifyForm";
import { useNavigate } from "react-router-dom";
import brandAdmin from "../brands/hooks/brandAdmin";
import { useState } from "react";
import Avatar from "../../../components/Avatar";

function TransactionForm() {
  const { inventorys } = inventoryAdmin();
  const { brands } = brandAdmin();
  const navigate = useNavigate();
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <div className="flex gap-5 items-center">
            <strong className="text-gray-700 font-medium">Inventory</strong>
            <select
              className="select  max-w-xs"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option disabled selected>
                Pick search
              </option>
              {brands?.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
              <option value="">ALL</option>
            </select>
          </div>
          <div className="border-x border-gray-200 rounded-sm mt-3">
            <div className="overflow-x-auto">
              <table className="table w-full ">
                {/* head */}
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th>ID</th>
                    <th></th>
                    <th>referenceNumber</th>
                    <th>NAME_BRAND</th>
                    <th>MODEL</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {inventorys
                    ?.filter((el) => el.watch?.brand?.name.includes(select))
                    .map((el) => (
                      <tr>
                        <th>{el.id}</th>
                        <td
                          onClick={() => navigate(`/admin/users/${el.user.id}`)}
                          role="button"
                        >
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="avatar">
                                <div className="rounded-full bg-gray-200 bg-cover bg-no-repeat bg-center">
                                  <Avatar src={el.user?.profileImage} />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {el.user?.firstName} {el.user?.lastName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{el.referenceNumber}</td>
                        <td>{el.watch?.brand?.name}</td>
                        <td>{el.watch?.modelName}</td>
                        <td>{el.createdAt?.slice(0, 10)}</td>
                        <td>{el.status}</td>
                        <td>
                          <div className="flex gap-3 items-center">
                            <Modal
                              title="verify"
                              // id={`editBrand${el.id}`}
                              id={`verify${el.id}`}
                              button="btn btn-sm bg-gray-400 text-black"
                            >
                              <VerifyForm id={el.id} />
                            </Modal>
                            <Modal
                              title="cancle verify"
                              // id={`editBrand${el.id}`}
                              id={`failverify${el.id}`}
                              button="btn btn-sm bg-gray-400 text-black"
                            >
                              <FailverifyForm id={el.id} />
                            </Modal>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionForm;
