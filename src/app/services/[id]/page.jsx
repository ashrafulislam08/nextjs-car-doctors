import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect("services");
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
  console.log(id);
  return (
    <div>
      {/* Banner start */}
      <section className="flex justify-center">
        <figure className=" relative ">
          <Image
            src={`/assets/images/checkout/checkout.png`}
            width={1137}
            height={300}
            alt="Banner"
          />
          <div className="absolute w-full h-full overlay-bg top-0  rounded-2xl">
            <div className="w-full h-full flex items-center ps-16">
              <div>
                <h1 className="font-bold text-2xl text-white">
                  Service Details
                </h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      {/* Banner end */}
      <section>
        <Image
          //   className="mx-auto"
          src={service.img}
          alt={service.title}
          width={400}
          height={200}
        />
        <h1 className="font-bold text-3xl">{service.title}</h1>
      </section>
    </div>
  );
};

export default ServiceDetails;
