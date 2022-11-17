export const getDateDiff = (d1: string) => {
  const date1 = new Date(d1);
  const date2 = new Date();

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};
