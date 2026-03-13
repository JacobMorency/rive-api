import app from "./app.js";

const PORT: number = 5001;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
