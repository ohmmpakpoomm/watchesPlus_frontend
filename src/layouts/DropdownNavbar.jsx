import { useState, useRef, useEffect } from "react";
import DropdownItem from "./DropdownItem";
import { dropdownList } from "../constants/Navbar";
import useAuth from "../hooks/useAuth";
import useProfile from "../hooks/useProfile";
import { User } from "lucide-react";

export default function DropdownNavbar() {
  const { logout } = useAuth();
  const {
    profileInfo: { profileImage },
  } = useProfile();

  const dropdownEl = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      const handleClickOutside = (e) => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mouseup", handleClickOutside);

      return () => document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropdownEl}>
      <div role="button" onClick={handleToggleDropdown}>
        {profileImage ? (
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={profileImage}
          />
        ) : (
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-400">
            <User color="black" />
          </div>
        )}
      </div>
      {open && (
        <div className="border-2 border-yellow-600 bg-brown absolute right-0 top-14 w-44 shadow">
          {dropdownList.map((el) =>
            el.id === dropdownList.length ? (
              <DropdownItem
                key={el.id}
                icon={el.icon}
                name={el.name}
                link={el.link}
                onClick={logout}
              />
            ) : (
              <DropdownItem
                key={el.id}
                icon={el.icon}
                name={el.name}
                link={el.link}
                onClick={() => handleToggleDropdown()}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
