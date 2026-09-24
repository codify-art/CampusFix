const express = require("express");

const {
  getIssues,
  createIssue,
  updateIssue,
  deleteIssue
} = require("../controllers/issueController");

const router = express.Router();

router.get("/", getIssues);

router.post("/", createIssue);

router.patch("/:id", updateIssue);

router.delete("/:id", deleteIssue);

module.exports = router;