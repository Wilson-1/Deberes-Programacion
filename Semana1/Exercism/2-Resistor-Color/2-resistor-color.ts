export const colorCode = (color: string): number => {
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const index = COLORS.indexOf(color);
    if (index === -1) {
      throw new Error('Invalid color');
    }
    return index;
  };
  
  export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];