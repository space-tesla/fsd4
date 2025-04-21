const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const courseRoutes = require("./routes/courses");
const enrollmentRoutes = require("./routes/enrollments");

app.use("/courses", courseRoutes);
app.use("/enroll", enrollmentRoutes);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
    console.log(`eLearning System running at http://localhost:${port}/`);
});
