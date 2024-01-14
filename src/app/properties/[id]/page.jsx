import { makeTerraxActor } from "@/core/services/actorLocatorService";
import PropertyListView from "@/features/properties/views/PropertyListView";

export default function Home() {
  return <PropertyListView />;
}

export async function generateStaticParams() {
  // const terraxActor = makeTerraxActor();
  // const response = await terraxActor.getProperties({
  //   name: "",
  //   category: [],
  // });

  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
