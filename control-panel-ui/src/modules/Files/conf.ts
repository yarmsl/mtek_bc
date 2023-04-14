import { formatBytes } from '~/lib/formatBytes';
import { formatDate } from '~/lib/formatDate';

export const filesKinds: (keyof IFilesKinds)[] = [
  'partsList',
  'companyCard',
  'companyPres',
  'companyDetails',
];

const getKindName = (kind: string): string => {
  switch (kind) {
    case 'companyCard':
      return 'Карточка предприятия';
    case 'companyDetails':
      return 'Реквизиты компании';
    case 'companyPres':
      return 'Презентация компании';
    case 'partsList':
      return 'Перечень запасных частей';
    default:
      return '';
  }
};

export const filesColumnConfig: IColumnConfig<IFile>[] = [
  {
    id: 'kind',
    title: 'Вид файла',
    render: (value) => getKindName(`${value}`),
  },
  {
    id: 'originalname',
    title: 'Имя файла',
  },
  {
    id: 'size',
    title: 'Размер файла',
    render: (value) => formatBytes(+value),
  },
  {
    id: 'createdAt',
    title: 'Создан',
    render: (value) => formatDate(`${value}`),
  },
  {
    id: 'updatedAt',
    title: 'Обновлен',
    render: (value) => formatDate(`${value}`),
  },
];
