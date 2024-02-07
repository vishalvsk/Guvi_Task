//Design database for Zen class programme
// 1.Insert to Users Collection:
db.users.insertMany([
  {
    userId: 1,
    name: "Devan",
    email: "devan@gmail.com",
    mobile: "9500329375",
  },
  {
    userId: 2,
    name: "Mohan",
    email: "mohan@gmail.com",
    mobile: "9533849377",
  },
  {
    userId: 3,
    name: "Dinesh",
    email: "dinesh@gmail.com",
    mobile: "9578667987",
  },
  {
    userId: 4,
    name: "Santhosh",
    email: "Santhosh@gmail.com",
    mobile: "9876543210",
  },
]);

// 2.Insert to codekata collection:
db.codekata.insertMany([
  {
    userId: 1,
    problemsSolved: 200,
    rank: 40000,
    geekscoins: 4800,
  },
  {
    userId: 2,
    problemsSolved: 300,
    rank: 20000,
    geekscoins: 7800,
  },
  {
    userId: 3,
    problemsSolved: 250,
    rank: 30000,
    geekscoins: 6800,
  },
  {
    userId: 4,
    problemsSolved: 100,
    rank: 50000,
    geekscoins: 2800,
  },
]);
// 3.Insert to attendance collection:
db.attendance.insertMany([
  {
    userId: 1,
    date: new Date("2020-10-15"),
    status: "absent",
  },
  {
    userId: 2,
    date: new Date("2020-10-15"),
    status: "present",
  },
  {
    userId: 3,
    date: new Date("2020-10-15"),
    status: "absent",
  },
  {
    userId: 4,
    date: new Date("2020-10-15"),
    status: "present",
  },
]);

// 4.Insert to topics collection:
db.topics.insertMany([
  {
    topic_id: 1,
    topic_name: "Javascript-functions",
    tasks: ["arrow-functions", "inline-functions", "IIFE"],
    date: new Date("2020-10-15"),
  },
  {
    topic_id: 2,
    topic_name: "Javascript-variables",
    tasks: ["var", "let"],
    date: new Date("2020-10-15"),
  },
  {
    topic_id: 3,
    topic_name: "Javascript-events",
    tasks: ["event-bubbling", "event-listeners"],
    date: new Date("2020-10-15"),
  },
  {
    topic_id: 4,
    topic_name: "mysql-crud",
    tasks: ["create-table", "update-table", "insert"],
    date: new Date("2020-10-15"),
  },
  {
    topic_id: 5,
    topic_name: "mongo",
    tasks: ["find", "aggregate"],
    date: new Date("2020-10-15"),
  },
]);
// 5.Insert to drives collection:
db.drives.insertMany([
  {
    drive_id: 1,
    drive_name: "google",
    user_ids: [1, 2, 3, 4],
    date: new Date("2020-10-15"),
  },
  {
    drive_id: 2,
    drive_name: "hotstar",
    user_ids: [1, 2, 3, 4],
    date: new Date("2020-10-15"),
  },
  {
    drive_id: 3,
    drive_name: "microsoft",
    user_ids: [3, 4],
    date: new Date("2020-10-25"),
  },
  {
    drive_id: 4,
    drive_name: "amazon",
    user_ids: [1, 2, 3],
    date: new Date("2020-10-30"),
  },
  {
    drive_id: 5,
    drive_name: "redbus",
    user_ids: [1, 2, 3, 4],
    date: new Date("2020-09-15"),
  },
]);

// 6.Insert to mentors collection:
db.mentors.insertMany([
  {
    mentor_id: 5,
    mentee_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    mentor_id: 6,
    mentee_ids: [1, 2, 3, 4],
  },
  {
    mentor_id: 7,
    mentee_ids: [1, 2, 3],
  },
  {
    mentor_id: 8,
    mentee_ids: [1],
  },
  {
    mentor_id: 9,
    mentee_ids: [1, 2, 3, 4, 5, 6, 7, 8],
  },
]);

// 7.Insert to tasks collection:
db.tasks.insertMany([
  {
    user_id: 1,
    task_name: "TV application design",
    date: new Date("2020-10-15"),
    submission_date: new Date("2020-10-21"),
  },
  {
    user_id: 2,
    task_name: "TV application design",
    date: new Date("2020-10-15"),
    submission_date: new Date("2020-11-15"),
  },
  {
    user_id: 3,
    task_name: "TV application design",
    date: new Date("2020-10-15"),
    submission_date: new Date("2020-11-15"),
  },
  {
    user_id: 4,
    task_name: "TV application design",
    date: new Date("2020-10-15"),
    submission_date: new Date("2020-11-15"),
  },
  {
    user_id: 5,
    task_name: "TV application design",
    date: new Date("2020-10-15"),
    submission_date: new Date("2020-11-15"),
  },
]);
