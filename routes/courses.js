// ----------TESTING SCHEMA ----------
const express = require("express");
const router = express.Router();
// require the model
const Course = require("../models/Course");

router.get("/",async(req,res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({message: err});
    }
});


router.get("/:courseID", async (req,res) => {
    try{
        const id = req.params.courseID;
        const course = await Course.findById(id);
        if(course){
                res.status(200).json(course);
            } else{
                res.status(404).json({message: "No valid entry found"});
            }
        }   catch (err) {
            res.status(500).json({message:err});
        }
});



router.post("/", async(req,res) => {
    const mycourse = new Course({
        course: req.body.course,
        tag:req.body.tag
    });
    try{
        const savedCourse = await mycourse.save();
        res.status(201).json({
            message: "post success",
            createdCourse: savedCourse
            });
        }
        catch(err) {
        res.status(500).json({message: err});
        }
}); 

router.patch("/:courseId", async (req, res) => {
    try {
      const id = req.params.courseId;
      const updatedCourse = await Course.updateOne(
        { _id: id },
        {
          $set: { course: req.body.course,
                 tag:req.body.tag  
        }
        }
      );
      res.status(200).json(updatedCourse);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });

  router.delete("/:courseId", async (req, res) => {
    try {
      const id = req.params.courseId;
      const removedCourse = await Course.deleteOne({ _id: id });
      res.status(200).json(removedCourse);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });


module.exports = router;