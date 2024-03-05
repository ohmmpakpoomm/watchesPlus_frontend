import { MessagesSquare } from "lucide-react";
import { useState } from "react";
import MainChat from "./MainChat";

export default function ChatIcon() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {!open ? (
        <div className="flex flex-row-reverse gap-6 items-center">
          <div
            onClick={handleClick}
            className="show w-[4rem] h-[4rem] rounded-full bg-white flex flex-col justify-center items-center shadow-sm hover:cursor-pointer"
          >
            <MessagesSquare size="2.2rem" strokeWidth="1" />
          </div>
          <div className="speech message hide absolute right-0 shadow-sm">
            Chat with admin
          </div>
        </div>
      ) : (
        <MainChat setOpen={setOpen} />
      )}
    </>
  );
}