export type Contact = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
};

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    mode?: 'light' | 'dark';
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
  }
}