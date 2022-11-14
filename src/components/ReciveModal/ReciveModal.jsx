import s from "./reciveModal.module.scss";
import { Formik, Field, Form } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { HandySvg } from "handy-svg";
import crossIcon from "../../assets/images/close-icon.svg";
import qrIcon from "../../assets/images/QR-icon.png";
const style = {
  // marginTop: "30vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ReciveModal = ({ open, handleClose }) => {
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
                adress: "NATURE275e9c7dcbfae554574bae220",
              }}
              onSubmit={(values) => {}}
            >
              <Form className={s.form}>
                <img
                  className={s.formImg}
                  width="277px"
                  src={qrIcon}
                  alt="qr code"
                />
                <label className={s.formFieldLabel} htmlFor="adress"></label>
                <Field
                  className={s.formField}
                  id="adress"
                  name="adress"
                  placeholder="Adress"
                  type="text"
                />
                <button className={s["formButton--top"]} type="submit">
                  COPY
                </button>
              </Form>
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ReciveModal;
