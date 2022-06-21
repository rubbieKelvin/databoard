import {DataBookInput, DataBook} from '~/packages/types'

export const databook = (options: DataBookInput): DataBook => {
  const getData = async (): Promise<Response> => {
    const data = await fetch(options.datasource);
    return data;
  };
  return { name: options.name, getData };
};
