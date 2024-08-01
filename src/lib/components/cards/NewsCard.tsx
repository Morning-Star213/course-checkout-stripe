"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NewsCard({
  id,
  title,
  text,
  imgUrl,
}: {
  id: number;
  title: string;
  text: string;
  imgUrl: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between border-[2px] border-border-gray rounded-3xl hover:cursor-pointer transition-transform duration-200 hover:translate-y-[-10px] 2xl:min-h-[370px]">
      <div>
        <div className="p-4 pb-0">
          <Image
            className="w-full"
            src={imgUrl}
            width={100}
            height={100}
            alt="News"
            unoptimized
            priority
          />
        </div>
        <div className="px-4 py-3">
          <p className="news-title">{title}</p>
          <p className="news-content mt-3">{text}</p>
        </div>
      </div>
      <div className="px-4 flex justify-end mb-2">
        <span
          className="hover:text-gray-500"
          onClick={() => router.push(`/news/${id}`)}
        >{`READ MORE >`}</span>
      </div>
    </div>
  );
}
