import Hero from "@/components/Hero";
import Lore from "@/components/Lore";
import Modalidades from "@/components/Modalidades";
import Rangos from "@/components/Rangos";
import Guides from "@/components/Guides";
import Staff from "@/components/Staff";
import Reglas from "@/components/Reglas";
import HomeGuard from "@/components/HomeGuard";

export default function Home() {
  return (
    <HomeGuard>
      <Hero />
      <Lore />
      <Modalidades />
      <Rangos />
      <Guides />
      <Staff />
      <Reglas />
    </HomeGuard>
  );
}
