//1)Find all the topics and tasks which are thought in the month of October

db.topics
  .aggregate([
    {
      $project: {
        topic_name: 1,
        date: "$date",
        month: {
          $month: "$date",
        },
        year: {
          $year: "$date",
        },
      },
    },
    {
      $match: {
        month: 10,
        year: 2020,
      },
    },
    {
      $project: {
        topic_name: 1,
        date: 1,
      },
    },
  ])
  .pretty();

//2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives
  .aggregate([
    {
      $project: {
        drive_name: "$dirve_name",
        date: 1,
        day: { $dayOfMonth: "$date" },
        month: { $month: "$date" },
        year: { $year: "$date" },
      },
    },
    {
      $match: {
        year: {
          $eq: 2020,
        },
        month: {
          $eq: 10,
        },
        day: {
          $gte: 15,
          $lte: 31,
        },
      },
    },
    {
      $project: {
        drive_name: 1,
        date: 1,
      },
    },
  ])
  .pretty();

//3) Find all the company drives and students who are appeared for the placement.
db.drives
  .aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user_ids",
        foreignField: "userdId",
        as: "res",
      },
    },
  ])
  .pretty();

//4) Find the number of problems solved by the user in codekata
db.codekata
  .aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userdId",
        as: "user_details",
      },
    },
    {
      $project: {
        name: "$user_details.name",
        problems_solved: "$problemsSolved",
      },
    },
  ])
  .pretty();

//5) Find all the mentors with who has the mentee's count more than 15
db.mentors
  .aggregate([
    {
      $lookup: {
        from: "users",
        localField: "mentor_id",
        foreignField: "userdId",
        as: "mentor_details",
      },
    },
    {
      $project: {
        mentor_name: "$mentor_details.name",
        mentees_count: {
          $size: "$mentee_ids",
        },
      },
    },
    {
      $match: {
        mentees_count: {
          $gte: 15,
        },
      },
    },
  ])
  .pretty();

//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance
  .aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "userId",
        foreignField: "user_id",
        as: "userTasks",
      },
    },
    {
      $match: {
        "userTasks.submission_date": {
          $gte: ISODate("2020-10-15T00:00:00Z"),
          $lte: ISODate("2020-11-01T00:00:00Z"),
        },
        status: "absent",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userdId",
        as: "userDetails",
      },
    },
    {
      $project: {
        userDetails: {
          $arrayElemAt: ["$userDetails", 0],
        },
        taskDetails: {
          $arrayElemAt: ["$userTasks", 0],
        },
        status: 1,
      },
    },
    {
      $project: {
        Name: "$userDetails.name",
        "Task Name": "$taskDetails.task_name",
        status: 1,
        "Submission date": "$taskDetails.submission_date",
      },
    },
  ])
  .pretty();
