import type { colourGroup } from "@/types/colour";

const themeColors = {
  "Primary Colors": {
    primary: "#5E27B6",
    "primary-accent": "#DDD2F0",
    "primary-disabled": "#AC9BDB",
    "primary-active": "#482384",
    "text-primary-disabled": "#7260A4",
  },
  "Secondary Colors": {
    secondary: "#F78E5A",
    "secondary-accent": "#FCF0EE",
    "secondary-disabled": "#F7D5C2",
    "secondary-active": "#AF522A",
    "text-secondary-disabled": "#F0A47A",
  },
  "Text Colors": {
    "text-default": "#0D0815",
    "text-light": "#F8F8F8",
  },
  "Gray Colors": {
    "grey-100": "#F7F7F9",
    "grey-200": "#E4E7EC",
    "grey-300": "#D0D5DD",
    "grey-400": "#98A2B3",
    "grey-500": "#667085",
    "grey-600": "#344054",
    "grey-700": "#1D2939",
  },
  "State Colors": {
    success: "#58BE62",
    danger: "#ED452E",
    warning: "#FEC84B",
    info: "#58A1D4",
    "success-accent": "#ECFBEE",
    "danger-accent": "#FFF4F3",
    "warning-accent": "#FFFAEB",
    "info-accent": "#E2EFF8",
  },
  "Background Colors": {
    background: "#FDFCFF",
  },
};

const colourPalette: colourGroup[] = [];

for (const [groupName, colours] of Object.entries(themeColors)) {
  colourPalette.push({
    groupName,
    colours: Object.entries(colours).map(([colourName, hex]) => ({
      colourName,
      hex,
    })),
  });
}

export default colourPalette;
