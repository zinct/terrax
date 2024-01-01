import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="flex flex-row items-center justify-between my-5">
        <div>
          <Image
            src="/svg/terrax.svg"
            width={117}
            height={42}
            alt="TerraX Logo"
          />
        </div>
        <nav>
          <ul className="flex flex-row items-center justify-center space-x-16 text-white">
            <li className="font-bold border-b-white border-b-2">Home</li>
            <li className="text-gray-300">Buy</li>
            <li className="text-gray-300">Sell</li>
            <li className="text-gray-300">Asset Manager</li>
          </ul>
        </nav>
        <div>
          <button className="w-24 h-12 text-white font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-orange-400 p-1">
            <div
              className="h-full rounded-lg py-2"
              style={{ backgroundColor: "#000a14" }}
            >
              Sign In
            </div>
          </button>
        </div>
      </header>
      <section className="flex flex-row items-center justify-between relative">
        <Image
          src="/svg/pattern.svg"
          width={800}
          height={700}
          alt="Pattern"
          className="absolute -top-10 -right-10 z-0"
        />
        <div className="flex-1">
          <h1 className="text-white font-bold text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Secure and Easy
            </span>{" "}
            Property Transactions
            <div className="relative h-20">
              <Image
                src="/svg/line.svg"
                width={400}
                height={100}
                alt="Line"
                className="absolute top-0 -right-5"
              />
            </div>
          </h1>
          <p className="text-gray-500 text-lg">
            With blockchain technology, now you can do property transactions
            effortlessly and completed within 7 days or less.
          </p>
          <div className="mt-10">
            <button className="bg-cyan-400 px-5 py-3 rounded-lg mr-10">
              Explore
            </button>
            <button className="text-white relative">
              Go To Market{" "}
              <Image
                src="/svg/arrow-btn.svg"
                width={50}
                height={10}
                alt="Line"
                className="absolute top-2 -right-16"
              />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <Image
              src="/svg/card-promotion.svg"
              width={600}
              height={500}
              alt="Card Promotion"
              className="z-10"
            />
          </div>
          <div className="flex flex-row items-center justify-center space-x-20">
            <div>
              <h2 className="text-white font-bold text-4xl">
                56K<span className="text-cyan-300">+</span>
              </h2>
              <p className="text-white">Listings</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-4xl">
                18K<span className="text-cyan-300">+</span>
              </h2>
              <p className="text-white">Property Sold</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-4xl">
                10K<span className="text-cyan-300">+</span>
              </h2>
              <p className="text-white">Customer Satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
