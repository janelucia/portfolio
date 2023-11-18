export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  if (!config.githubPat) {
    throw new Error('Missing githubPat in runtime config');
  }

  const repo = await $fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${config.githubPat}`,
    },
    params: {
      affiliation: 'owner',
    },
  });
  return repo;
});
