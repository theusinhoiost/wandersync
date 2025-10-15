import Image from "next/image";

type PodiumCardImageProps = {
  src: string;
  alt: string;
};

export function PodiumCardImage({ src, alt }: PodiumCardImageProps) {
  return (
    <div className="relative w-full h-64"> 
      <Image
        className="rounded-sm object-cover"
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
}
