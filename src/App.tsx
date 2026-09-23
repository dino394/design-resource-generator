
import { useState } from "react";

import Header from "./components/Header";
import ColorPalette from "./components/ColorPalette";
import FontPair from "./components/FontPair";
import LayoutPreview from "./components/LayoutPreview";


// =========================
// TYPE
// =========================

type FontSet = {
  id: string;
  name: string;
  heading: string;
  body: string;
};

type LayoutSet = {
  id: string;
  name: string;
  title: string;
  description: string;
};


// =========================
// RANDOM
// =========================

function getRandomItem<T>(
  array: T[],
  currentId?: string
): T {

  const filteredArray =
    currentId
      ? array.filter(
          (item) =>
            (item as { id: string }).id !== currentId
        )
      : array;

  const randomIndex =
    Math.floor(
      Math.random() * filteredArray.length
    );

  return filteredArray[randomIndex];
}


// =========================
// APP
// =========================

function App() {

  // =========================
  // COLOR DATA
  // =========================

  const colorSets: string[][] = [

    [
      "#F4A261",
      "#E9C46A",
      "#2A9D8F",
      "#264653",
      "#E76F51"
    ],

    [
      "#A8DADC",
      "#457B9D",
      "#E63946",
      "#F1FAEE",
      "#1D3557"
    ],

    [
      "#FFB5A7",
      "#FCD5CE",
      "#D8E2DC",
      "#B8C0FF",
      "#9381FF"
    ],

    [
      "#22223B",
      "#4A4E69",
      "#9A8C98",
      "#C9ADA7",
      "#F2E9E4"
    ],

    [
      "#606C38",
      "#283618",
      "#FEFAE0",
      "#DDA15E",
      "#BC6C25"
    ]

  ];


  // =========================
  // FONT DATA
  // =========================

  const fontSets: FontSet[] = [

    {
      id: "serif",
      name: "Playfair Display",
      heading: "'Playfair Display', serif",
      body: "Arial, sans-serif"
    },

    {
      id: "sans",
      name: "DM Sans",
      heading: "'DM Sans', sans-serif",
      body: "'DM Sans', sans-serif"
    },

    {
      id: "mono",
      name: "Space Mono",
      heading: "'Space Mono', monospace",
      body: "'Space Mono', monospace"
    },

    {
      id: "modern",
      name: "Bebas Neue",
      heading: "'Bebas Neue', sans-serif",
      body: "Arial, sans-serif"
    },

    {
      id: "classic",
      name: "Georgia",
      heading: "Georgia, serif",
      body: "Georgia, serif"
    }

  ];


  // =========================
  // LAYOUT DATA
  // =========================

  const layoutSets: LayoutSet[] = [

    {
      id: "split",
      name: "Split",
      title:
        "A simple layout for your next project.",
      description:
        "A balanced two-column layout for portfolios and landing pages."
    },

    {
      id: "image-left",
      name: "Image Left",
      title:
        "Build a strong visual hierarchy.",
      description:
        "Place the visual first and let the content follow naturally."
    },

    {
      id: "image-right",
      name: "Image Right",
      title:
        "Let your content breathe.",
      description:
        "A reversed composition creates a different visual rhythm."
    },

    {
      id: "stacked",
      name: "Stacked",
      title:
        "Create a vertical experience.",
      description:
        "A simple stacked layout works well for mobile-first designs."
    }

  ];


  // =========================
  // STATE
  // =========================

  const [colors, setColors] =
    useState<string[]>(colorSets[0]);

  const [font, setFont] =
    useState<FontSet>(fontSets[0]);

  const [layout, setLayout] =
    useState<LayoutSet>(layoutSets[0]);

  const [image, setImage] =
    useState<string | null>(null);


  // =========================
  // GENERATE
  // =========================

  function generateResources() {

    const newColors =
      colorSets[
        Math.floor(
          Math.random() *
          colorSets.length
        )
      ];


    const newFont =
      getRandomItem(
        fontSets,
        font.id
      );


    const newLayout =
      getRandomItem(
        layoutSets,
        layout.id
      );


    console.log(
      "새 색상:",
      newColors
    );

    console.log(
      "새 폰트:",
      newFont
    );

    console.log(
      "새 레이아웃:",
      newLayout
    );


    setColors(newColors);

    setFont(newFont);

    setLayout(newLayout);
  }


  // =========================
  // IMAGE UPLOAD
  // =========================

  function handleImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      event.target.files?.[0];


    if (!file) {
      return;
    }


    const imageURL =
      URL.createObjectURL(file);


    setImage(imageURL);
  }


  // =========================
  // RETURN
  // =========================

  return (

    <main className="container">

      <Header
        onGenerate={generateResources}
      />


      <ColorPalette
        colors={colors}
      />


      <FontPair
        font={font}
      />


      <LayoutPreview
        layout={layout}
        image={image}
        onImageUpload={
          handleImageUpload
        }
      />


      <footer className="footer">

        <p>
          Design Resource Generator
        </p>

        <p>
          09 — 2026
        </p>

      </footer>

    </main>

  );
}


export default App;

