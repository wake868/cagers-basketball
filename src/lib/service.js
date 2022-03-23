import graphcms from "./graphcms";
import { gql } from "graphql-request";

export async function getArticles() {
  const query = gql`
    query AllArticles {
      articles(orderBy: rank_ASC) {
        id
        slug
        title
        blurb
      }
    }
  `;

  const { articles } = await graphcms.request(query);
  return articles;
}

export async function getArticleBySlug(slug) {
  const query = gql`
  query MyQuery {
    article(where: { slug: "${slug}" }) {
      id
      title
      slug
      body {
        html
      }
      photos {
        url
        handle
      }
    }
  }
  `;

  const { article } = await graphcms.request(query);
  return article;
}
