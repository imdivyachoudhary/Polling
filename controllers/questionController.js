const Question = require("../models/question");
const Option = require("../models/option");

module.exports.viewAllQuestions = async (req, res) => {};

module.exports.viewQuestion = async (req, res) => {};

module.exports.createQuestion = async (req, res) => {
  try {
    if (!req.body.question) {
      return res.status(400).json({
        message: "'question' cannot be empty",
      });
    }
    let question = await Question.create({
      question: req.body.question,
    });
    return res.status(200).json({
      message: "Question created Successfully",
      question: question,
    });
  } catch (error) {
    // console.log(error);
    // return res.send(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.createOption = async (req, res) => {};

module.exports.deleteQuestion = async (req, res) => {};
