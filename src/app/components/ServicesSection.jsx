import dbConnect from "@/lib/dbConnect";
import Image from "next/image";

const ServicesSection = async () => {
  const data = await dbConnect("services").find({}).toArray();

  return (
    <div className="my-8">
      <h2 className="font-bold text-4xl text-center">All Services</h2>
      <div className="grid gap-3 grid-cols-12 place-content-center place-items-center">
        {data.map((item) => (
          <div
            key={item.service_id}
            className="border-2 border-slate-200 rounded p-3 col-span-12 md:col-span-6 lg:col-span-4"
          >
            <Image src={item.img} width={314} height={208} alt={item.title} />

            <div>
              <h2 className="font-bold text-2xl my-2">{item.title}</h2>
              <div className="flex items-center justify-between">
                <p className="text-[#FF3811] text-lg font-semibold">
                  Price: {item.price}
                </p>
                <div>➡</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
