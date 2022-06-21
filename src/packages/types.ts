import * as constants from "./constants"

export interface DataSource {
  get: () => Promise<Response>;
  set?: () => Promise<Response>;
}

export interface DataKey {
    name: string;
    type?: constants.DataType;
    alias?: string;
    default?: any;
}

export interface DataBook {
  name: string;
  datasource: DataSource;
  displaytype?: constants.DisplayType;
}

export interface Project {
  name: string,
  pages: DataBook[],
}