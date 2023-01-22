import React, { FC, PropsWithChildren } from "react";
import * as st from "./style";

const Centered: FC<PropsWithChildren> = (props) => {
  return <st.CenteredContent>{props.children}</st.CenteredContent>;
};

export default Centered;
