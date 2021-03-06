const Sequelize = require("sequelize")
const db = require("../config/database")
const MiniTasks = require("./MiniTasks")

const Projects = db.define(
  "projects",
  {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
)

Projects.sync().then(() => {
  console.log("Projects created...")
})

module.exports = Projects
