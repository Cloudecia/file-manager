export interface File {
  id: string;
  attributes: {
    name: string;
    type: string;
    isDir: boolean;
    size: boolean | string;
    createdOn: Date | string;
    lastModifiedOn: Date | string;
  };
}
