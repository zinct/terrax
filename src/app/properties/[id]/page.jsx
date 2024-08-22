import { makeTerraxActor } from "@/core/services/actorLocatorService";
import PropertyListView from "@/features/properties/views/PropertyListView";

export function generateStaticParams() {
  return [
    {
      id: "1",
    },
  ];
}

function Home() {
  return <PropertyListView />;
}

export default Home;
