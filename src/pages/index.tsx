import Image from "next/image";

type DataProps = {
  quote: string;
};
interface HomeProps {
  data: DataProps;
}

export default function Home({ data }: HomeProps) {
  console.log(data);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <span className="flex flex-col items-center justify-center text-3xl font-medium animate-bounce text-white lg:text-4xl p-3">
        {data.quote}
      </span>
      <span className="relative top-4 text-sm font-medium text-white">- Kayne West</span>
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
