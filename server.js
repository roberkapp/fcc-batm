import express from "express";
import cors from "cors";
import { dateValidator } from './helpers/dateValidator.js';
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get('/api{/:date}', (req, res) => {
  const { date } = req.params;

  const parsedDate = dateValidator(date);

  if(isNaN(parsedDate)) {
    res.status(400).json({
      error: 'Invalid Date'
    });
    return;
  }  

  const response = {
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  }

  res.status(200).json(response);
})

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
