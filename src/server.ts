import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json({ data: "acessou ads 2" });
});

app.listen(3333);
