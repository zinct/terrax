import { makeTerraxActor } from "@/core/services/actorLocatorService";
import CertificateGenerateView from "@/features/certificate/views/CertificateGenerateView";

export function generateStaticParams() {
  return [
    {
      id: "1",
    },
  ];
}

const Page = () => {
  return <CertificateGenerateView />;
};

export default Page;
