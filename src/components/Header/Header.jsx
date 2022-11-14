import s from "./header.module.scss";
import mainLogo from "../../assets/images/main-logo.svg";
import { Link } from "react-router-dom";

const Header = ({
  isLogedIn,
  pageWidth,
  handleOpenLeftPanelModal,
  handleOpenLeftPanel,
  handleOpenAddWalletModal,
}) => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div
          onClick={
            pageWidth < 1280 ? handleOpenLeftPanelModal : handleOpenLeftPanel
          }
          className={s.logoWrapper}
        >
          <img className={s.logo} src={mainLogo} alt="logo" />
          <h1 className={s.heading}>NATURE WALLET</h1>
        </div>
        {isLogedIn ? (
          <button
            onClick={handleOpenAddWalletModal}
            className={s.headerButton}
            type="button"
          >
            NEW WALLET
          </button>
        ) : (
          <div className={s.headerButtonsWrapper}>
            <Link
              to="/login"
              // onClick={handleOpenAddWalletModal}
              className={s.headerButton}
            >
              SIGN IN
            </Link>
            <Link
              to="/register"
              // onClick={handleOpenAddWalletModal}
              className={s.headerButton}
            >
              REGISTER
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
