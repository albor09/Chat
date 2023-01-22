import { useState } from "react";
import Centered from "../../components/Centered";
import Form from "../../components/Form";
import TextInput from "../../components/TextInput";
import { Link, redirect } from "react-router-dom";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../../services/firebase";
import { addUser } from "../../utils/dbHelpers";
import { User } from "../../utils/dbModels/User";
import { useAppDispatch } from "../../app/hooks";
import { setAcc } from "../../app/currentAccSlice";
import useStringWithValidation from "../../utils/hooks/useTextFiledWithVal";
import useKeyDown from "../../utils/hooks/useKeyDown";

const Auth = () => {
  const [username, setUsername, isUsernameValid] = useStringWithValidation({
    minChars: 3,
    maxChars: 21,
  });
  const [email, setEmail, isEmailValid] = useStringWithValidation({
    requiredSymbols: ["@", "."],
  });
  const [pass, setPass, isPassValid] = useStringWithValidation({
    minChars: 6,
    maxChars: 21,
    numbersRequired: true,
  });
  const [passConfirm, setPassConfirm, isPassConfirmValid] = useStringWithValidation({
    equalTo: pass,
  });

  const dispatch = useAppDispatch();

  const authorize = () => {
    if (!(isUsernameValid && isEmailValid && isPassValid && pass == passConfirm)) return;

    createUserWithEmailAndPassword(appAuth!, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        addUser(new User(user.uid, username, email, user.uid));
        dispatch(setAcc({ id: user.uid, nickname: username }));
      })
      .catch((error) => {
        console.log("error" + error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useKeyDown(
    "Enter",
    () => {
      authorize();
    },
    [email, pass]
  );

  return (
    <Centered>
      <Form
        title={"Auth"}
        hint={
          <div>
            or <Link to="/login">log in</Link>
          </div>
        }
        onSubmit={authorize}
      >
        <TextInput
          setText={setUsername}
          value={username}
          placeholder="Username"
          isValid={isUsernameValid}
        ></TextInput>
        <TextInput
          setText={setEmail}
          value={email}
          isValid={isEmailValid}
          placeholder="Email"
        ></TextInput>
        <TextInput
          setText={setPass}
          value={pass}
          isValid={isPassValid}
          isPass={true}
          placeholder="Password"
        ></TextInput>
        <TextInput
          setText={setPassConfirm}
          value={passConfirm}
          isValid={isPassConfirmValid}
          isPass={true}
          placeholder="Confirm password"
        ></TextInput>
      </Form>
    </Centered>
  );
};

export default Auth;
