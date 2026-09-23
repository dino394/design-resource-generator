
import { useState } from "react";

type ColorPaletteProps = {
  colors: string[];
};

function ColorPalette({
  colors
}: ColorPaletteProps) {

  const [copiedColor, setCopiedColor] =
    useState<string | null>(null);


  // =========================
  // COPY HEX
  // =========================

  async function copyColor(
    color: string
  ) {

    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(
          color
        );

      } else {

        const textArea =
          document.createElement("textarea");

        textArea.value = color;

        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";

        document.body.appendChild(
          textArea
        );

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(
          textArea
        );
      }


      // 복사된 색상 표시
      setCopiedColor(color);


      // 1초 후 원래 HEX로 돌아가기
      setTimeout(() => {

        setCopiedColor(null);

      }, 1000);


    } catch (error) {

      console.error(
        "HEX copy failed:",
        error
      );

    }
  }


  // =========================
  // DARK COLOR CHECK
  // =========================

  function isDarkColor(
    hex: string
  ): boolean {

    const color =
      hex.replace("#", "");


    const r =
      parseInt(
        color.substring(0, 2),
        16
      );


    const g =
      parseInt(
        color.substring(2, 4),
        16
      );


    const b =
      parseInt(
        color.substring(4, 6),
        16
      );


    const brightness =
      (
        r * 299 +
        g * 587 +
        b * 114
      ) / 1000;


    return brightness < 128;
  }


  return (

    <section className="section">

      <div className="section-header">

        <div>

          <p className="section-number">
            01
          </p>

          <h2>
            Color Palette
          </h2>

        </div>


        <p className="section-description">
          Click a color to copy HEX
        </p>

      </div>


      <div className="color-grid">

        {colors.map(
          (color, index) => {

            const dark =
              isDarkColor(color);


            const isCopied =
              copiedColor === color;


            return (

              <button
                type="button"
                className={
                  `color-card ${
                    isCopied
                      ? "color-card-copied"
                      : ""
                  }`
                }
                key={`${color}-${index}`}
                style={{
                  backgroundColor: color,
                  color: dark
                    ? "#ffffff"
                    : "#1f1f1f"
                }}
                onClick={() =>
                  copyColor(color)
                }
                aria-label={
                  `Copy ${color}`
                }
              >

                <span>

                  {isCopied
                    ? "Copied!"
                    : color}

                </span>

              </button>

            );

          }
        )}

      </div>

    </section>

  );
}

export default ColorPalette;

