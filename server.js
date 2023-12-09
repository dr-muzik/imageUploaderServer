const app = require('./app');


const port = process.env.PORT || 8080;

// process.on("uncaughtException", (error) => {
//     console.log("Uncaught Exception: ", error.message);
//     console.log("Closing server now...");
//     process.exit(1);
//   });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  // process.on("unhandledRejection", (error) => {
  //   console.log(error);
  //   console.log("Closing server now...");
  //   server.close(() => {
  //     process.exit(1);
  //   });
  // });