import express from "express";
import logger from "./services/logger";

import userRouter from "./routers/userRouter";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  logger.info(`Application successfully running at PORT: ${PORT}`);
});
