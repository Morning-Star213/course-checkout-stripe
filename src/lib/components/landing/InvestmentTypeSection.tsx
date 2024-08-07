import Link from "next/link";

export default function InvestmentTypeSection() {
  return (
    <div className="flex flex-wrap">
      <h3 className="w-full text-center">Investment types</h3>
      <div className="max-w-[200px] mx-auto mt-6">
        <button
          className="w-full border border-black p-2.5"
          style={{ fontFamily: "IBM Plex Mono" }}
        >
          <Link href={"dd"}>VIEW THE FUNDS</Link>
        </button>
      </div>
      <div className="flex">
        <div className="px-2">
          <div className="border-t border-b border-black pt-[25px] pb-[35px]">
            <div>
              <h5>Venture Equity</h5>
            </div>
            <div className="mt-[30px]">
              <p
                className="text-[15px] font-medium"
                style={{ fontFamily: "NeoGramCondensed" }}
              >
                Exposure to equity in companies building products and services
                in the nascent blockchain ecosystem. Our long standing
                reputation and technical edge allows us to see virtually every
                deal in the market, and lead about half of our portfolio company
                investments.
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="border-t border-b border-black pt-[25px] pb-[35px]">
            <div>
              <h5>Venture Equity</h5>
            </div>
            <div>
              <p>
                Exposure to equity in companies building products and services
                in the nascent blockchain ecosystem. Our long standing
                reputation and technical edge allows us to see virtually every
                deal in the market, and lead about half of our portfolio company
                investments.
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="border-t border-b border-black pt-[25px] pb-[35px]">
            <div>
              <h5>Venture Equity</h5>
            </div>
            <div>
              <p>
                Exposure to equity in companies building products and services
                in the nascent blockchain ecosystem. Our long standing
                reputation and technical edge allows us to see virtually every
                deal in the market, and lead about half of our portfolio company
                investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
