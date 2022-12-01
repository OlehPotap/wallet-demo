import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import s from "./signInPage.module.scss";

const SignInPage = () => {
  const schema = Yup.object().shape({
    userName: Yup.string().trim().max(40).required(),
    password: Yup.string()
      .trim()
      .min(8)
      .max(20)
      .matches(/[0-9a-zA-Z]{8,}/g)
      .required(),
  });

  return (
    <section className={s.section}>
      <Formik
        initialValues={{ userName: "", password: "" }}
        validationSchema={schema}
        onSubmit={({ userName, password }) => {
          console.log(userName, password);
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
          <button type="submit">Login</button>

          <Link to={"/register"}>Register</Link>
        </Form>
      </Formik>
    </section>
  );

  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // return (
  //   <>
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         console.log(userName, password);
  //       }}
  //       action="submit"
  //     >
  //       <input
  //         onChange={(event) => {
  //           setUserName(event.target.value);
  //         }}
  //         value={userName}
  //         type="text"
  //         placeholder="name"
  //       />
  //       <input
  //         onChange={(event) => {
  //           setPassword(event.target.value);
  //         }}
  //         value={password}
  //         type="password"
  //         placeholder="password"
  //       />
  //       <button type="submit">Login</button>
  //       <Link to="/register">Register</Link>
  //     </form>
  //   </>
  // );
};

export default SignInPage;
