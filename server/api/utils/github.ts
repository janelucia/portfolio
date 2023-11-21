import { H3Event } from 'h3';

export function useGithubApi(event: H3Event) {
  const config = useRuntimeConfig(event);

  if (!config.githubPat) {
    throw new Error('Missing githubPat in runtime config');
  }

  return $fetch.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `Bearer ${config.githubPat}`,
      'X-GitHub-Api-Version': '2022-11-28',
      Accept: 'application/vnd.github+json',
    },
  });
}
