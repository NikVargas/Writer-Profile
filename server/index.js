const express = require("express");
const morgan = require("morgan");

const {
  addTeacher,
  getTeachers,
  getTeacherById,
  getTeacherByEmail,
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
} = require("./handlers");

const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(express.json())

  .disable("etag")

  //REST endpoints
  //test
  .get("/", (req, res) => {
    res.send("Hello world!");
  })

  //TEACHER ENDPOINTS
  //Add teacher
  .post("/add-teacher", addTeacher)
  //get all the teachers
  .get("/teachers", getTeachers)
  // get a specific teacher
  .get("/teachers/:_id", getTeacherById)

  .get("/teacher/login", getTeacherByEmail)
  //Update teacher
  .patch("/teachers/:_id", updateTeacherById)
  // Delete specific teacher
  .delete("/teachers/:_id", deleteTeacherById)

  //GROUPS ENDPOINTS
  //Create new group
  .post("/add-group", addGroup)
  //get all the groups
  .get("/groups", getGroups)
  // get a specific group
  .get("/groups/:_id", getGroupById)
  //Update group
  .patch("/groups/:_id", updateGroupById)
  // Delete specific group
  .delete("/groups/:_id", deleteGroupById)

  //STUDENTS ENDPOINTS
  //Add student
  .post("/add-student", addStudent)
  //get all the students
  .get("/students", getStudents)
  // get a specific student
  .get("/students/:_id", getStudentById)
  //Update student profile
  .patch("/students/:_id", updateStudentById)
  //delete specific student
  .delete("/students/:_id", deleteStudentById)

  //HOMEWORKS ENDPOINTS
  // add a homework
  .post("/add-text", addText)
  //get all Texts
  .get("/texts", getTexts)
  //get a specific Text
  .get("/texts/:_id", getTextById)
  // update specific Text
  .patch("texts/:_id", updateTextById)
  //delete a specific Text
  .delete("/texts/:_id", deleteTextById)

  //RESULTS ENDPOINTS
  // add a result
  .post("/add-result", addResult)
  //get all results
  .get("/results", getResults)
  //get a specific result
  .get("/results/:_id", getResultById)
  // update specific result
  .patch("results/:_id", updateResultById)
  //delete a specific result
  .delete("/results/:_id", deleteResultById)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
