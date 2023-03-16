export type BlogConfig = {
  dirPaths: Array<string>;
};

export interface BlogServiceSchema {
  blogs?: BlogConfig;
}
