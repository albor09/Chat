import * as st from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FaBtn } from "../../styles/globalStyles";

const BottomBar = () => {
  return (
    <st.BottomBar>
      <st.Left>
        <FaBtn href="lol">
          <FontAwesomeIcon icon={faCode} />
          <div>GitHub</div>
        </FaBtn>
        <FaBtn>
          <FontAwesomeIcon icon={faEnvelope} />
          <div>Contact</div>
        </FaBtn>
      </st.Left>
      <st.Right>
        <FaBtn>
          <FontAwesomeIcon icon={faPalette} />
          <div>Theme</div>
        </FaBtn>
      </st.Right>
    </st.BottomBar>
  );
};

export default BottomBar;
