import { getCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from "http";
import { ParsedUrlQuery } from "querystring";
import { getUserSeq } from "../apis/auth";

export const checkAuthentication = async (
  query: ParsedUrlQuery,
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>,
) => {
  const token = getCookie("token", { req, res }) as string;
  const currentUserSeq = await getUserSeq(token);

  if (currentUserSeq !== Number(query.userseq)) {
    return false;
  } else {
    return true;
  }
};
