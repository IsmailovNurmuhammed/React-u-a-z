import React from "react";
//Использовать через useMemo
export const usePagination = (totalPagesArray) => {
  let result = [];
    for (let i = 0; i < totalPagesArray; i++) {
      result.push(i + 1);
    }

  return result;
}