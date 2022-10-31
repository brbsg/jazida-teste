import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/config/database.js";
import userRepository from "../repositories/user.repository.js";
import { notFoundError, unauthorizedError } from "../utils/error-utils.js";

export async function ensureAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw unauthorizedError("Missing authorization header");
  }

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    var { userId } = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: number;
    };
  } catch {
    throw unauthorizedError("Token Expirado");
  }

  const dbSession = await prisma.session.findFirst({
    where: { token },
  });

  if (!dbSession) throw unauthorizedError("Token Expirado");

  const dbUser = await userRepository.findById(userId);
  if (!dbUser) {
    throw notFoundError("User not found");
  }

  // let newToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
  //   expiresIn: Number(process.env.JWT_EXPIRATION), //604800 = uma semana em segundos
  // });

  // await userRepository.upsertSession(newToken, userId);

  res.locals.user = dbUser;

  next();
}
