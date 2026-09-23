import { useRef } from "react";
import { toPng } from "html-to-image";


type Layout = {
id: string;
name: string;
title: string;
description: string;
};

type LayoutPreviewProps = {
layout: Layout;
image: string | null;
onImageUpload: (
event: React.ChangeEvent<HTMLInputElement>
) => void;
};

function LayoutPreview({
layout,
image,
onImageUpload
}: LayoutPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  async function downloadPNG() {
  if (!previewRef.current) {
    return;
  }

  try {
    const dataUrl = await toPng(
      previewRef.current,
      {
        pixelRatio: 2
      }
    );

    const link =
      document.createElement("a");

    link.download =
      `design-layout-${layout.id}.png`;

    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error(
      "PNG download failed:",
      error
    );
  }
}

return (

  

<section className="section">

  <div className="section-header">

    <div>

      <p className="section-number">
        03
      </p>

      <h2>
        Layout
      </h2>

    </div>


    <p className="section-description">
      {layout.name}
    </p>

  </div>


  <div
  ref={previewRef}
  className={
    `layout-preview layout-${layout.id}`
  }
>

    <div className="layout-image">

      {image ? (

        <img
          src={image}
          alt="Uploaded preview"
        />

      ) : (

        <span>
          IMAGE
        </span>

      )}

    </div>


    <div className="layout-content">

      <p className="layout-label">
        {layout.name}
      </p>


      <h3>
        {layout.title}
      </h3>


      <p>
        {layout.description}
      </p>


      <label className="upload-button">

        Upload Image

        <input
          type="file"
          accept="image/*"
          onChange={
            onImageUpload
          }
          hidden
        />

      </label>
      <button
        type="button"
        className="download-button"
        onClick={downloadPNG}
      >
        Download PNG
      </button>

    </div>

  </div>

</section>


);
}

export default LayoutPreview;

