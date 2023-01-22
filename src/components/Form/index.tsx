import { FC } from "react";
import { TextBtn } from "../../styles/globalStyles";
import Centered from "../Centered";
import * as st from "./style";

interface FormProps {
  title: string;
  children: React.ReactNode;
  hint?: React.ReactNode | string;
  onSubmit?: () => void;
}

const Form: FC<FormProps> = ({ title, children, hint, onSubmit }) => {
  return (
    <st.Form>
      <h2>{title}</h2>
      {children}
      <Centered>
        <TextBtn onClick={() => onSubmit!()}>Go</TextBtn>
      </Centered>
      <st.Hint>{hint}</st.Hint>
    </st.Form>
  );
};

export default Form;
