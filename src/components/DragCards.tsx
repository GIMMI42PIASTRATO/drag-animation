import Cards from "./Cards";

export default function DragCards() {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      {/* <img className="relative z-0 w-[60vw] font-black text-[#f2c700] md:w-[900px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/2560px-Breaking_Bad_logo.svg.png" alt="Breaking_Bad_logo" /> */}
      <h2 className="relative z-0 text-[20vw] font-black text-[#f2c700] md:text-[200px]">
        L<span className="text-red-500">'</span>agenzia
      </h2>
      <Cards />
    </section>
  )
}
