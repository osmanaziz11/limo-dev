import { Montserrat, League_Spartan, Archivo, Libre_Baskerville } from "next/font/google";

const montserrat_600 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

export const montserrat600 = montserrat_600.className;

const montserrat_500 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

export const montserrat500 = montserrat_500.className;

const montserrat_400 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const montserrat400 = montserrat_400.className;

const league_spartan_700 = League_Spartan({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

export const leagueSpartan700 = league_spartan_700.className;

const archivo_300 = Archivo({
  subsets: ["latin"],
  weight: "300",
  style: "normal",
});

export const archivo300 = archivo_300.className;

const libre_400 = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const libre400 = libre_400.className;
