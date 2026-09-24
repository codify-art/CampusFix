const Issue = require("../models/Issue");

// GET all issues
const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: issues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch issues"
    });
  }
};

// POST new issue
const createIssue = async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const issue = await Issue.create({
      title,
      description,
      category,
      priority
    });

    res.status(201).json({
      success: true,
      message: "Issue reported successfully",
      data: issue
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create issue"
    });
  }
};

// PATCH issue status
const updateIssue = async (req, res) => {
  try {
    const { status } = req.body;

    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Issue status updated",
      data: issue
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update issue"
    });
  }
};

// DELETE issue
const deleteIssue = async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Issue deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete issue"
    });
  }
};

module.exports = {
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue
};