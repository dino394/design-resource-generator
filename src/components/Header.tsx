
type HeaderProps = {
  onGenerate: () => void;
};


function Header({
  onGenerate
}: HeaderProps) {

  return (
    <header className="header">

      <p className="eyebrow">
        DESIGN RESOURCE GENERATOR
      </p>


      <h1>
        Find your
        <br />
        visual direction.
      </h1>


      <p className="description">
        Generate colors, fonts and layouts
        for your next design project.
      </p>


      <button
        type="button"
        className="generate-button"
        onClick={onGenerate}
      >
        <span>
          Generate Resources
        </span>

        <span className="generate-arrow">
          →
        </span>
      </button>

    </header>
  );
}


export default Header;

