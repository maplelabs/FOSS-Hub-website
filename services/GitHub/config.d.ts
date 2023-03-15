export type GitHubConfig = {
  orgs: Array<Org>;
  contributors?: { blacklist?: Array<string> };
};

type Org = {
  name: string;
  include: Array<string>;
  exclude: Array<string>;
};

export interface GitHubServiceSchema {
  gitHub?: GitHubConfig;
}
