const express = require("express");
const router = express.Router();

const courses = [
    { id: 1, name: "Node.js Basics", instructor: "Abhishek shinde" },
    { id: 2, name: "React for Beginners", instructor: "Aayush Mhaske" }
];

router.get("/", (req, res) => {
    let courseList = "<h2>Available Courses</h2><ul>";
    courses.forEach(course => {
        courseList += `<li>${course.name} by ${course.instructor} <a href="/enroll?course=${course.id}">Enroll</a></li>`;
    });
    courseList += "</ul><a href='/'>Home</a>";
    res.send(courseList);
});

module.exports = router;
