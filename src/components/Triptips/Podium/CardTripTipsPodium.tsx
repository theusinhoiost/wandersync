
import { Card, CardContent, CardFooter, CardTitle } from "../../ui/card";

import PodiumCardHeader from "./PodiumCardHeader";
import { PodiumCardImage } from "./PodiumCardImage";

export default function CardTripTips() {
  return (
    <>
     <Card >
      <PodiumCardHeader iconColor={"gold"} text={"TOP 1"}/>
      <CardTitle className="text-center">
        CIDADE GRANDE
      </CardTitle>
      <CardContent>
        <PodiumCardImage src={"/imgs/pexels-sandro-tedeschini-694018589-33523613.jpg"} alt={"IMAGEM TESTE"} >
        </PodiumCardImage>
      </CardContent>
      <CardFooter>Foto: Pexels- Sandro Tedeschini</CardFooter>
    </Card>
     <Card >
      <PodiumCardHeader iconColor={"silver"} text={"TOP 2"}/>
      <CardTitle className="text-center">
        CIDADE GRANDE
      </CardTitle>
      <CardContent>
        <PodiumCardImage src={"/imgs/pexels-sandro-tedeschini-694018589-33523613.jpg"} alt={"IMAGEM TESTE"} >
        </PodiumCardImage>
      </CardContent>
      <CardFooter>Foto: Pexels- Sandro Tedeschini</CardFooter>
    </Card>
     <Card >
      <PodiumCardHeader iconColor={"bronze"} text={"TOP 3"}/>
      <CardTitle className="text-center">
        CIDADE GRANDE
      </CardTitle>
      <CardContent>
        <PodiumCardImage src={"/imgs/pexels-sandro-tedeschini-694018589-33523613.jpg"} alt={"IMAGEM TESTE"} >
        </PodiumCardImage>
      </CardContent>
      <CardFooter>Foto: Pexels- Sandro Tedeschini</CardFooter>
    </Card>
    </>

    
  );
}
