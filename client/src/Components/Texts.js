import AddText from "./AddText";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Texts = () => {
  const [texts, setTexts] = useState();

  const teacher = localStorage.getItem("teacherId");

  useEffect(() => {
    fetch(`/texts?teacherId=${teacher}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("texts by teacher", data.data);
        setTexts(data.data);
        // console.log(d)
      });
  }, [teacher]);

  return (
    <div>
      {texts
        ? texts.map((text) => {
            return (
              <>
                <Div>{text.title}</Div>
                <Link to={`/${text._id}`}>link</Link>
              </>
            );
          })
        : "error"}
      <AddText />
    </div>
  );
};

const Div = styled.div`
  padding: 10px;
`;
export default Texts;
