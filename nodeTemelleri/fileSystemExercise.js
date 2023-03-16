const { writeFile, readFile, appendFile, unlink } = require("node:fs");

appendFile(
  "employees.json",
  `{"name": "Employee 1 Name", "salary": 2000}`,
  "utf8",
  (err) => {
    if (err) console.log(err);
    else console.log("The file has been saved!");
    readFile("employees.json", "utf8", (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
      }
      writeFile(
        "employees.json",
        `{"name": "Employee 1 Name", "salary": 2000}`,
        (err) => {
          if (err) console.log(err);
          else console.log("The file has been updated!");
          readFile("employees.json", "utf8", (err, data) => {
            if (err) console.log(err);
            else {
              console.log(data);
            }

            unlink("employees.json", (err) => {
              if (err) console.log(err);
              else {
                console.log("The file has been deleted!");
              }
            });
          });
        }
      );
    });
  }
);
