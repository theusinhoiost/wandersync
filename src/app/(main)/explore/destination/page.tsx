import CardTripTips from "@/components/triptips/Podium/CardTripTipsPodium";

export default function DestinosPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        Destinos Incríveis para Explorar
      </h1>

      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Descubra os destinos mais populares escolhidos pela nossa comunidade.
        Explore novos lugares, inspire-se para sua próxima viagem e veja quais
        locais estão no <span className="font-semibold">Top 3</span> do momento!
      </p>

      {/* Top 3 Destinos */}
      <section className="flex flex-row gap-4 flex-auto justify-center flex-wrap mb-10">
        <CardTripTips />
      </section>
    </div>
  );
}
