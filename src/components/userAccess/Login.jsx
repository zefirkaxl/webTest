import { useEffect, useState } from "react";
import Input from "../Input";
import "./UserAccess.scss";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState(true);
  const [user, setUser] = useState("");
  const handleLogin = () => {
    setUserLogin(true);
  };
  const handleSign = () => {
    setUserLogin(false);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name: event.target.name.value,
      email: event.target.email.value,
      // date: event.target.date.value,
      password: event.target.password.value,
      // language: event.target.language.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/registration",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error registering:", error);
    }

    event.target.reset();
  }

  async function handleSignIn(event) {
    event.preventDefault();

    const userData = {
      name: event.target.password.value,
      email: event.target.email.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        userData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }

    event.target.reset();
  }

  return (
    <div className="login">
      <div className="login__btns ">
        <button onClick={handleLogin} className="login__log ">
          Вхід
        </button>
        <button onClick={handleSign} className="login__sig ">
          Регістрація
        </button>
        <div className={userLogin ? "active-btn active" : "active-btn"}></div>
      </div>
      {userLogin ? (
        <form onSubmit={handleSignIn} action="" method="post">
          <Input label={"Ел-пошта"} name={"email"} type={"email"} />
          <Input label={"Пароль"} type="password" name="password" />
          <button className="login__sign-in">Увійти</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} method="get">
          <Input label={"Нікнейм"} name={"name"} />
          <Input label={"Ел-пошта"} type={"email"} name={"email"} />
          {/* <Input label={"Дата народження"} type={"date"} name={"date"} /> */}
          <Input
            label={"Пароль"}
            type={"password"}
            name={"password"}
            minLength={6}
            autoComplete={"current-password"}
          />
          {/* <Input label={"Мова програмування"} name={"language"} /> */}
          <button className="login__sign-in">Регістрація</button>
        </form>
      )}
    </div>
  );
};

export default Login;
