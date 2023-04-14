export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
