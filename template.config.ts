import Config from './config';

const config: Config = {
  render: 'static',
  header: null,
  body: {
    sections: [
      //   { plugins:['github'],
      //     template: 'Rain',
      //     data: {
      //       title: 'Top Contributors',
      //       description:
      //         'Meet our contributors who believe in the notion that open source brings the best out in people. Join us in building the future with open source.',

      //     },
      //     dynamicData:()=>{tiles:},
      //     dataMaps:{title:'github:function:key'}
      //   },
      {
        template: 'RainyCoral',
        data: {
          title: 'Top Projects',
          description:
            'Meet our contributors who believe in the notion that open source brings the best out in people. Join us in building the future with open source.',
          tiles: [],
        },
      },
    ],
  },
  footer: null,
  pages: [{}],
};

export default config;
