import Image from "next/image";

type DataProps = {
  quote: string;
};
interface HomeProps {
  data: DataProps;
}

export default function Home({ data }: HomeProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-neutral-950 via-stone-900 to-neutral-950">
      <span className="flex flex-col items-center justify-center text-2xl 2xl:text-3xl font-medium animate-bounce text-white lg:text-4xl p-3">
        {data.quote}
      </span>
      <span className="relative top-4 text-sm font-medium text-white">
        - Kayne West
      </span>
      <div className="absolute top-4 right-5 sm:right-16 md:right-32 lg:right-6 xl:right-8 2xl:right-3">
        <iframe
          className="rounded-xl w-80 sm:w-99 lg:w-99 xl:w-99 2xl:w-99 h-40"
          src="https://open.spotify.com/embed/album/5CnpZV3q5BcESefcB3WJmz?utm_source=generator&theme=0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.kanye.rest/");
  const phrase = await res.json();

  return {
    props: {
      data: phrase,
    },
  };
};
