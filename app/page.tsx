import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* bandeau*/}
      <section className="w-full bg-zinc-200 pb-24">
        {/* HERO  */}
        <div className="relative mx-auto h-[400px] w-full max-w-6xl overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="Fishotgun landscape"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu sous le hero :*/}
        <div className="mx-auto mt-0 flex max-w-6xl flex-col gap-8 px-4 md:px-8 md:flex-row">
          {/*CARTE */}
          <article className="w-full md:w-[380px] flex flex-col items-stretch md:-mt-[140px]">
            <div className="rounded-xl bg-white shadow-md border border-zinc-300 overflow-hidden flex flex-col">
              {/* Image de la carte */}
              <div className="relative w-full h-[380px]">
                <Image
                  src="/fishotgun-cover.png"
                  alt="Fishotgun cover"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bloc titre */}
              <div className="px-5 pt-4 pb-3 bg-zinc-50 border-t border-zinc-200">
                <h2 className="text-2xl font-extrabold leading-tight">
                  Fishotgun
                </h2>
                <p className="mt-1 text-xs font-medium text-zinc-600">
                  By Rabbit Hole
                </p>
              </div>

              {/* Dowload*/}
              <div className="px-5 pt-4 pb-6">
                <a
                  href="/download"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-700 px-4 py-3 text-sm font-medium text-zinc-50 shadow hover:bg-zinc-800 transition-colors"
                >
                  <span className="text-lg">⬇</span>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </article>

          {/*DESCRIPTION */}
          <section
            id="Description"
            className="flex-1 text-sm leading-relaxed text-zinc-800 mt-4 md:mt-6"
          >
            <h2 className="mb-4 text-2xl font-semibold">Description</h2>

            <p className="mb-4">
              <strong>Fishotgun</strong> simulates a multiplayer (or solo)
              fishing experience set in a colorful and innocent-looking world.
              However, the player isn&apos;t equipped with a fishing rod —
              instead, they&apos;ll have to use a shotgun to shoot fishes before
              collecting them and adding them to a growing collection.
            </p>

            <p className="mb-4">
              Fishotgun is also a social experience. Through public lobbies and
              a text chat system, players can easily talk to each other between
              two shotgun blasts.
            </p>

            <p>
              Collect fishes based on their class and rarity — and join your
              friends in Fishotgun!
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
