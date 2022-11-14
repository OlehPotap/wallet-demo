import s from "./sendModal.module.scss";
import { Formik, Field, Form } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { HandySvg } from "handy-svg";
import crossIcon from "../../assets/images/close-icon.svg";
import qrIcon from "../../assets/images/QR-icon.png";
import qmarkIcon from "../../assets/images/qmark-icon.png";
const style = {
  // marginTop: "30vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const SendModal = ({ open, handleClose }) => {
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
                adress: "",
                amount: "",
              }}
              onSubmit={(values) => {}}
            >
              <Form className={s.form}>
                <label className={s.formFieldLabel} htmlFor="adress">
                  <img
                    className={s.formFieldImg}
                    width="45px"
                    src={qrIcon}
                    alt="qr code"
                  />
                </label>
                <Field
                  className={s["formField"]}
                  id="adress"
                  name="adress"
                  placeholder="Recive address"
                  type="text"
                />
                <label className={s.formFieldLabel} htmlFor="amount"></label>
                <Field
                  className={s.formField}
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  type="text"
                />
                <p className={s.formInfo}>Total with fee: 0 NATURE</p>
                <label className={s.formInfoPrivate} htmlFor="private">
                  Private{" "}
                  <img
                    className={s.qmarkIcon}
                    width="22px"
                    src={qmarkIcon}
                    alt="qmark"
                  />
                  <Field
                    className={s.privateCheckbox}
                    id="private"
                    name="private"
                    type="checkbox"
                  />
                  <span className={s.slider}></span>
                </label>

                <button className={s["formButton--top"]} type="submit">
                  SEND
                </button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SendModal;
