import s from "./mewWalletModal.module.scss";
import { Formik, Field, Form } from "formik";
import Modal from "@mui/material/Modal";
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

const NewWalletModal = ({ open, handleClose }) => {
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
            <Formik
              initialValues={{
                mnemonic: "",
                adress: "",
                password: "",
              }}
              onSubmit={(values) => {}}
            >
              <Form className={s.form}>
                <label className={s.formFieldLabel} htmlFor="mnemonic">
                  MNEMONIC
                </label>
                <Field
                  className={s["textarea"]}
                  id="mnemonic"
                  name="mnemonic"
                  placeholder=""
                  component="textarea"
                />
                <label className={s.formFieldLabel} htmlFor="password">
                  PASSWORD
                </label>
                <Field
                  className={s.formField}
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <label className={s.formFieldLabel} htmlFor="adress">
                  ADRESS
                </label>
                <Field
                  className={s.formField}
                  id="adress"
                  name="adress"
                  placeholder="Adress"
                  type="text"
                />
                <button className={s["formButton--top"]} type="submit">
                  ADD WALLET
                </button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewWalletModal;
