const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

mongoose.connect(
  "mongodb://127.0.0.1:27017/task-manager-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: "Andrew",
  age: 27,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
