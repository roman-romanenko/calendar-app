export const createMediaHelpers = <T extends Record<string, string>>(
  breakpoints: T
) => {
  type Keys = keyof T;

  const minMedia = {} as { [K in Keys]: `@media (min-width: ${T[K]})` };
  const maxMedia = {} as { [K in Keys]: `@media (max-width: ${T[K]})` };

  (Object.entries(breakpoints) as [Keys, string][]).forEach(([key, value]) => {
    minMedia[key] =
      `@media (min-width: ${value})` as (typeof minMedia)[typeof key];
    maxMedia[key] =
      `@media (max-width: ${value})` as (typeof maxMedia)[typeof key];
  });

  return { minMedia, maxMedia };
};


export const getGMTOffset = () => {
  const mins = -new Date().getTimezoneOffset();
  const sign = mins >= 0 ? "+" : "-";
  const abs = Math.abs(mins);
  const h = Math.floor(abs / 60);
  const m = abs % 60;

  return m === 0
    ? `GMT${sign}${h}`
    : `GMT${sign}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};
