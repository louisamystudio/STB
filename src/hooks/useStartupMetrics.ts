import { useEffect } from 'react';
import { measureStartupTime } from '@/utils/performance';

export const useStartupMetrics = () => {
  useEffect(() => {
    const measureEnd = measureStartupTime();
    return () => measureEnd();
  }, []);
};