import React from "react";
import useWallet from "../../../hooks/useWallet";
import { useEffect } from "react";
import WalletTransactionItem from "./WalletTransactionItem";

export default function WalletTransaction() {
  const { walletTransaction, getWalletTransaction } = useWallet();

  console.log(walletTransaction, "WALLL");

  const walletTransactionSort = walletTransaction.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    getWalletTransaction();
  }, []);

  return (
    <div className="w-full rounded-xl p-8 flex flex-col justify-between items-center bg-white">
      <div className="w-full p-4">
        <span className="text-4xl font-bold">Wallet History</span>
      </div>
      <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b ">
        <div className="w-full flex font-bold p-4 bg-egg">
          <span className="flex-1">Date</span>
          <span className="flex-1">Amount</span>
          <span className="flex-1">Type</span>
          <span className="w-24 text-end">Via</span>
        </div>
        {walletTransactionSort.map((el) => (
          <WalletTransactionItem key={el.id} el={el} />
        ))}
      </ul>
    </div>
  );
}

{
  /* <div className="w-2/3 rounded-xl p-8 flex flex-col justify-between items-center">
      <div className="w-full p-4">
        <span className="text-4xl font-bold">Wallet History</span>
      </div>
      <ul className="w-full border border-t-0 border-l-0 border-r-0 border-b">
        <div className="w-full flex font-bold p-4">
          <span className="flex-1">Date</span>
          <span className="flex-1">Amount</span>
          <span className="flex-1">Type</span>
          <span className="w-24 text-end">Via</span>
        </div>
        {walletTransaction.reverse().map((el) => (
          <WalletTransactionItem key={el.id} el={el} />
        ))}
      </ul>
    </div> */
}
