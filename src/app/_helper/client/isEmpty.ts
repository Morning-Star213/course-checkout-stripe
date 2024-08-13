export const isEmpty = (data: any) => {
  return (
    typeof data === null ||
    typeof data === "undefined" ||
    (typeof data === "string" && data.trim().length === 0) ||
    (typeof data === "object" && Object.keys(data).length === 0)
  );
};
