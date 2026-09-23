
type Font = {
  id: string;
  name: string;
  heading: string;
  body: string;
};

type FontPairProps = {
  font: Font;
};

function FontPair({
  font
}: FontPairProps) {

  return (
    <section className="section">

      <div className="section-header">

        <div>
          <p className="section-number">
            02
          </p>

          <h2>
            Font Pair
          </h2>
        </div>

        <p className="section-description">
          {font.name}
        </p>

      </div>


      <div className="font-preview">

        <div className="font-top">

          <div>
            <p className="font-label">
              CURRENT FONT
            </p>

            <div className="current-font-name">
              {font.name}
            </div>
          </div>

          <div className="font-id">
            {font.id.toUpperCase()}
          </div>

        </div>


        <div className="font-sample">

          <p className="font-label">
            HEADING
          </p>

          <div
            className="font-heading"
            style={{
              fontFamily: font.heading
            }}
          >
            Creative Ideas
          </div>


          <p className="font-label body-label">
            BODY
          </p>

          <div
            className="font-body"
            style={{
              fontFamily: font.body
            }}
          >
            Design becomes more interesting
            when different elements work together.
            This is a simple preview of your
            generated font combination.
          </div>

        </div>


        <div className="font-info">

          <div>
            <span className="font-info-label">
              HEADING
            </span>

            <span>
              {font.name}
            </span>
          </div>


          <div>
            <span className="font-info-label">
              BODY
            </span>

            <span>
              {font.body}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FontPair;

