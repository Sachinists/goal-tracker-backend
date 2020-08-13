import app from "./app";
import logger from "./services/logger";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Application successfully running at PORT: ${PORT}`);
});
