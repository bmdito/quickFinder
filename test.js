var yeet = require("./productInfo.json");
// var data = JSON.parse(yeet);
// console.log(data);
// console.log(yeet);

// console.log(yeet.testing.name);
var brandName, productName, request, query;

process.argv.length == 4 ? (brandName = process.argv[2]) : (brandName = "");

//if search is node test.js CODE search, it will set query as argv[2]
process.argv.length == 4 && process.argv[3] == "search"
  ? (query = process.argv[2])
  : (query = "");

process.argv.length == 4 ? (productName = process.argv[3]) : (productName = "");

process.argv.length > 4 ? (request = process.argv[4]) : (request = "");

// console.log(query);

// console.log(yeet);
// console.log(name);
// console.log(yeet.basalite.min);
// console.log(process.argv.length);
function commandCheck() {
  if (process.argv.length == 4 && process.argv[3] == "search") {
    codeSearch();

    // for (var [key, value] of Object.entries(yeet)) {
    //   if (value.code == "query") {
    //     console.log(value);
    //   }
    // }
    // yeet.forEach((record) =>
    //   record.code == "rw" ? console.log(record) : record
    // );
  } else if (process.argv.length == 4) {
    generalInfo();
  }
  if (request == "gen") {
    // console.log(yeet[name][product]);
    // generalInfo();
  }
  if (request == "min") {
    minOrder(name);
  }
}

function minOrder(name) {
  console.log("Minimum order quantity: " + yeet[name].min);

  console.log("you accessed min order");
}

function codeSearch() {
  //   yeet.forEach((record) =>
  //     record.code == query ? console.log(record) : record
  //   );
  //   console.log(yeet[0]);
  console.log(query);
  yeet.forEach((record) => {
    if (record.code == query) {
      console.log(record);
    }
  });
}

// Get all general info on a product by typing node test.js [BRAND] [PRODUCTNAME]
function generalInfo() {
  // finds by brand and product name
  yeet.forEach((record) => {
    if (record.brand == brandName && record.name == productName) {
      console.log(record);
    }
  });

  //finds by product name only
  yeet.forEach((record) => {
    if (record.name == productName) {
      console.log(record);
    }
  });
}

commandCheck();

// if (request == "quantity") {
//   theArg = process.argv;
//   console.log(theArg);
//   console.log("chose quantity finder");
//   console.log(yeet.name);
// }

// console.log();
