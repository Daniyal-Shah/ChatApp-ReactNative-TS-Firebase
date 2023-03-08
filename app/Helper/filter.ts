import moment from 'moment';
/* eslint-disable @typescript-eslint/no-unused-vars */
export const getFirstLetters = (name: String) => {
  let arr = name.split(' ');

  let firstLetter = arr[0]?.charAt(0).toUpperCase();
  let secondLetter = arr[1]?.charAt(0).toUpperCase()
    ? arr[1]?.charAt(0).toUpperCase()
    : '';

  return firstLetter + '' + secondLetter;
};

export const getTime = (date: string) => {
  let time = new Date(date);
  return time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
};

export const sortByDate = (arr: any, type: 'ASC' | 'DESC') => {
  if (type === 'ASC') {
    return arr.sort((a: any, b: any) => {
      return moment(a.sendTime).diff(b.sendTime);
    });
  } else {
    return arr.sort((a: any, b: any) => {
      return moment(b.sendTime).diff(a.sendTime);
    });
  }
};

export const sortChatByDate = (arr: any, type: 'ASC' | 'DESC') => {
  let definedDates: any = [];
  let undefinedDates: any = [];

  arr.map((item: any) => {
    if (item?.sendTime) {
      definedDates.push(item);
    } else {
      undefinedDates.push(item);
    }
  });

  if (type === 'ASC') {
    return [
      ...definedDates.sort((a: any, b: any) => {
        return moment(a.sendTime).diff(b.sendTime);
      }),
      ...undefinedDates,
    ];
  } else {
    return [
      ...definedDates.sort((a: any, b: any) => {
        return moment(b.sendTime).diff(a.sendTime);
      }),
      ...undefinedDates,
    ];
  }
};
