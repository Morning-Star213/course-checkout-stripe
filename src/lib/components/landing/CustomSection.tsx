import Image from "next/image";

export default function CustomSection() {
  const recent_news = [
    {
      title: "How do you buy an NFT?",
      content:
        "Quick-start guide to nabbing the digital collectible of your dreams",
      tag: "Cryptocurrency",
    },
    {
      title:
        "Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained",
      content:
        "From diamond hands to the flippening, we break down 11 of the most popular pieces of crypto lingo",
      tag: "Cryptocurrency",
    },
    {
      title: "How to set up a crypto wallet",
      content: "Learn how to setup and get started with a crypto wallet.",
      tag: "Cryptocurrency",
    },
    {
      title: "How to earn crypto rewards",
      content:
        "From staking to lending, five of the best ways to grow your crypto",
      tag: "Cryptocurrency",
    },
    {
      title: "What are Initial Coin Offerings (ICOs) and how do they work?",
      content:
        "TL;DR: Initial Coin Offerings (ICOs) are a method of gathering resources for cryptocurrency-related projects.",
      tag: "Cryptocurrency",
    },
    {
      title: "What is a crypto whitelist?",
      content:
        "A crypto whitelist is a list of approved participants for a specific event in the cryptocurrency world.",
      tag: "Cryptocurrency",
    },
  ];

  const Tag = ({ className, topic }: { className?: string; topic: string }) => {
    return (
      <span className="px-4 py-1 md:py-2 text-[8px] md:text-[12px] font-medium border-[1px] border-black rounded-full">
        {topic}
      </span>
    );
  };

  return (
    <section className="flex justify-end mb-10">
      <div className="main-container px-4">
        <div className="mt-8">
          <div className="flex items-center gap-2 py-6">
            <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
            <h3>Tips and tutorials</h3>
          </div>
          <div className="md:max-w-[85%] mx-auto flex flex-col gap-4">
            {recent_news.map((item, index) => {
              return (
                <div key={item.title} className="flex gap-6">
                  <Image
                    className="max-w-[40%] h-auto"
                    src={`/topics/recent${index + 1}.png`}
                    width={300}
                    height={200}
                    unoptimized
                    alt="Photo"
                  />
                  <div>
                    <p className="medium-content mt-1 lg:mt-4">{item.title}</p>
                    <p className="hidden md:block news-content mt-2">
                      {item.content}
                    </p>
                    <div className="md:mt-4">
                      <Tag topic={item.tag} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}