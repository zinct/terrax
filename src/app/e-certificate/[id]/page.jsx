import { makeTerraxActor } from "@/core/services/actorLocatorService";
import CertificateGenerateView from "@/features/certificate/views/CertificateGenerateView";

const Page = () => {
  return <CertificateGenerateView />;
};

export async function generateStaticParams() {
  // const terraxActor = makeTerraxActor();
  // const response = await terraxActor.getProperties({
  //   name: "",
  //   category: [],
  // });

  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default Page;
