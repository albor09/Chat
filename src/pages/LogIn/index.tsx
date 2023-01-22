import { useState } from "react";
import Centered from "../../components/Centered";
import Form from "../../components/Form";
import TextInput from "../../components/TextInput";
import { Link, redirect } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../../services/firebase";
import { useAppDispatch } from "../../app/hooks";
import { setAuthServiceEnabled } from "../../app/servicesSlice";
import { getUser } from "../../utils/dbHelpers";
import { setAcc } from "../../app/currentAccSlice";
import useKeyDown from "../../utils/hooks/useKeyDown";

const LogIn = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useAppDispatch();

  const singin = () => {
    console.log(login);
    signInWithEmailAndPassword(appAuth!, login, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        getUser(user.uid).then((u) => {
          dispatch(setAcc({ id: user.uid, nickname: u.nickname }));
        });
        console.log(user);
      })
      .catch((error) => {
        console.log("error" + error.message);
        setLogin("");
        setPass("");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useKeyDown(
    "Enter",
    () => {
      singin();
    },
    [login, pass]
  );

  return (
    <Centered>
      <Form
        title={"LogIn"}
        hint={
          <div>
            or <Link to="/auth">create account</Link>
          </div>
        }
        onSubmit={singin}
      >
        <TextInput setText={setLogin} value={login}></TextInput>
        <TextInput setText={setPass} value={pass} isPass={true}></TextInput>
      </Form>
    </Centered>
  );
};

export default LogIn;
