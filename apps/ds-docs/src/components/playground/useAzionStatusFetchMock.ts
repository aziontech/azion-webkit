import { watch, onUnmounted, type Ref } from 'vue';

const STATUS_API = 'https://status.azion.com/api/v2';
const DEMO_TO_INDICATOR: Record<string, string> = {
  operational: 'none',
  'minor-outage': 'minor',
  'partial-outage': 'major',
  'major-outage': 'critical',
  maintenance: 'maintenance',
};
const DESCRIPTIONS: Record<string, string> = {
  none: 'All Systems Operational',
  minor: 'Minor Outage',
  major: 'Partial Outage',
  critical: 'Major Outage',
  maintenance: 'Scheduled Maintenance',
};

export function useAzionStatusFetchMock(demoStatusRef: Ref<string | undefined>) {
  let originalFetch: typeof fetch | null = null;
  const isBrowser = typeof window !== 'undefined';

  const stop = watch(
    demoStatusRef,
    (demoStatus) => {
      if (!isBrowser) return;
      if (originalFetch === null) originalFetch = window.fetch;
      if (!demoStatus) {
        window.fetch = originalFetch;
        return;
      }
      const indicator = DEMO_TO_INDICATOR[demoStatus] ?? 'none';
      const description = DESCRIPTIONS[indicator] ?? 'All Systems Operational';
      const orig = originalFetch!;
      window.fetch = function (input: RequestInfo | URL, init?: RequestInit) {
        const url = typeof input === 'string' ? input : input instanceof URL ? input.href : (input as Request).url;
        if (!url.includes(STATUS_API)) return orig(input, init);
        if (url.endsWith('/status.json')) {
          return Promise.resolve(
            new Response(JSON.stringify({ status: { indicator, description } }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            })
          );
        }
        if (url.endsWith('/components.json')) {
          return Promise.resolve(
            new Response(JSON.stringify({ components: [] }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            })
          );
        }
        return orig(input, init);
      };
    },
    { immediate: true }
  );

  onUnmounted(() => {
    stop();
    if (isBrowser && originalFetch) window.fetch = originalFetch;
  });
}
