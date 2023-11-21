import { useGithubApi } from '../utils/github';

type Commit = {
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
  repository: {
    html_url: string;
    name: string;
    owner: {
      html_url: string;
      login: string;
    };
  };
  committer: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};

type Commits = {
  items: Commit[];
};

export default defineEventHandler(async (event) => {
  const username = 'janelucia';
  const githubApi = useGithubApi(event);

  const commits = await githubApi<Commits>('/search/commits', {
    query: {
      q: `author:${encodeURIComponent(username)}`,
      order: 'desc',
      sort: 'committer-date',
      per_page: 1,
    },
  });

  if (commits.items.length === 0) {
    throw createError({ statusCode: 404, message: 'No commits found' });
  }

  const latestCommit = commits.items[0];

  return {
    message: latestCommit.commit.message,
    date: latestCommit.commit.committer.date,
    committer: {
      name: latestCommit.committer.login,
      avatar_url: latestCommit.committer.avatar_url,
      html_url: latestCommit.committer.html_url,
    },
    repository: {
      html_url: latestCommit.repository.html_url,
      name: latestCommit.repository.name,
      owner: {
        name: latestCommit.repository.owner.login,
        html_url: latestCommit.repository.owner.html_url,
      },
    },
  };
});
