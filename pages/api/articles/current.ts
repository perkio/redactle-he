import type { NextApiRequest, NextApiResponse } from "next";

import prismaClient from "@caviardeul/prisma";
import { EncodedArticle, ErrorDetail } from "@caviardeul/types";
import { applyCors } from "@caviardeul/utils/api";
import {
  getArticleContent,
  getNextArticleCountdown,
} from "@caviardeul/utils/article";
import { encode, generateKey } from "@caviardeul/utils/encryption";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<EncodedArticle | ErrorDetail>
) => {
  await applyCors(req, res);
  const { method } = req;
  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${method} Not Allowed` });
    return;
  }

  const dailyArticle = await prismaClient.dailyArticle.findFirstOrThrow({
    where: {
      date: {
        lt: new Date(),
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  const nextArticleCountdown = getNextArticleCountdown();
  const result = await getArticleContent(dailyArticle.pageId);
  if (result === null) {
    res.status(503).json({ error: "L'article n'a pas été trouvé" });
    return;
  }

  const { content } = result;
  const key = generateKey();

  res.status(200);
  res.setHeader("Cache-Control", `s-maxage=${nextArticleCountdown}`);
  res.json({
    key,
    articleId: dailyArticle.id,
    safety: "SAFE",
    archive: false,
    custom: false,
    pageName: encode(dailyArticle.pageName, key),
    content: encode(content, key),
  });
};

export default handler;
