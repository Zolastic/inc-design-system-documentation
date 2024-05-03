type colour = {
  colourName: string;
  hex: string;
};

type colourGroup = {
  groupName: string;
  colours: colour[];
};

export type { colour, colourGroup };
