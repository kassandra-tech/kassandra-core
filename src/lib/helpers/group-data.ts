export const groupBy = (arr: any[] = [], nth: number = 2) => {
  return arr.reduce((acc: any[], item: any, index: number) => {
    if (index === 0) {
      acc[index] = [item];
    } else if (index % nth === 0) {
      acc[index] = [item];
    } else {
      const restIdx = [];
      for (let i = 0; i < acc.length; i += nth) {
        restIdx.push(i)
      }
      acc[restIdx[restIdx.length - 1]].push(item)
    }
    return acc;
  }, []).filter((item: any) => item);
};
