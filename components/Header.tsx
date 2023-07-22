import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="gird  grid-cols-3 p-8 items-center">
        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton></DarkModeButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
