import s from "./leftPanelModal.module.scss";
import Modal from "@mui/material/Modal";
import WalletsList from "../LeftPanel/WalletsList/WalletsList";
import Box from "@mui/material/Box";
import { HandySvg } from "handy-svg";
import crossIcon from "../../assets/images/close-icon.svg";
const style = {
  // marginTop: "30vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const LeftPanelModal = ({
  open,
  handleClose,
  wallets,
  handleSelectWallet,
  leftPanelIsOpen,
}) => {
  return (
    <div>
      <Modal
        BackdropProps={{
          style: { backgroundColor: "transparent" },
        }}
        className={s.modal}
        open={open}
        onClose={handleClose}
      >
        <Box className={s.modalWrapper} sx={style}>
          <button onClick={handleClose} className={s.closeModal}>
            <HandySvg src={crossIcon} width="45" height="45" />
          </button>
          <WalletsList
            wallets={wallets}
            handleSelectWallet={handleSelectWallet}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default LeftPanelModal;
