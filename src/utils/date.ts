export const historyItemDateFormat = (targetDate: Date) => {
  const date =
    targetDate.getFullYear() + '-' + (targetDate.getMonth() + 1).toString().padStart(2, '0') + '-' + targetDate.getDate().toString().padStart(2, '0');
  const hour = (targetDate.getHours() > 12 ? 'PM ' : 'AM ') + (targetDate.getHours() % 12 || 12).toString().padStart(2, '0');
  const minutes = targetDate.getMinutes().toString().padStart(2, '0');

  return date + ', ' + hour + ':' + minutes;
};
