//  Ques 1 - Find all the information about each products
db.products.find({});

//  2 . Find the product price which is between 400 to 800:
db.products.find({ product_price: { $gte: 400, $lte: 800 } });

// 3 . Find the product price which is not between 400 to 600:
db.products.find({
  $or: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 600 } }],
});

//  4.  List the four products which are greater than 500 in price:
db.products.find({ product_price: { $gt: 500 } }).limit(4);

//  5. Find the product name and product material of each product:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// 6. Find the product with a row id of 10:
db.products.findOne({ id: "10" });

// 7. Find only the product name and product material:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// 8. Find all products which contain the value "soft" in product material:
db.products.find({ product_material: { $regex: /soft/i } });

// 9. Find products which contain product color "indigo" and product price 492.00:
db.products.find({ product_color: "indigo", product_price: 492.0 });

// 10. Delete the products which have the same product price value:
db.products
  .aggregate([
    {
      $group: {
        _id: "$product_price",
        count: { $sum: 1 },
        ids: { $addToSet: "$_id" },
      },
    },
    { $match: { count: { $gt: 1 } } },
    { $unwind: "$ids" },
    { $sort: { _id: -1 } },
    { $skip: 1 },
    { $group: { _id: null, ids: { $push: "$ids" } } },
  ])
  .forEach(function (doc) {
    doc.ids.forEach(function (id) {
      db.products.remove({ _id: id });
    });
  });
