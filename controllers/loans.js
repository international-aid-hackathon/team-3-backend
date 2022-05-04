import { Loan } from "../models/loan.js";

const getAllLoans = async (req, res) => {
  try {
    Loan.find().then((loan) => {
      res.json({ status: 200, loan: loan });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLoan = async (req, res) => {
  try {
    const newLoan = await Loan.create(req.body);
    return res.json({ status: 201, newLoan: newLoan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const loanDoc = await Loan.findById(id).populate("users");
    return res.json(loanDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const loanDoc = await Loan.findById(id);
    const updateLoan = await loanDoc.updateOne(req.body);
    const savedLoan = await loanDoc.save();
    return res.json({status: 200, savedLoan});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteLoan = async (req, res) => {
    try {
      const { id } = req.params;
      const loanDoc = await Loan.deleteOne({id});
      return res.json({status: 200,loanDoc});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export { getAllLoans, getSingleLoan, createLoan, updateLoan, deleteLoan };
