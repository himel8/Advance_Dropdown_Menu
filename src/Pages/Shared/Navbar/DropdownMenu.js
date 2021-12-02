import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from "@mui/icons-material/Check";
import { CSSTransition } from "react-transition-group";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}

        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<PersonIcon />}> My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="settings"
          >
            App Customization Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* secondary menu   */}

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowBackIcon />} goToMenu="main">
            Back
          </DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<ChevronRightIcon />}
            goToMenu="settings2"
          >
            Customize Landing page
          </DropdownItem>
          <DropdownItem rightIcon={<ToggleOnIcon />}>
            Enable Shortcut
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Third menu  */}
      <CSSTransition
        in={activeMenu === "settings2"}
        unmountOnExit
        timeout={500}
        classNames="menu-third"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowBackIcon />} goToMenu="settings">
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<HomeIcon />} rightIcon={<CheckIcon />}>
            Home (Default)
          </DropdownItem>
          <DropdownItem leftIcon={<AccountBalanceWalletIcon />}>
            Accounts
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
