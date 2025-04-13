import Image from "next/image";

interface SectionTitleProps {
  title: string;
  iconSrc?: string;
}

export function SectionTitle({ title, iconSrc }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center mb-10 relative">
      {iconSrc && (
        <div className="absolute -top-[0] left-[21%] transform -translate-x-1/2 scale-110">
          <Image src={iconSrc} alt={`${title} Icon`} width={36} height={36} className="text-primary" />
        </div>
      )}
      <h2 className="text-4xl font-bold text-center pt-4">{title}</h2>
    </div>
  );
}