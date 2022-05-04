import { Job } from "../models/job.js";

const index = (req, res) => {
  Job.find({})
    .populate("user")
    .then((job) => res.json(job))
    .catch((error) => {
      return res.json({ error: error.message });
    });
};

const show = (req, res) => {
  req.body.user = req.user.profile;
  Job.findById(req.params.id, (err, foundJob) => {
    if (err) {
      console.log("Error in jobs#show:", err);

      if (!foundJobs)
        return res.json({
          message: "There is no job with this ID in the db.",
        });

      return res.send("Incomplete job#show controller function");
    }

    res.status(200).json({
      job: foundJob,
    });
  });
};

const create = (req, res) => {
  req.body.user = req.user.profile;
  Job.create(req.body)
  .then(job => {
	Job.findById({ _id : job._id })
	.populate("user")
	.then(job => res.json(job))
  })
};

const update = (req, res) => {
  Job.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedJob) => {
      if (err) {
        console.log("Error in job#update:", err);

        return res.send("Incomplete job#update controller function");
      }

      res.status(200).json({
        updatedJob,
      });
    }
  );
};

const destroy = (req, res) => {
  Job.findByIdAndDelete(req.params.id, (err, deletedJob) => {
    if (err) {
      console.log("Error in jobs#destroy:", err);

      return res.send("Incomplete jobs#destroy controller function");
    }

    res.status(200).json({
      deletedJob,
    });
  });
};

export { index, show, create, update, destroy };
