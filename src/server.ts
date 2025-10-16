import app from "./app";
import { config } from "./app/config";
import { connectDB } from "./app/db";

connectDB();

app.listen(config.PORT, () => {
  console.log(`server is running on port : ${config.PORT}`);
});
