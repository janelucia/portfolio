export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  if (!config.githubPat) {
    throw new Error('Missing githubPat in runtime config');
  }

  const user = await $fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${config.githubPat}`,
    },
  });
  return user;
});
