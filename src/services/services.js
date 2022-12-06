
const getUserName = async (user) => {
    const response = await fetch(user.url)
    const data = await response.json()
    return data.name
}

async function fetchContributors(repository) {
    const response = await fetch(
        "https://api.github.com/repos/maplelabs/" + repository + "/contributors"
    )
    const data = await response.json()
    data.forEach(i => i._repo = [repository])
    data.forEach(i => i._time = new Date())
    return data;
}

async function fetchLanguages(url) {
    const response = await fetch(url)
    const data = await response.json()
    return Object.keys(data);
}

async function getRepos() {
    let repository = [];
    const response = await fetch("https://api.github.com/orgs/maplelabs/repos")
    const data = await response.json()
    data.forEach(i => i._time = new Date())
    repository = data.filter((repo) =>
        repo.fork === false
    );
    repository = repository.filter((repo)=>repo.topics.length)
    repository = ([...repository].sort((a, b) => new Date(b.pushed_at) > new Date(a.pushed_at) ? 1 : -1))
    
    if (repository.length > 0) {
        let repos = await Promise.all(repository.map(async (repo) => {
            const data = await fetchContributors(repo.name)
            repo['contributors'] = data
            repo['top_contributors'] = [...data].sort((a, b) => b.contributions - a.contributions).slice(0, 3);
            const lang = await fetchLanguages(repo.languages_url)
            repo['languages'] = lang
            return repo
        }))
        return repos;
    }

}

export async function getTopFiveContributors() {
    let repos
    let contributor = [];
    if (localStorage.getItem("repos")) {
        repos = JSON.parse(localStorage.getItem("repos"))

    } else {
        repos = await getRepos();
        localStorage.setItem('repos', JSON.stringify(repos));
    }
    repos.map((repo) => { contributor.push(...repo.contributors) })

    const combinedContributors = contributor.reduce((obj, item) => {
        obj[item.id] ? (obj[item.id].contributions = (obj[item.id].contributions + item.contributions), obj[item.id]._repo.push(...item._repo)) : (obj[item.id] = { ...item });
        return obj;
    }, {});

    contributor = [...Object.values(combinedContributors)].sort((a, b) => b.contributions - a.contributions).slice(0, 5);

    if (contributor.length === 5) {
        let topFive=await Promise.all(contributor.map(async (data) => {
            const name2 = await getUserName(data)
            return {...data, name:name2}
        }))
        return topFive;
    }
   

}
export default getRepos;