import Axios from 'axios'

const COLORS=[
    {bg:'F8C02F',fg:'4E2E07'},
    {bg:'0362A7',fg:'FFF'},
    {bg:'FE345A',fg:'FFF'}
]

class GithibService {
    baseURL='https://api.github.com'
    orgs='maplelabs'
    axios
    constructor(){
        this.axios=Axios.create({
        })
    }

    async fetchProjects(getExtras=true){
        const {data} = await this.axios.get(`${this.baseURL}/orgs/${this.orgs}/repos`)
        const repositories = data.filter((repo) =>
            repo.fork === false 
        ).sort((a, b) => new Date(b.pushed_at) > new Date(a.pushed_at) ? 1 : -1);
        if(getExtras){
            let repos = await Promise.all(repositories.map(async (repo,i) => {
                const data = await this.fetchContributors(repo.name)
                repo['contributors'] = data
                repo['top_contributors'] = [...data].sort((a, b) => b.contributions - a.contributions).slice(0, 3);
                const lang = await this.fetchLanguages(repo.languages_url)
                repo['languages'] = lang
                repo['icon_url'] = `https://ui-avatars.com/api/?background=${COLORS[i%3].bg}&color=${COLORS[i%3].fg}&name=${repo.name}&size=256&font-size=0.4`
                return repo
            }))
            return repos
        }
        return repositories    
    }

    async fetchFeaturedProjects(){
        const data = await this.fetchProjects(false);
        const repositories = data.filter((repo) =>
        repo.topics.includes('featured') || repo.topics.includes('contributions-welcome')
        )
        let repos = await Promise.all(repositories.map(async (repo,i) => {
            const data = await this.fetchContributors(repo.name)
            repo['contributors'] = data
            repo['top_contributors'] = [...data].sort((a, b) => b.contributions - a.contributions).slice(0, 3);
            const lang = await this.fetchLanguages(repo.languages_url)
            repo['languages'] = lang
            repo['icon_url'] = `https://ui-avatars.com/api/?background=${COLORS[i%3].bg}&color=${COLORS[i%3].fg}&name=${repo.name}&size=256&font-size=0.33`
            return repo
        }))
        return repos

    }

    async fetchContributors(repository) {
        const {data} = await this.axios.get(`${this.baseURL}/repos/${this.orgs}/${repository}/contributors`)
        data.forEach(i => i._repo = [repository])
        return data;
    }

    async fetchLanguages(url) {
        const {data} = await this.axios.get(url)
        return Object.keys(data);
    }
}

export default new GithibService()