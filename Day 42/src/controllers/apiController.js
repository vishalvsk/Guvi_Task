exports.getData = (req, res) => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice Smith" },
  ];
  res.json(data);
};
