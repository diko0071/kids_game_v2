import React from "react";
import { LangList } from "../../../../constants";

export const ICE_CREAM_COLORS = ["#87CEFA", "#FECA57", "#98FB98", "#FFB6C1"];
export const CAKE_COLORS = ["#FF69B4", "#20B2AA", "#FF7F50", "#FFD700"];

export const IceCreamSvg = ({ colors }: { colors: string[] }) => (
  <svg width="80" height="120" viewBox="0 0 120 180">
    <path d="M60 180 L20 80 L100 80 Z" fill="#FFA94D" />
    {colors.map((color, index) => (
      <ellipse cx="60" cy={80 - index * 40} rx="40" ry="20" fill={color} />
    ))}
    <circle cx="60" cy="10" r="8" fill="#FF0000" />
  </svg>
);

export const CakeSvg = ({ colors }: { colors: string[] }) => (
  <svg width="80" height="120" viewBox="0 0 120 120">
    <rect x="20" y="80" width="80" height="20" fill="#8B4513" />

    {colors.map((color, index) => (
      <rect x="20" y={60 - index * 20} width="80" height="20" fill={color} />
    ))}

    <circle cx="60" cy="10" r="8" fill="#FF0000" />

    <path d="M20 40 Q60 20 100 40" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

export const NUMBERS = [
  { [LangList.ru]: "Четыре мороженых", [LangList.en]: "Four ice creams" },
  { [LangList.ru]: "Пять мороженых", [LangList.en]: "Five ice creams" },
  { [LangList.ru]: "Шесть мороженых", [LangList.en]: "Six ice creams" },
  { [LangList.ru]: "Семь мороженых", [LangList.en]: "Seven ice creams" },
  { [LangList.ru]: "Восемь мороженых", [LangList.en]: "Eight ice creams" },
  { [LangList.ru]: "Девять мороженых", [LangList.en]: "Nine ice creams" },
  { [LangList.ru]: "Десять мороженых", [LangList.en]: "Ten ice creams" },
  { [LangList.ru]: "Четыре тортика", [LangList.en]: "Four cakes" },
  { [LangList.ru]: "Пять тортиков", [LangList.en]: "Five cakes" },
  { [LangList.ru]: "Шесть тортиков", [LangList.en]: "Six cakes" },
  { [LangList.ru]: "Семь тортиков", [LangList.en]: "Seven cakes" },
  { [LangList.ru]: "Восемь тортиков", [LangList.en]: "Eight cakes" },
  { [LangList.ru]: "Девять тортиков", [LangList.en]: "Nine cakes" },
  { [LangList.ru]: "Десять тортиков", [LangList.en]: "Ten cakes" }
];
