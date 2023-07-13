import { format } from 'date-fns';
import localCN from 'date-fns/locale/zh-CN';

export function formatToDate(date: number | Date | string): string {
  let newDate: Date;
  if (typeof date === 'number' || typeof date === 'string') {
    newDate = new Date(date);
  } else {
    newDate = date;
  }

  return format(newDate, 'yyyy年M月d日', {
    locale: localCN,
  });
}

export function formatToDateTime(date: number | Date | string): string {
  let newDate: Date;
  if (typeof date === 'number' || typeof date === 'string') {
    newDate = new Date(date);
  } else {
    newDate = date;
  }
  return format(newDate, 'yyyy年M月d日 HH时mm分 cccc', {
    locale: localCN,
  });
}