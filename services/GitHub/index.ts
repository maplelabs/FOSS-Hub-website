import Axios, { AxiosInstance } from 'axios';

import { randomIconGenerator } from '../../components/BlockIcon';
import CONFIG from '../../service.config';
import { GitHubConfig } from './config';

class GitHubService {
  baseURL = 'https://api.github.com';
  axios: AxiosInstance;
  private config: GitHubConfig;
  constructor() {
    this.axios = Axios.create({
      headers: { Authorization: process.env.GITHUB_API },
    });
    this.config = CONFIG.gitHub ?? { orgs: [] };
  }
  private projects;

  async fetchProjects({ filterCallback = () => true, filterTopics = [] } = {}) {
    this.projects = [];
    try {
      let repos = await Promise.all(
        this.config.orgs.map(async (org) => {
          let { data } = await this.axios.get(
            `${this.baseURL}/orgs/${org.name}/repos`
          );
          data = data
            ?.filter(
              (repo) =>
                !repo.fork &&
                (org.include.includes(repo.name) ||
                  !org.exclude.includes(repo.name)) &&
                (filterTopics.length
                  ? filterTopics.some((r) => repo.topics.includes(r))
                  : true)
            )
            .filter(filterCallback)
            .sort((a, b) =>
              new Date(b.pushed_at) > new Date(a.pushed_at) ? 1 : -1
            );

          return data;
        })
      );

      const repositories = repos.flat(1);
      const iconGenerator = randomIconGenerator(repositories.length);
      repos = await Promise.all(
        repositories.map(async (repo) => {
          const [contributors, languages] = await Promise.all([
            this.fetchContributors(repo.owner.login, repo.name),
            this.fetchFromGitUrl(repo.languages_url),
          ]);
          repo['contributors'] = contributors;
          repo['top_contributors'] = contributors.slice(0, 3);
          repo['languages'] = Object.keys(languages || {});
          repo['icon'] = iconGenerator.next().value;
          return repo;
        })
      );

      this.projects = repos;
      return repos;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async fetchContributors(org, repository) {
    try {
      const { data } = await this.axios.get(
        `${this.baseURL}/repos/${org}/${repository}/contributors?q=contributions&order=desc`
      );
      data?.forEach((i) => (i._repo = [repository]));
      return data;
    } catch (err) {
      return [];
    }
  }

  async fetchFromGitUrl(url) {
    try {
      const { data } = await this.axios.get(url);
      return data;
    } catch (err) {}
  }

  async fetchTopContributors(projects = [], count = 5) {
    try {
      let contributors = projects
        .map((project) => project.contributors)
        .flat(1);

      const combinedContributors = contributors.reduce((obj, item) => {
        obj[item.id]
          ? ((obj[item.id].contributions =
              obj[item.id].contributions + item.contributions),
            obj[item.id]._repo.push(...item._repo))
          : (obj[item.id] = { ...item });
        return obj;
      }, {});

      contributors = [...Object.values(combinedContributors)].sort(
        (a: { contributions }, b: { contributions }) =>
          b.contributions - a.contributions
      );
      if (this.config?.contributors?.blacklist?.length) {
        contributors = contributors.filter(
          (contributor) =>
            !this.config?.contributors?.blacklist?.includes(contributor.login)
        );
      }
      contributors = contributors.slice(0, count);
      const topContributors = await Promise.all(
        contributors.map(async (contributor) => {
          if (contributor.url) {
            const { name } = await this.fetchFromGitUrl(contributor.url);
            return { ...contributor, name };
          }
        })
      );
      return topContributors;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

export default new GitHubService();
