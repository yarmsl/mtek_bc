interface IFilesKinds {
  partsList: string;
  companyCard: string;
  companyPres: string;
  companyDetails: string;
}

interface IFile {
  originalname: string;
  filename: string;
  path: string;
  size: number;
  kind: keyof IFilesKinds;
  updatedAt: string;
  createdAt: string;
}
