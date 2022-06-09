"use strict";

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const addTeacher = async (req, res) => {
try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const newTeacher = {
        firstName : req.body.firstName, 
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        groups: []
    }
    const alreadyUser = await db.collection("Teachers").findOne({ email: req.body.email });
    alreadyUser ? res.status(400).json({
        status: 400,
        message: "This email is already associated to an user."
    }) : await db.collection("Teachers").insertOne(newTeacher);
        res.status(200).json({
        status: 200,
        data: newTeacher,
        message: "Congratulations! Your account was created.",
    })
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const getTeachers = async (req,res) =>{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const teachers = await db.collection("Teachers").find().toArray();
    res.status(200).json({
        status: 200,
        data: teachers
    });
}

const getTeacherByEmail = async (req,res) =>{
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("Writer_Profile");
        const { email } = req.query;
        const isUser = await db.collection("Teachers").findOne({ email });
        isUser ? res.status(200).json({
            status: 200,
            data: isUser,
            message: "Welcome back!"
        }) 
        : res.status(400).json({
            status: 400,
            message: "User don't exist. Please create an account."
        })
        client.close()
    } catch (err) {
        console.log(err);
    }
}

const getTeacherById = async (req,res) =>{
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
         const teacherId = req.params._id;
         const db = client.db("Writer_Profile");
        const teacher = await db.collection("Teachers").findOne( {_id: ObjectId(teacherId) } );
        !teacher ? res.status(400).json({
            status: 400,
            message: "This email is already associated to an user."
        }) : res.status(200).json({
            status: 200,
            teacherId,
            data: teacher,
        })
        client.close()
    } catch (err) {
        console.log(err);
      } 
}

const updateTeacherById = async (req,res) =>{
    
}

const deleteTeacherById = async (req,res) =>{
    
}

const addGroup = async (req,res) =>{
    try {
       const { groupName, teacherId} = req.body
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();
        const db = client.db("Writer_Profile");
        const newGroup = await db.collection("Groups").insertOne({ groupName: req.body.groupName
        });
        await db.collection("Teachers").updateOne({ _id: ObjectId(teacherId)}, { $push: { groups: newGroup.insertedId } });
            res.status(200).json({
            status: 200,
            data: newGroup, 
            message: "Your group was created.",
        })
        client.close();
      } catch (err) {
        console.log(err);
      }
}

const getGroups = async (req,res) =>{
    
}

const getGroupById = async (req,res) =>{
    
}

const updateGroupById = async (req,res) =>{
    
}

const deleteGroupById = async (req,res) =>{
    
}

const addStudent = async (req,res) =>{

}

const getStudents = async (req,res) =>{
    
}

const getStudentById = async (req,res) =>{
    
}

const updateStudentById = async (req,res) =>{
    
}

const deleteStudentById = async (req,res) =>{
    
}

const addHomework = async (req,res) =>{

}

const getHomeworks = async (req,res) =>{
    
}

const getHomeworkById = async (req,res) =>{
    
}

const updateHomeworkById = async (req,res) =>{
    
}

const deleteHomeworkById = async (req,res) =>{
    
}

const addResult = async (req,res) =>{

}

const getResults = async (req,res) =>{
    
}

const getResultById = async (req,res) =>{
    
}

const updateResultById = async (req,res) =>{
    
}

const deleteResultById = async (req,res) =>{
    
}






module.exports = {
    addTeacher,
    getTeachers,
    getTeacherByEmail,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    addGroup,
    getGroups,
    getGroupById,
    updateGroupById,
    deleteGroupById,
    addStudent,
    getStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    addHomework,
    getHomeworks,
    getHomeworkById,
    updateHomeworkById,
    deleteHomeworkById,
    addResult,
    getResults,
    getResultById,
    updateResultById,
    deleteResultById,
};