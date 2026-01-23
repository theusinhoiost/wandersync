import { CalendarTripDate } from "../DatePicker";
import { Button } from "../ui/button";
import KindSelector from "./TypeSelector";

export default function CreationTrips() {
  return (
    <div className="max-w-4xl mx-auto p-6  ">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Criar Planejamento ✈️
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Preencha os dados da sua viagem para salvar no WanderSync.
        </p>
      </header>
      <form className="flex flex-col gap-5">
        {/* Card: Informações básicas */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Informações Básicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Nome do plano</span>
              <input
                name="planName"
                minLength={2}
                className="input w-full"
                placeholder="Fim de semana em Paraty"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Destino</span>
              <input
                name="destination"
                minLength={2}
                className="input w-full"
                placeholder="Paraty, RJ"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">
                Quantidade de pessoas
              </span>
              <input
                name="peopleCount"
                type="number"
                defaultValue={1}
                min={1}
                max={10}
                className="input w-full"
              />
            </label>
          </div>

          <div className="mt-4 md:mt-6">
            <label className="flex flex-col md:flex-row md:items-center md:gap-4">
              <span className="text-sm font-medium md:w-48">
                Estilo da viagem
              </span>
              <div>
                <KindSelector />
              </div>
            </label>
          </div>
        </section>
        {/* Card: Datas */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Datas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Ida</span>
              <CalendarTripDate typeCalendar="depart" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Volta</span>
              <CalendarTripDate typeCalendar="back" />
            </label>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Se não preencher as datas, serão salvas como nulas.
          </p>
        </section>
        {/* Card: Orçamento */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Orçamento</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Orçamento (R$)</span>
              <input
                name="budget"
                className="input w-full"
                placeholder="Ex: 1200"
              />
            </label>

            <div className="text-right md:text-left">
              <p className="text-sm font-medium">Resumo</p>
              <p className="text-xs text-muted-foreground">
                Você vai poder editar isso depois.
              </p>
            </div>
          </div>
        </section>
        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Button variant={"cancel"}>Cancelar</Button>
          <Button type="submit" variant={"default"}>
            Finalizar Planejamento ✈️
          </Button>
        </div>
      </form>
    </div>
  );
}
