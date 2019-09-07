export interface Language {
  name: string;
  data: number;
  backgroundColor: string;
}

export const LanguageColors: { [key: string]: string } = {
  TypeScript: '#4177CB',
  JavaScript: '#EBDC50',
  Java: '#D01D04',
  Kotlin: '#6967de',
  CSS: '#63A9D4',
  Python: '#2D435E',
  Ruby: '#D35332',
};
