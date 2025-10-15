

import CardNews from "@/components/News/CardNews";
import { newsMocks } from "@/data/newsMocks";
export default function newsPage() {
  return (

   
    <div className=" flex flex-col gap-8">
      <div className=" flex flex-col gap-2" >
        <h1 className="text-3xl font-bold text-center">Novidades do <span className="text-wandersync">WanderSync</span> </h1>
        <p className="text-lg mt-2 text-center text-muted-foreground">
          Fique por dentro das novidades, eventos e dicas para planejar suas
          aventuras e conectar-se com outros nômades pelo caminho!
        </p>
      </div>

      <div className="flex gap-2 flex-col max-w-[90%] mx-auto">
        {newsMocks.map((news) => (
          <CardNews key={news.id} {...news} />
        ))}
      </div>
    </div>


  );
}
