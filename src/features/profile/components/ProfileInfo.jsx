import React from "react";
import useProfile from "../../../hooks/useProfile";
import { useEffect } from "react";
import { User } from "lucide-react";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

export default function ProfileInfo() {
  const { profileInfo, getProfileInfo } = useProfile();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div className=" flex flex-col gap-4  bg-white w-full mb-8 relative">
      <div className="  rounded-xl p-12 flex flex-col gap-6 justify-center items-center">
        <div className="w-48 h-48 bg-gray-300 rounded-full flex justify-center items-center">
          {profileInfo?.profileImage ? (
            <img
              src={profileInfo.profileImage}
              className="w-48 h-48 rounded-full object-cover"
            />
          ) : (
            <User size={40} />
          )}
        </div>
        <span className="text-4xl">
          {profileInfo?.firstName + " " + profileInfo?.lastName}
        </span>
        <span>Your points : {profileInfo?.royalty?.point}</span>
        <button
          type="button"
          onClick={() => setIsEdit(!isEdit)}
          className="absolute bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-md top-10 right-12"
        >
          Edit
        </button>
        {isEdit && <EditProfileForm setIsEdit={setIsEdit} />}
      </div>
    </div>
  );
}
