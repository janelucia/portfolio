export type Commit = {
  sha: string;
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

export type Commits = {
  items: Commit[];
};

export type Repo = {
  id: number;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  };
  name: string;
  updated_at: string;
  html_url: string;
  homepage: string;
};
