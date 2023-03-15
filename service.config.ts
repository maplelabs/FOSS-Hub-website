import { ServiceConfig } from './config';

const config: ServiceConfig = {
  gitHub: {
    orgs: [
      {
        //organization name as per github
        name: 'maplelabs',
        //repositories to include
        include: [], //includes all
        //repositories to exclude
        exclude: [], //exclude none
      },
      {
        name: 'snappyflow',
        include: ['snappyflow-jenkins-plugin'],
        exclude: [],
      },
    ],
  },
  blogs: {
    dirPaths: ['blogs'],
  },
};
export default config;
