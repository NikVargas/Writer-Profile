import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AddGroup from "../Groups/AddGroup";

const Groups = () => {
  const teacher = localStorage.getItem("teacherId");
  const [groups, setGroups] = useState();

  const [addGroupForm, setAddGroupForm] = useState(false);
  const addGroupsForm = () => {
    setAddGroupForm(!addGroupForm);
  };
  //    console.log(teacher)
  //get teacher's groups
  useEffect(() => {
    fetch(`/groups?teacherId=${teacher}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("groups by teacher", data.data)
        setGroups(data.data);
        // console.log(d)
      });
  }, [teacher]);

  return (
    <>
      {groups
        ? groups.map((group) => {
            return (
              <>
                <Link to={`/groups/${group._id}`}>
                  <Div>{group.groupName}</Div>
                </Link>
              </>
            );
          })
        : "loading"}
      <button onClick={addGroupsForm}>Add group </button>
      {addGroupForm && <AddGroup />}
    </>
  );
};

const Div = styled.div`
  padding: 10px;
`;

export default Groups;
