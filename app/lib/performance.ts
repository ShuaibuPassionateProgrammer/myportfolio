import { NextWebVitalsMetric } from 'next/app';

// Core Web Vitals tracking
export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics endpoint
    // fetch('/api/analytics/web-vitals', {
    //   method: 'POST',
    //   body: JSON.stringify(metric),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  }
}

// Performance observer for custom metrics
export function observePerformance() {
  if (typeof window === 'undefined') return;

  // Resource timing
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      // Log slow resources
      if (entry.duration > 1000) {
        console.warn('Slow resource:', entry.name, entry.duration);
      }
    });
  });

  observer.observe({ entryTypes: ['resource'] });

  // Long tasks
  const longTaskObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      console.warn('Long task detected:', entry.duration);
    });
  });

  longTaskObserver.observe({ entryTypes: ['longtask'] });

  // First Input Delay
  let firstInputObserver: PerformanceObserver | null = null;
  if ('PerformanceObserver' in window && 'PerformanceEventTiming' in window) {
    firstInputObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const delay = entry.processingStart - entry.startTime;
        if (delay > 100) {
          console.warn('First Input Delay:', delay);
        }
      });
    });
    firstInputObserver.observe({ type: 'first-input', buffered: true });
  }

  return () => {
    observer.disconnect();
    longTaskObserver.disconnect();
    firstInputObserver?.disconnect();
  };
}

// Image lazy loading observer
export function createLazyObserver() {
  if (typeof window === 'undefined') return;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  return imageObserver;
}

// Performance utilities
export const performanceUtils = {
  // Measure custom metrics
  measure: (name: string, fn: () => void) => {
    if (typeof window === 'undefined') return;
    
    const start = performance.now();
    fn();
    const end = performance.now();
    
    console.log(`${name} took ${end - start} milliseconds`);
    
    return end - start;
  },

  // Check if device is low-end
  isLowEndDevice: () => {
    if (typeof navigator === 'undefined') return false;
    
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    return (
      navigator.hardwareConcurrency <= 4 ||
      (connection && connection.effectiveType === '2g') ||
      (connection && connection.saveData)
    );
  },

  // Get device memory info
  getDeviceInfo: () => {
    if (typeof navigator === 'undefined') return null;
    
    interface NavigatorWithMemory extends Navigator {
      deviceMemory?: number;
    }
    
    return {
      hardwareConcurrency: navigator.hardwareConcurrency || 1,
      deviceMemory: (navigator as NavigatorWithMemory).deviceMemory || 'unknown',
      connection: navigator.connection || navigator.mozConnection || navigator.webkitConnection,
    };
  },
};

// Loading states manager
export class LoadingStateManager {
  private states = new Map<string, boolean>();
  private listeners = new Set<(states: Map<string, boolean>) => void>();

  setLoading(key: string, isLoading: boolean) {
    this.states.set(key, isLoading);
    this.notify();
  }

  isLoading(key: string) {
    return this.states.get(key) || false;
  }

  subscribe(listener: (states: Map<string, boolean>) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener(new Map(this.states)));
  }
}