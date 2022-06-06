"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const addTeacher = async (req,res) =>{

}

const getTeachers = async (req,res) =>{
    
}

const getTeacherById = async (req,res) =>{
    
}

const updateTeacherById = async (req,res) =>{
    
}

const deleteTeacherById = async (req,res) =>{
    
}

const addGroup = async (req,res) =>{

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