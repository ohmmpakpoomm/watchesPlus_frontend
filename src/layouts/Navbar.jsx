import { Link } from "react-router-dom";
import logoImage from "../assets/logo-watchesPlus.png";
import DropdownNavbar from "./DropdownNavbar";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import useWallet from "../hooks/useWallet";
import Icon from "../components/Icon";
import { useEffect } from "react";
import { formatNum } from "../utils/formatNumber";
import logoSign from '../assets/Logo-Sign.png'

export default function Navbar() {
  const { authUser } = useAuth();
  const { wallet, getWallet } = useWallet();
  useEffect(() => {
    getWallet();
  }, []);
  return (
    <div className="navbar sticky top-0 w-full z-10 h-20 flex justify-around items-center text-white">
      <Link to="/">
        <div className="flex items-center">
          <img className="w-28" src={logoImage} />
          <img className='w-28' src={logoSign}/>
        </div>
      </Link>
      <Searchbar />
      <div className="flex items-center gap-12">
        <Menu />
        {authUser ? (
          <Link to="/profile/wallet">
            <div className="hover:text-brown flex flex-row gap-2">
              <div>{formatNum(wallet.amount)} THB</div>
              <Icon name="Wallet" />
            </div>
          </Link>
        ) : (
          ""
        )}
        {!authUser ? (
          <Link to="/login">
            <Button bg="gold">Login</Button>
          </Link>
        ) : (
          <DropdownNavbar />
        )}
      </div>
    </div>
  );
}
