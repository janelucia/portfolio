import { useGithubApi } from "../utils/github";
import { Commits } from "~/helpers/types";

export default defineEventHandler(async (event) => {
  const username = "janelucia";
  const githubApi = useGithubApi(event);

  const commits = await githubApi<Commits>("/search/commits", {
    query: {
      q: `author:${encodeURIComponent(username)}`,
      order: "desc",
      sort: "committer-date",
      per_page: 10,
    },
  });

  if (commits.items.length === 0) {
    throw createError({ statusCode: 404, message: "No commits found" });
  }

  return commits;
});
