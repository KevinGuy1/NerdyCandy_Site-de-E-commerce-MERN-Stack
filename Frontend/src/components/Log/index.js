import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [loginModal, setLoginModal] = useState(props.login);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setLoginModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setLoginModal(true);
    }
  };

  return (
    <div className="w-full pt-40 pb-16 ">
      <div className="flex m-auto max-w-[450px] min-w-[360px] bg-primary rounded-2xl shadow-tertiary shadow-sm">
        <ul className="w-2/5 px-5 py-6">
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "bg-tertiary text-primary rounded-xl mb-6 text-center px-2 shadow-primary shadow-sm" : "mb-6 text-center px-2"}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={loginModal ? "bg-tertiary text-primary rounded-xl mb-6 text-center px-2 shadow-primary shadow-sm" : "mb-6 text-center px-2 "}
          >
            Connexion
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {loginModal && <LoginForm />}
      </div>
    </div>
  );
};

export default Log;
