export interface DataType {

}

export interface DataKey {
    name: string;
    type?: DataType;
    alias?: string;
    default?: any;
}

export interface DataBookInput {
  name: string;
  datasource: string;
}

export interface DataBook {
  name: string;
  getData: () => Promise<Response>;
}
