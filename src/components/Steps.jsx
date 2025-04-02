import location from "../assets/SVG/location.svg";
import browse from "../assets/SVG/browse.svg";
import communicate from "../assets/SVG/communicate.svg";

const Steps = () => {
  return (
    <section className="p-6 bg-[var(--primary-color)] text-[var(--text-color)]">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-[var(--accent-color)]">
          Kuinka se toimii?
        </span>

        <h2 className="text-5xl font-bold text-center text-[var(--text-color)]">
          Matkustaminen Kyydillä on helppoa
        </h2>

        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md text-[var(--text-color)]">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">
              <img src={browse} alt="1" className="w-10 h-10" />
            </div>
            <p className="text-2xl">
              Selaa kyytejä
            </p>
            <p className="text-lg ">
              Valitse lähtöpaikka ja määränpää sovelluksessa. Näet tarjolla olevat kyydit ja kuljettajien profiilit. Valitse itsellesi sopivin vaihtoehto.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md text-[var(--text-color)]">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">
              <img src={communicate} alt="1" className="w-10 h-10" />
            </div>
            <p className="text-2xl">
              Varaa kyyti
            </p>
            <p className="text-lg ">
              Varaa valitsemasi kyyti. Kuljettaja vahvistaa varauksesi ja voit keskustella sekä tutustua kuljettajaan sovelluksen kautta.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md text-[var(--text-color)]">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">
              <img src={location} alt="3" className="w-10 h-10" />
            </div>
            <p className="text-2xl">
              Nauti matkasta
            </p>
            <p className="text-lg ">
              Tapaa kuljettaja sovitussa paikassa ja nauti edullisesta ja ympäristöystävällisestä matkasta määränpäähäsi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
