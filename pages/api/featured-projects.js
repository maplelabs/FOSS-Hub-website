// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch("https://api.github.com/orgs/maplelabs/repos")
  const data = await response.json()
  const repository = data.filter((repo) =>
      repo.fork === false && (repo.topics.includes('featured') || repo.topics.includes('contributions-welcome'))
  ).sort((a, b) => new Date(b.pushed_at) > new Date(a.pushed_at) ? 1 : -1);
  let repos = await Promise.all(repository.map(async (repo) => {
      const data = await fetchContributors(repo.name)
      repo['contributors'] = data
      repo['top_contributors'] = [...data].sort((a, b) => b.contributions - a.contributions).slice(0, 3);
      return repo
  }))
  
  res.status(200).json(repos)
}

async function fetchContributors(repository) {
    const response = await fetch(
        "https://api.github.com/repos/maplelabs/" + repository + "/contributors"
    )
    const data = await response.json()
    data.forEach(i => i._repo = [repository])
    return data;
}
