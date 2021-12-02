import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NavItem from "./Pages/Shared/Navbar/NavItem";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import DropdownMenu from "./Pages/Shared/Navbar/DropdownMenu";

function App() {
  return (
    <Navbar>
      <NavItem icon={<HomeIcon />} />
      <NavItem icon={<MailOutlineIcon />} />
      <NavItem icon={<SettingsIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
