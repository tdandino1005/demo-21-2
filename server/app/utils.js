import config from "./config.js";
import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
