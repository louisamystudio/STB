export const measureStartupTime = () => {
  if (process.env.NODE_ENV === 'development') {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      console.log(`App startup time: ${Math.round(endTime - startTime)}ms`);
    };
  }
  return () => {};
};