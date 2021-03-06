import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import { Loan } from '../models/loan.js';
import jwt from 'jsonwebtoken'

function getAllUsers(req, res) {
  User.find().then((user) => {
    res.json({ status: 200, user: user });
  });
}

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await User.findById(id);
    return res.json(userDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDoc = await Product.deleteOne({id});
    return res.json({status: 200, userDoc});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function signup(req, res) {
  Profile.findOne({ email: req.body.email })
  .then(profile => {
    if (profile) {
      throw new Error('Account already exists')
    } else if (!process.env.SECRET){
      throw new Error('no SECRET in .env file')
    } else {
      Profile.create(req.body)
      .then(newProfile => {
        req.body.profile = newProfile._id
        User.create(req.body)
        .then(user => {
          const token = createJWT(user)
          res.status(200).json({ token })
        })
        .catch(err => {
          Profile.findByIdAndDelete(req.body.profile)
          res.status(500).json({err: err.errmsg})
        })
      })
    }
  })
  .catch(err => {
    res.status(500).json({err: err.message})
  })
}

function login(req, res) {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) return res.status(401).json({ err: 'User not found'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        res.status(401).json({ err: 'Incorrect password' })
      }
    })
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

function changePassword(req, res) {
  User.findById(req.user._id)
  .then(user => {
    if (!user) return res.status(401).json({ err: 'User not found'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        user.password = req.body.newPw
        user.save()
        .then(()=> {
          const token = createJWT(user)
          res.json({ token })
        })
      } else {
        res.status(401).json({ err: 'Incorrect password' })
      }
    })
  })
}

/* --== Helper Functions ==-- */

function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

export {signup, login, changePassword, getAllUsers, getSingleUser, deleteUser}
