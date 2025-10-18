import { Globe, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function FeaturesSection() {
  return (
    <section className="mt-16 grid md:grid-cols-3 gap-6 w-full max-w-5xl">
      <Card>
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <Globe className="h-10 w-10 text-blue-500" />
          <h3 className="font-semibold text-lg">Explore o mundo</h3>
          <p className="text-sm text-muted-foreground">
            Descubra roteiros únicos criados por viajantes como você.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <Users className="h-10 w-10 text-purple-500" />
          <h3 className="font-semibold text-lg">Conecte-se</h3>
          <p className="text-sm text-muted-foreground">
            Conheça pessoas, troque dicas e viaje em boa companhia.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <MapPin className="h-10 w-10 text-pink-500" />
          <h3 className="font-semibold text-lg">Crie roteiros</h3>
          <p className="text-sm text-muted-foreground">
            Monte e compartilhe seus itinerários de forma fácil.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
