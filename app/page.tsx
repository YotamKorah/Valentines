import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24">
      <h1 className="text-6xl font-bold text-center">
        Happy Valentine's Day!
      </h1>
      <FavoriteIcon sx={{ fontSize: 150 }} />
      <h3 className="text-2xl font-bold text-center mb-5">
        "Sometimes all you need is a hug from the right person and all your stress will melt away."
      </h3>
      <div className="flex justify-center flex-col lg:flex-row">
        <Image
          src="/1.jpg"
          alt="us"
          width={300}
          height={300}
        />
        <Image
          src="/3.jpg"
          alt="us"
          width={500}
          height={300}
        />
        <Image
          src="/2.jpg"
          alt="us"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}
