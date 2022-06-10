import { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

const AddText = () => {
  let { teacherId } = useParams();
  const [title, setTitle] = useState();
  const [errorMsg, setErrorMsg] = useState();

  console.log(teacherId);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/add-text", {
      body: JSON.stringify({
        teacherId: teacherId,
        title: title,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          // setGroup(data.data)
          // setMyTeacherId(data.data.teacherId)
          // data.data._id && navigate(`/my-groups/${data.data._id}`)
          console.log(data);
        } else {
          setErrorMsg("Error");
        }
      });
  };

  return (
    <>
      Add new text
      <form onSubmit={handleSubmit}>
        <label>Text Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="New text"></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddText;
