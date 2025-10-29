import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import Image from "next/image";

type CardNewsProps = {
  id: number;
  title: string;
  text: string;
  date: Date;
  coverImageUrl?: string;
};

export default function CardNews({
  title,
  text,
  date,
  coverImageUrl,
}: CardNewsProps) {
  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <Card>
      <CardHeader className="text-center">{title}</CardHeader>
      <CardContent>
        {text}
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt={text}
            width={500}
            height={500}
            className=" mx-auto py-4 rounded-4xl"
          />
        )}
      </CardContent>
      <CardFooter>
        <div className=" flex flex-col gap-4">
          <div>Notícia de: {formattedDate}</div>
          <div className="flex gap-2">
            <ThumbsUp className="hover:text-green-500" />
            <ThumbsDown className="hover:text-red-500" />
            <Share2 className="hover:text-orange-500" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
