import Logo from "../logo";
import Navbar from "../navbar";
// import ToggleBackground from "../ToggleBg";

export default function Header() {
  return (
    <header className="flex justify-between max-sm:p-4 pt-8 mb-16 max-sm:m-auto gap-4 items-center  ">
      <Logo />
      <Navbar />
      {/* <ToggleBackground /> */}
    </header>
  );
}
