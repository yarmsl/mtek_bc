import { TUiColors } from "@/ui-kit/types";

export const getTextColor = (
  variant: "contained" | "outlined" | "text",
  color: TUiColors
): TUiColors => {
  switch (variant) {
    case "contained":
      return "text_contrast";

    default:
      return color;
  }
};
