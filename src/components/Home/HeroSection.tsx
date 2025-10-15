import Link from "next/link";
import { Button } from "../ui/button";
export default function HeroSection() {
  return (
    <section className="max-w-3xl text-center space-y-4">
      <h1 className="text-wandersync">
        WanderSync
      </h1>
      <p className="text-lg text-muted-foreground">
        Descubra destinos, compartilhe experiências e viaje junto com a
        comunidade. ✈️
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/explore/destination">Explorar destinos</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/trips/plantrip">Criar viagem</Link>
        </Button>
      </div>
    </section>
  );
}
