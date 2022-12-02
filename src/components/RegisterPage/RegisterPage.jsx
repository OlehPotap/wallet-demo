import { Link } from "react-router-dom";
import s from "./registerPage.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/auth-operations";
import { getUser } from "../../redux/auth/auth-selectors";

const RegisterPage = () => {
  const schema = Yup.object().shape({
    userName: Yup.string().trim().max(40).required(),
    password: Yup.string()
      .trim()
      .min(8)
      .max(20)
      .matches(/[0-9a-zA-Z]{8,}/g)
      .required(),
  });

  const dispatch = useDispatch();
  const user = useSelector(getUser);

  console.log(user);

  return (
    <section className={s.section}>
      <Formik
        initialValues={{ userName: "", password: "" }}
        validationSchema={schema}
        onSubmit={({ userName, password }) => {
          dispatch(signup({ userName: userName, password: password }));
        }}
      >
        <Form className={s.form}>
          <label htmlFor="email">userName *</label>
          <Field id="userName" name="userName" type="text" autoComplete="off" />
          <ErrorMessage
            name="userName"
            render={() => <p>userName required</p>}
          />
          <label htmlFor="password">Password *</label>
          <Field
            id="password"
            name="password"
            type="password"
            autoComplete="off"
          />
          <ErrorMessage
            name="password"
            render={() => (
              <p>
                Password required, use only 0-9, a-z, A-Z chars, min 8 max 20
              </p>
            )}
          />
          <button type="submit">Register</button>

          <Link to={"/login"}>Login</Link>
        </Form>
      </Formik>
    </section>
  );
};

export default RegisterPage;
