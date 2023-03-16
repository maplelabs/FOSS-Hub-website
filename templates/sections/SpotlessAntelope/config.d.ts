export interface SpotlessAntelopeProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  button: {
    text: string;
    url: string;
  };
  image: {
    url: string;
  };
}

export interface SpotlessAntelopeSchema {
  id: string;
  template: 'SpotlessAntelope';
  data?: Partial<SpotlessAntelopeProps>;
  dynamicData?: (context = {}) => Promise<Partial<SpotlessAntelopeProps>>;
}
