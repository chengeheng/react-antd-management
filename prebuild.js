const color = require("./scripts/color.js");
color()
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });
