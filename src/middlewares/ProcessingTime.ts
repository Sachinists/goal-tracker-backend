export const processingTime = (req: any, res: any, next: any) => {
  const inTime: number[] = process.hrtime();
  req.headers = {...req.headers, inTime};
  next();
};
