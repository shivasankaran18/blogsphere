
import { Hono } from 'hono'
import {sign,verify} from "hono/jwt";
import secret from "./Secret"
import userRouter from "./routes/user";
import blogRouter from "./routes/blog"
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>()

app.use("/*",cors());

app.route("/api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);






export default app