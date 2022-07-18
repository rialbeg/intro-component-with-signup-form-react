import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillExclamationCircle } from "react-icons/ai";
import styles from "./style.module.scss";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    firstName: yup.string().required("First name canot be empty"),
    lastName: yup.string().required("Last name canot be empty"),
    email: yup
      .string()
      .email("Looks like this is not an email")
      .required("Email canot be empty"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required(),
  })
  .required();

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert("Thank you for signing up!");
    reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name"
              style={
                errors.firstName?.message
                  ? { borderColor: "hsl(0, 100%, 74%)" }
                  : {}
              }
            />
            {errors.firstName?.message && (
              <AiFillExclamationCircle size={20} className={styles.icon} />
            )}
          </div>
          <p>{errors.firstName?.message}</p>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
              style={
                errors.lastName?.message
                  ? { borderColor: "hsl(0, 100%, 74%)" }
                  : {}
              }
            />
            {errors.lastName?.message && (
              <AiFillExclamationCircle size={20} className={styles.icon} />
            )}
          </div>
          <p>{errors.lastName?.message}</p>
          <div style={{ position: "relative" }}>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              style={
                errors.email?.message
                  ? { borderColor: "hsl(0, 100%, 74%)" }
                  : {}
              }
            />
            {errors.email?.message && (
              <AiFillExclamationCircle size={20} className={styles.icon} />
            )}
          </div>
          <p>{errors.email?.message}</p>
          <div style={{ position: "relative" }}>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              style={
                errors.password?.message
                  ? { borderColor: "hsl(0, 100%, 74%)" }
                  : {}
              }
            />
            {errors.password?.message && (
              <AiFillExclamationCircle size={20} className={styles.icon} />
            )}
          </div>
          <p>{errors.password?.message}</p>
          <input type="submit" value="CLAIM YOUR FREE TRIAL" />
        </div>
      </form>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and Services</span>
      </p>
    </div>
  );
}
