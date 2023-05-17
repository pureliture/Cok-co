export const getConvertedPrice = (price: number): string => {
  if (price) {
    return `${price.toLocaleString('ko-KR')}원`;
  }
  return '';
};
