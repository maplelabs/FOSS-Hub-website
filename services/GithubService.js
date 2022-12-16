import Axios from 'axios'
import fs from 'fs'
import path from 'path'
import { orgsName } from '../maplelabs.config'
const COLORS=[
    {bg:'F8C02F',fg:'4E2E07'},
    {bg:'0362A7',fg:'FFF'},
    {bg:'FE345A',fg:'FFF'}
]

class GithibService {
    baseURL='https://api.github.com'
   // orgs='maplelabs'
    axios
    constructor(){
        this.axios=Axios.create({
            headers:{Authorization: process.env.GITHUB_API}
        })
    }

    async fetchProjects(getExtras=true){
        const {data} = await this.axios.get(`${this.baseURL}/orgs/${orgsName}/repos`)
        const repositories = data.filter((repo) =>
            repo.fork === false 
        ).filter((data)=> data.topics.length).sort((a, b) => new Date(b.pushed_at) > new Date(a.pushed_at) ? 1 : -1);
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
        const data= await this.fetchProjects(false);
        const [repos,topFive] = await Promise.all([this.fetchFeaturedProjects(data),this.fetchTopFiveContributors(data)])
        return [repos,topFive]

    }

    async fetchFeaturedProjects(projects){
        const repositories = projects.filter((repo) =>
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
        return repos
    }

    async fetchContributors(repository) {
        const {data} = await this.axios.get(`${this.baseURL}/repos/${orgsName}/${repository}/contributors?q=contributions&order=desc`)
        data.forEach(i => i._repo = [repository])
        return data;
    }

    async fetchLanguages(url) {
        const {data} = await this.axios.get(url)
        return Object.keys(data);
    }

    async fetchUserName(url){
        const {data} = await this.axios.get(url)
        return data.name
    }

    async fetchTopFiveContributors(projects) {
        let contributors=[]
        const contribs = await Promise.all(projects.map(async (repo,i) => {
            return await this.fetchContributors(repo.name)
        }))
        contribs.forEach(item =>contributors.push(...item))

        const combinedContributors = contributors.reduce((obj, item) => {
            obj[item.id] ? (obj[item.id].contributions = (obj[item.id].contributions + item.contributions), obj[item.id]._repo.push(...item._repo)) : (obj[item.id] = { ...item });
            return obj;
        }, {});
    
        contributors = [...Object.values(combinedContributors)].sort((a, b) => b.contributions - a.contributions).slice(0, 5);

        let topFive=await Promise.all(contributors.map(async (data) => {
            const name = await this.fetchUserName(data.url)
            return {...data, name}
        }))
        return topFive  
    }
 
    async readHomePageData(){
        try{
            const readFile = fs.readFileSync(path.join(process.cwd(),`cache/gitHub.json`), 'utf-8');
            const {repos , topFive} =JSON.parse(readFile).data
            var date = new Date(JSON.parse(readFile).timestamp);
            var now = new Date();
            var diffInMS = now - date;
            var msInHour = Math.floor(diffInMS/1000/60);
            if (msInHour < 5) {
                console.log('Within 5min');
            } else {
                this.getHomePageData()
            }
            return [repos, topFive,JSON.parse(readFile).timestamp]
        }
        catch(e){
            return await this.getHomePageData()
        }
    }
}
export default new GithibService()