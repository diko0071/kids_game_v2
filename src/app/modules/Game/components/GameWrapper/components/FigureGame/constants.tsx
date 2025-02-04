import React from "react";
import { COLORS, LangList } from "../../../../constants";

export enum FigureNames {
  square = "square",
  circle = "circle",
  oval = "oval",
  triangle = "triangle",
  rectangle = "rectangle",
}

export const FIGURES = [
  FigureNames.square,
  FigureNames.circle,
  FigureNames.oval,
  FigureNames.triangle,
  FigureNames.rectangle,
];

export const FIGURE_WORDS = {
  [FigureNames.square]: [{ [LangList.ru]: "Квадрат", [LangList.en]: "Square" }],
  [FigureNames.circle]: [{ [LangList.ru]: "Круг", [LangList.en]: "Circle" }],
  [FigureNames.oval]: [{ [LangList.ru]: "Овал", [LangList.en]: "Oval" }],
  [FigureNames.triangle]: [
    { [LangList.ru]: "Треугольник", [LangList.en]: "Triangle" },
  ],
  [FigureNames.rectangle]: [
    { [LangList.ru]: "Прямоугольник", [LangList.en]: "Rectangle" },
  ],
};

export const IMAGES = {
  [FigureNames.square]: (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <rect
        x="10"
        y="10"
        width="80"
        height="80"
        stroke="transparent"
        strokeWidth="2"
      />
    </svg>
  ),

  [FigureNames.circle]: (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" stroke="transparent" strokeWidth="2" />
    </svg>
  ),
  [FigureNames.oval]: (
    <svg width="100" height="100" viewBox="0 0 150 100">
      <ellipse
        cx="75"
        cy="50"
        rx="60"
        ry="30"
        stroke="transparent"
        strokeWidth="2"
      />
    </svg>
  ),
  [FigureNames.triangle]: (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <polygon
        points="50,10 90,90 10,90"
        stroke="transparent"
        strokeWidth="2"
      />
    </svg>
  ),

  [FigureNames.rectangle]: (
    <svg width="100" height="100" viewBox="0 0 150 100">
      <rect
        x="10"
        y="10"
        width="130"
        height="80"
        stroke="transparent"
        strokeWidth="2"
      />
    </svg>
  ),
};

export const FIGURE_COLORS = [
  COLORS.red,
  COLORS.darkPink,
  COLORS.blue,
  COLORS.green,
  COLORS.black,
  COLORS.white,
];
