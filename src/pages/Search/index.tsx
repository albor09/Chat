import { query, collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Centered from "../../components/Centered";
import CircleLoading from "../../components/CircleLoading";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import { db } from "../../services/firebase";
import { DivLine } from "../../styles/globalStyles";
import { User } from "../../utils/dbModels/User";
import * as st from "./style";
import UserPreview from "./UserPrev";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [queryText, setQueryText] = useState("");
  const users = useRef<QuerySnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getDocs(query(collection(db!, "Users")))
      .then((snap) => {
        users.current = snap;
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  return (
    <Centered>
      <st.SearchBox>
        <st.TopBar>
          <Icon icon={faArrowLeft} useThemeColor={true} onClick={() => navigate("/chat")}></Icon>
        </st.TopBar>
        <TextInput setText={setQueryText} value={queryText}></TextInput>
        <DivLine></DivLine>
        {loading ? (
          <CircleLoading></CircleLoading>
        ) : (
          <st.Users>
            {users.current?.docs.map((item) => {
              let data = item.data();
              let u = new User(data["uid"], data["nickname"], data["email"], data["id"]);
              return <UserPreview user={u}></UserPreview>;
            })}
          </st.Users>
        )}
      </st.SearchBox>
    </Centered>
  );
};

export default Search;
