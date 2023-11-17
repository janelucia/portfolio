export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const repo = await $fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${config.githubPat}`,
    },
    params: {
      affiliation: 'owner',
    },
  });

  const user = await $fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${config.githubPat}`,
    },
  });

  return repo;
});
