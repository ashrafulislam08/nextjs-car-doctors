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
      <section>
        <figure className="flex justify-center w-full">
          <Image
            src={`/assets/images/checkout/checkout.png`}
            width={1137}
            height={300}
            alt="Banner"
          />
        </figure>
      </section>
    </div>
  );
};

export default ServiceDetails;
