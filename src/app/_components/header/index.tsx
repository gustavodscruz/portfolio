import Logo from "../logo";
import Navbar from "../navbar";
import ToggleBackground from "../ToggleBg";

export default function Header() {
  return (
    <header className="flex justify-between pt-8 mb-16 items-center ">
      <Logo />
      <Navbar />
      <ToggleBackground />
    </header>
  );
}
