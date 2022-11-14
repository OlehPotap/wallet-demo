import s from "./addWalletModal.module.scss";
import { Formik, Field, Form } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { HandySvg } from "handy-svg";
import crossIcon from "../../assets/images/close-icon.svg";
import dudeIcon from "../../assets/images/dude-icon.png";
import adressIcon from "../../assets/images/address-icon.png";
import passIcon from "../../assets/images/pass-icon.png";

const style = {
  // marginTop: "30vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const AddWalletModal = ({ handleOpenNewWalletModal, open, handleClose }) => {
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
          <div className={s.formWrapper}>
            <img
              className={s.dudeIcon}
              width="150px"
              src={dudeIcon}
              alt="dude"
            />
            <Formik
              initialValues={{
                adress: "",
                password: "",
              }}
              onSubmit={(values) => {}}
            >
              <Form className={s.form}>
                <label className={s.formFieldLabel} htmlFor="adress">
                  <img
                    className={s.formFieldImg}
                    width="45px"
                    src={adressIcon}
                    alt="dude"
                  />
                </label>
                <Field
                  className={s.formField}
                  id="adress"
                  name="adress"
                  placeholder="Adress"
                  type="text"
                />
                <label className={s.formFieldLabel} htmlFor="password">
                  <img
                    className={s.formFieldImg}
                    width="45px"
                    src={passIcon}
                    alt="dude"
                  />
                </label>
                <Field
                  className={s.formField}
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className={s["formButton--top"]} type="submit">
                  ADD WALLET
                </button>
                <button
                  onClick={handleOpenNewWalletModal}
                  className={s["formButton--bottom"]}
                  type="button"
                >
                  NEW WALLET
                </button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddWalletModal;
