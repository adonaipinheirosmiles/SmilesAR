export function useServices() {
  function callService<T>(service: Promise<T>) {
    return service;
  }

  return {
    callService,
  };
}
