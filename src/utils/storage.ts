export const load = <T>(key: string, fallback: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const save = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
