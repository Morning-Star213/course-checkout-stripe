import Image from "next/image";

export default function TopReadCard({
  content,
  imgUrl,
}: {
  content: string;
  imgUrl: string;
}) {
  return (
    <div className="flex p-3 bg-[#F1F1F1] rounded-r-3xl">
      <p className="news-title">{content}</p>
      <Image src={imgUrl} width={120} height={144} alt="Top Reads" />
    </div>
  );
}
