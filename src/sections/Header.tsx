import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import ArrowRight from "../assets/arrow-right.svg"
import MenuIcon from "@/assets/menu.svg"
export const Header = () => {
  return (
<header className="sticky z-20 backdrop-blur-sm top-0 ">


  <div className="flex justify-center bg-black items-center py-3 text-white text-sm ">
<div className="inline-flex justify-center items-center gap-1">
<p> get started for free </p>
<ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
  </div>
</div>

<div className="py-5">
<div className="container flex justify-between items-center">
<Image src={Logo} alt="Logo" width={40} height={40} />

<MenuIcon className="w-4 h-4 md:hidden"/>
<nav className="flex justify-center items-center text-black/60 gap-6 hidden md:flex">
  <a href="#">About</a>
  <a href="#">Features</a>
  <a href="#">Customers</a>
  <a href="#">Updates</a>
  <a href="#">Help</a>
  <button className="bg-black rounded-lg text-white text-lg w-40 h-10 ">Get for free</button>
</nav>
</div>
</div>





</header>
  );
};
