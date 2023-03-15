const divideThousandRegexp = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

export const addThousandSeparator = (target: number) => {
  return target.toString().replace(divideThousandRegexp, ',');
};
