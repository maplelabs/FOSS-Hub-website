/**
 * Files generated using template generator
 */
export interface SpotlessAntelopeProps {
  title: string;
  subtitle: string;
  description: string;
  button: {
    text: string,
    url: string
  };
  image: {
    url: string
  };
}

export interface SpotlessAntelopeSchema {
  template: 'SpotlessAntelope';
  data: Partial<SpotlessAntelopeProps>;
  dynamicData: () => Partial<SpotlessAntelopeProps>;
}