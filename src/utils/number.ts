const floatRegexp = /^[0-9]+\.?[0-9]+$/;
const divideThousandRegexp = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

export const addThousandSeparator = (target: number) => {
  return target.toString().replace(divideThousandRegexp, ',');
};

export const checkIsNumber = (target: string) => {
  return floatRegexp.test(target);
};
