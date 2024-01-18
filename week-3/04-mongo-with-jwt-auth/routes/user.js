const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });

  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.json({
      msg: "wrong credentials",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username: username,
    },
    {
      "$push": { purchasedCourses: courseId },
    }
  );

  res.json({
    msg: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  const Courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses,
    },
  });

  res.json({
     courses: Courses
  });
});


module.exports = router;