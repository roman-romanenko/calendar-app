import { useTheme as useEmotionTheme } from "@emotion/react";
import type { Theme } from "../styles/themes";

export const useAppTheme = (): Theme => {
  return useEmotionTheme() as Theme;
};
