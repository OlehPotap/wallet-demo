import s from "./rightPanel.module.scss";
import { HandySvg } from "handy-svg";
import walletIcon from "../../assets/images/wallet-icon.svg";
import buttonSend from "../../assets/images/button-send.svg";
import buttonRecive from "../../assets/images/button-recive.svg";

const RightPanel = ({
  handleOpenReciveModal,
  handleOpenSendModal,
  walletName,
  balance,
  leftPanelIsOpen,
}) => {
  return (
    <div className={leftPanelIsOpen ? s.rightPanelSided : s.rightPanel}>
      <div className={s.headingWrapper}>
        <HandySvg
          className={s.walletIco}
          src={walletIcon}
          width="50"
          height="50"
        />
        <h2 className={s.rightPanelHeading}>
          {walletName ? walletName : `<====SELECT A WALLET`}
        </h2>
      </div>
      <div className={s.walletBalaneWrapper}>
        <p className={s.walletBalaneHeading}>Balance:</p>
        <p className={s.walletBalane}>{`${balance ? balance : ""} NATURE`}</p>
      </div>
      <div className={s.buttonsWrapper}>
        <button onClick={handleOpenSendModal} className={s.button}>
          <img src={buttonSend} alt="send" />
        </button>
        <button onClick={handleOpenReciveModal} className={s.button}>
          <img src={buttonRecive} alt="recive" />
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
