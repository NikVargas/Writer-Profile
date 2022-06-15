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
    //console.log(teacher)
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
    <Wrapper>
      {/* display form to add groups */}
      <Button onClick={addGroupsForm}>Add group</Button>
       {addGroupForm && <AddGroup />}
       <MyGroups>
      {groups
        ? groups.map((group, i) => {
            return (
              <>
                <Link to={`/groups/${group._id}`} key={i}>
                  <Div key={i}>{group.groupName}</Div>
                </Link>
              </>
            );
          })
          //it will be change for a loadin animation in the future
        : "loading"}
      </MyGroups>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

`;

const MyGroups = styled.div`
 padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap:20px;
`;


const Div = styled.div`
 display: flex;
  justify-content: space-evenly;
  padding: 1em;
  margin: 1rem;
  border-radius: 5px;
  background: #fff;
  width: 200px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  animation: slideIn 3s;
  :hover {
  transform: rotate(-5deg);
}
`;

const Button = styled.button`
width: 100px;
border-radius: 2000px;
font-size: 1rem;
padding: 5px;
background: midnightblue;
margin-top: 10px;
box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.15);
color: white;
  cursor: pointer;
  :hover{
    background: white;
    color: midnightblue ;
  }
`;

export default Groups;
