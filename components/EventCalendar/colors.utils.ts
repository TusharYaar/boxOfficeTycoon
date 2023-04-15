const COLORS = [
  {
    color: "#000",
    backgroundColor: "#e57373",
    borderColor: "#c62828",
  },
  {
    color: "#000",
    backgroundColor: "#4aedc4",
    borderColor: "#14a37f",
  },
  {
    color: "#fff",
    backgroundColor: "#2196f377",
    borderColor: "#1769aa",
  },
  {
    color: "#000",
    backgroundColor: "#ff6333",
    borderColor: "#b22a00",
  },
  {
    color: "#000",
    backgroundColor: "#ffcd38",
    borderColor: "#b28704",
  },
  {
    color: "#000",
    backgroundColor: "#a2cf6e",
    borderColor: "#618833",
  },
];

export const getItemColors = (id: string) => {
  let value = id.charCodeAt(0);

  for (let i = 1; i < id.length; i++) {
    value += id.charCodeAt(i);
  }
  return COLORS[value % COLORS.length];
};
