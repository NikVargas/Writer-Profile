import AddText from "../Texts/AddText";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Texts = () => {
  const [texts, setTexts] = useState();

  const teacher = localStorage.getItem("teacherId");

  const [addTextForm, setAddTextForm] = useState(false);
  const textsForm = () => {
    setAddTextForm(!addTextForm);
  };

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
                <Link to={`/${text._id}`}>
                  <Div>{text.title}</Div>
                </Link>
              </>
            );
          })
        : "loading"}
        <button onClick={textsForm}>Add Text </button>
      {addTextForm && <AddText />}
      
    </div>
  );
};

const Div = styled.div`
  padding: 10px;
`;
export default Texts;
