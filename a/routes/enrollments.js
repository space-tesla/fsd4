const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const courseId = req.query.course;
    if (courseId) {
        res.send(`<h2>Successfully Enrolled in Course ID: ${courseId}</h2><a href='/courses'>Back to Courses</a>`);
    } else {
        res.send("<h2>No Course Selected!</h2><a href='/courses'>Back to Courses</a>");
    }
});

module.exports = router;
