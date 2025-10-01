import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type CardNewsProps = {
  id: number;
  title: string;
  text: string;
  date: Date;
};

export default function newsPage({ title, text, date }: CardNewsProps) {
  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <Card>
      <CardHeader className="text-center">{title}</CardHeader>
      <CardContent>{text}</CardContent>
      <CardFooter>Notícia de: {formattedDate}</CardFooter>
    </Card>
  );
}
