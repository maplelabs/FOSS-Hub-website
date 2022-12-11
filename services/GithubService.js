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
            headers:{Authorization: process.env.GITHUB_API}
        })
    }

    async fetchProjects(getExtras=true){
        const {data} = await this.axios.get(`${this.baseURL}/orgs/${this.orgs}/repos?per_page=50`)
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

    async getHomePageData(){
        const data= await this.fetchProjects();
        let contributors=[]
        const repositories = data.filter((repo) =>
        repo.topics.includes('featured') || repo.topics.includes('contributions-welcome')
        )
        const repos = await Promise.all(repositories.map(async (repo,i) => {
            this.fetchContributors(repo.name).then(data =>{
                repo['contributors'] = data;
                repo['top_contributors'] = data.slice(0, 3);
            })
            this.fetchLanguages(repo.languages_url).then(lang => {repo['languages'] = lang})
            repo['icon_url'] = `https://ui-avatars.com/api/?background=${COLORS[i%3].bg}&color=${COLORS[i%3].fg}&name=${repo.name}&size=256&font-size=0.33`
            return repo
        }))
        const contribs = await Promise.all(data.map(async (repo,i) => {
            return await this.fetchContributors(repo.name)
        }))
        contribs.forEach(item =>contributors.push(...item))

        const combinedContributors = contributors.reduce((obj, item) => {
            obj[item.id] ? (obj[item.id].contributions = (obj[item.id].contributions + item.contributions), obj[item.id]._repo.push(...item._repo)) : (obj[item.id] = { ...item });
            return obj;
        }, {});
    
        contributors = [...Object.values(combinedContributors)].sort((a, b) => b.contributions - a.contributions).slice(0, 5);

        let topFive=await Promise.all(contributors.map(async (data) => {
            const name = await this.getUserName(data.url)
            return {...data, name}
        }))

        return [repos,topFive]

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
        const {data} = await this.axios.get(`${this.baseURL}/repos/${this.orgs}/${repository}/contributors?q=contributions&order=desc`)
        data.forEach(i => i._repo = [repository])
        return data;
    }

    async fetchLanguages(url) {
        const {data} = await this.axios.get(url)
        return Object.keys(data);
    }

    async getUserName(url){
        const {data} = await this.axios.get(url)
        return data.name
    }

    async getTopFiveContributors() {
        let repos
        let contributor = [];
    
        repos = await this.fetchProjects();
        repos.map((repo) => { contributor.push(...repo.contributors) })
    
        const combinedContributors = contributor.reduce((obj, item) => {
            obj[item.id] ? (obj[item.id].contributions = (obj[item.id].contributions + item.contributions), obj[item.id]._repo.push(...item._repo)) : (obj[item.id] = { ...item });
            return obj;
        }, {});
    
        contributor = [...Object.values(combinedContributors)].sort((a, b) => b.contributions - a.contributions).slice(0, 5);
    
        if (contributor.length === 5) {
            let topFive=await Promise.all(contributor.map(async (data) => {
                const name = await this.getUserName(data.url)
                return {...data, name}
            }))
            return topFive;
        }
       
    
    }
}

export default new GithibService()