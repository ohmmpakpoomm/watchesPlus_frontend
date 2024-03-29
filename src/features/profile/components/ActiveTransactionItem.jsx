import Button from "../../../components/Button";
import useProfile from "../../../hooks/useProfile";
import { formatNum } from "../../../utils/formatNumber";
import formatTimeAgo from "../../../utils/time-ago";
import useWallet from "../../../hooks/useWallet";
import { useState } from "react";

export default function ActiveTransactionItem({ name, el }) {
  const { handleClickCancelBuyOrder, handleClickCancelSaleOrder } =
    useProfile();
  const { getWallet } = useWallet();
  const timeAgo = formatTimeAgo(el.createdAt);

  const hdlClick = async () => {
    await handleClickCancelBuyOrder(el.id);
    await getWallet();
  };

  switch (name) {
    case "BUYORDER":
      return (
        <li className="px-4 py-2 border border-b-0 flex bg-white hover:bg-gray-200">
          <div className="flex-1 flex items-center">
            <div className=" flex items-center gap-2">
              <img className="w-20" src={el.watch?.watchImage} />
              <div>{el.watch?.modelName}</div>
            </div>
          </div>
          <div className="w-32 flex items-center justify-center">
            {el.watch?.brand.name}
          </div>
          <div className="w-32 flex items-center justify-center">
            {formatNum(el?.price)} THB
          </div>
          <div className="w-32 flex items-center justify-center">
            {el?.status}
          </div>
          <div className="w-32 flex items-center justify-center">{timeAgo}</div>
          <div className="w-32 flex items-center justify-center">
            {el?.createdAt.split("T")[0]}
          </div>
          <div className="w-32 flex items-center justify-center">
            <Button bg="scarlet" color="white" onClick={hdlClick}>
              Cancel
            </Button>
          </div>
        </li>
      );

    case "SALEORDER":
      return (
        <li key={el.id} className="px-4 py-2 border border-b-0 flex">
          <div className="flex-1 flex items-center">
            <div className=" flex items-center gap-2">
              <img className="w-20" src={el.inventory.watch?.watchImage} />
              <div>{el.inventory.watch?.modelName}</div>
            </div>
          </div>
          <div className="w-32 flex items-center justify-center">
            {el.inventory.watch?.brand.name}
          </div>
          <div className="w-32 flex items-center justify-center">
            {formatNum(el.price)} THB
          </div>
          <div className="w-32 flex items-center justify-center">
            {el.status}
          </div>
          <div className="w-32 flex items-center justify-center">{timeAgo}</div>
          <div className="w-32 flex items-center justify-center">
            {el.createdAt.split("T")[0]}
          </div>
          <div className="w-32 flex items-center justify-center">
            <Button
              bg="black"
              color="white"
              onClick={() => handleClickCancelSaleOrder(el.id)}
            >
              Cancel
            </Button>
          </div>
        </li>
      );
  }
}
