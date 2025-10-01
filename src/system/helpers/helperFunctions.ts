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
