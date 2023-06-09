import { createServer } from "http";
import app from "./express";

const PORT = process.env.PORT || 5000;
const server = createServer(app);

server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
