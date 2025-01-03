import logo from "../assets/spectacom-logo.webp";
function Header() {
  return (
    <div className="bg-black py-6 flex  justify-between items-center gap-2 px-10">
      <div>
        <img src={logo} className="h-14"></img>
      </div>
      <div className="text-white ">
        <ol className="flex justify-around gap-16 text-sm">
          <li className="text-[#B89840]">HOME</li>
          <li>FEATURES</li>
          <li>COMMUNITY</li>
          <li>CAREER</li>
          <li>CONTACT</li>
        </ol>
      </div>
    </div>
  );
}
export default Header;
