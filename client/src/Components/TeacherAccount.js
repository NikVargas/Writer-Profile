import TextHelper from "./TextHelper";


const TeacherAccount = () =>{

    return(
        <>
        <div>Avatar</div> Hi! Teacher's name
        <h1>My groups</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button>Add group </button>
        <p>Group 1</p>
        <p>Group 2</p>
        <p>Group 3</p>
        <h1>Homeworks</h1>
        {/* need enpoint and handler to create, update and delete groups DB */}
        <button>Add homework</button>
        <p>Text 1 </p>
        <p>Text 2 </p>
        <p>Text 3 </p>
        <TextHelper/>
        </>
    )
}

export default TeacherAccount;