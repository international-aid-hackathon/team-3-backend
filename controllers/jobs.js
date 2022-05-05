import { Job } from "../models/job.js";
import { User } from "../models/user.js";

const index = (req, res) => {
  Job.find({})
    .populate("user")
    .then((job) => res.json(job))
    .catch((error) => {
      return res.json({ error: error.message });
    });
};

// const show = (req, res) => {
//   req.body.user = req.user.profile;
//   Job.findById(req.params.id, (err, foundJob) => {
//     if (err) {
//       console.log("Error in jobs#show:", err);

//       if (!foundJob)
//         return res.json({
//           message: "There is no job with this ID in the db.",
//         });
//       return res.send("Incomplete job#show controller function");
//     }
//     res.status(200).json({
//       job: foundJob,
//     });
//   });
// };

//find by user
const findByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const jobDoc = await Job.find({ user: id });
    return res.json({ status: 200, jobDoc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  req.body.user = req.user.profile;
  Job.create(req.body).then((job) => {
    Job.findById({ _id: job._id })
      .populate("user")
      .then((job) => res.json(job));
  });
};

//create job with user id
// const create = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findById(id);
//     const newJob = await Job.create(req.body);
//     const job = await Job.findByIdAndUpdate(newJob._id, {
//       $push: { user: user.profile },
//     }).populate("user");
//     res.json({ job });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

//create job with user profile
// const create = async (req, res) => {
// 	const { id } = req.params;
// 	try {
// 			const user = await User.find({ profile: id });
// 			if (user) {
// 			const newJob = await Job.create(req.body);
// 			const job = await Job.findByIdAndUpdate(newJob._id, {
// 			  $push: { user: user.profile },
// 			}).populate("user");
// 			res.json({ job });
// 			console.log(id)
// 			console.log(user)
// 			console.log(user.profile)
// 			console.log(job)
// 		}
	 
// 	} catch (error) {
// 	  res.status(500).json({ error: error.message });
// 	}
//   };

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

export { index, create, update, destroy, findByUser };
