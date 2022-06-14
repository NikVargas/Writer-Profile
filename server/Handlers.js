"use strict";

const { MongoClient, ObjectId } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//TEACHERS
const addTeacher = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const newTeacher = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      groups: [],
      students: [],
      texts: [],
    };
    const alreadyUser = await db.collection("Teachers").findOne({
      email: req.body.email,
    });
    alreadyUser
      ? res.status(400).json({
          status: 400,
          message: "This email is already associated to an user.",
        })
      : await db.collection("Teachers").insertOne(newTeacher);
    res.status(200).json({
      status: 200,
      data: newTeacher,
      message: "Congratulations! Your account was created.",
    });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const getTeachers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Writer_Profile");
  const teachers = await db.collection("Teachers").find().toArray();
  client.close();
  res.status(200).json({
    status: 200,
    data: teachers,
  });
};
//to log in
const getTeacherByEmail = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const { email } = req.query;
    const isUser = await db.collection("Teachers").findOne({ email });
    isUser
      ? res.status(200).json({
          status: 200,
          data: isUser,
          message: "Welcome back!",
        })
      : res.status(400).json({
          status: 400,
          message: "User don't exist. Please create an account.",
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const getTeacherById = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const teacherId = req.params._id;
    const db = client.db("Writer_Profile");
    const teacher = await db.collection("Teachers").findOne({
      _id: ObjectId(teacherId),
    });
    !teacher
      ? res.status(400).json({
          status: 400,
          message: "Not found.",
        })
      : res.status(200).json({
          status: 200,
          teacherId,
          data: teacher,
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const updateTeacherById = async (req, res) => {};

const deleteTeacherById = async (req, res) => {};
//GROUPS
const addGroup = async (req, res) => {
  try {
    const { teacherId } = req.body;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const newGroup = {
      groupName: req.body.groupName,
      teacherId: req.body.teacherId,
      students: [],
    };
    await db.collection("Groups").insertOne(newGroup);
    await db.collection("Teachers").updateOne(
      {
        _id: ObjectId(teacherId),
      },
      { $push: { groups: newGroup._id } }
    );
    res.status(201).json({
      status: 200,
      data: newGroup,
      message: "Your group was created.",
    });
    client.close();
  } catch (err) {
    console.log(err);
  }
};
//get groups by teacher
const getGroups = async (req, res) => {
  const { teacherId } = req.query;
  console.log("teacherId groups", teacherId);
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Writer_Profile");
  const groups = await db.collection("Groups").find({ teacherId }).toArray();
  client.close();
  res.status(200).json({
    status: 200,
    data: groups,
  });
};

const getGroupById = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const groupId = req.params._id;
    const db = client.db("Writer_Profile");
    const group = await db.collection("Groups").findOne({
      _id: ObjectId(groupId),
    });
    !group
      ? res.status(400).json({
          status: 400,
          message: "Not found.",
        })
      : res.status(200).json({
          status: 200,
          groupId,
          data: group,
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};
//UPDATE TEXT BETWEEN STUDENTS AND GROUPS
const updateGroupById = async (req, res) => {



};

const deleteGroupById = async (req, res) => {};
//STUDENTS
const addStudent = async (req, res) => {
  try {
    const { groupId, teacherId } = req.body;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      group: groupId,
      teacher: teacherId,
      texts: [],
      results: [],
    };
    const newStudent = await db.collection("Students").insertOne(student);
    await db.collection("Groups").updateOne({ _id: ObjectId(groupId) },{ $push: { students: newStudent.insertedId } }
      );
    newStudent
      ? res.status(200).json({
          status: 200,
          data: student,
          message: "Student added.",
        })
      : res.status(400).json({
          status: 400,
          message: "Error",
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};
//get students by group
const getStudents = async (req, res) => {
  const { groupId } = req.query;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Writer_Profile");
  const students = await db
    .collection("Students")
    .find({ group: groupId })
    .toArray();
  students
    ? res.status(200).json({
        status: 200,
        data: students,
      })
    : "";
};
const getStudentById = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const studentId = req.params._id;
    const db = client.db("Writer_Profile");
    const student = await db.collection("Students").findOne({_id: ObjectId(studentId)});
    !student
      ? res.status(400).json({
          status: 400,
          message: "Not found.",
        })
      : res.status(200).json({
          status: 200,
          data: student,
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const getStudentByEmail = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const { email } = req.query;
    const isUser = await db.collection("Students").findOne({ email });
    isUser
      ? res.status(200).json({
          status: 200,
          data: isUser,
          message: "Welcome back!",
        })
      : res.status(400).json({
          status: 400,
          message: "Please contact your teacher.",
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};

const updateStudentById = async (req, res) => {

};

const deleteStudentById = async (req, res) => {};

//texts to the collection, update teacher and studentss texts
const addText = async (req, res) => {
  try {
    const { teacherId } = req.body;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Writer_Profile");
    const newText = {
      title: req.body.title,
      teacherId: req.body.teacherId,
    };
    await db.collection("Texts").insertOne(newText);
    await db.collection("Teachers").updateOne({ _id: ObjectId(teacherId),}, { $push: { texts: newText._id } });
    await db.collection("Students").updateMany({ teacher: teacherId },{ $push: { texts: {textId: newText._id, id: ObjectId(), Title: newText.title } } });
    res.status(200).json({
      status: 200,
      data: newText,
      message: "Your text was created.",
    });
    client.close();
  } catch (err) {
    console.log(err);
  }
};
//get text by teacher
const getTexts = async (req, res) => {
  const { teacherId } = req.query;
  console.log("teacherId groups", teacherId);
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Writer_Profile");
  const texts = await db.collection("Texts").find({ teacherId }).toArray();
  client.close();
  res.status(200).json({
    status: 200,
    data: texts,
  });
};


const getTextById = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const textId = req.params._id;
    const db = client.db("Writer_Profile");
    const text = await db.collection("Texts").findOne({
      _id: ObjectId(textId),
    });
    await db.collection("Texts").findOne({
      _id: ObjectId(textId),
    });
    !text
      ? res.status(400).json({
          status: 400,
          message: "Not found.",
        })
      : res.status(200).json({
          status: 200,
          data: text,
        });
    client.close();
  } catch (err) {
    console.log(err);
  }
};
//update student text 
const updateTextById = async (req, res) => {

};

const deleteTextById = async (req, res) => {};

const addResult = async (req, res) => {};

const getResults = async (req, res) => {};

const getResultById = async (req, res) => {};

const updateResultById = async (req, res) => {};

const deleteResultById = async (req, res) => {};

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
  getStudentByEmail,
  updateStudentById,
  deleteStudentById,
  addText,
  getTexts,
  getTextById,
  updateTextById,
  deleteTextById,
  addResult,
  getResults,
  getResultById,
  updateResultById,
  deleteResultById,
};
