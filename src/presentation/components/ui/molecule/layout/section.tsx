import { Title2 } from "../../atom/typography";

interface SectionProps {
  title?: string;
  info?: InfoProps[];
  border?: boolean;
}

interface InfoProps {
  subtitulo?: string;
  valor?: string | number | null;
}

export const Section = ({ title, info, border }: SectionProps) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        border ? "" : "border-t-[2px] border-base-fourth"
      }`}
    >
      <div className="font-bold mt-3">{title}</div>
      <div className="flex flex-col gap-2">
        {info?.map((item) => (
          <div key={`${item.subtitulo}-${item.valor}`}>
            <div className="text-typography-thrith ml-5">{item.subtitulo}</div>
            <Title2 clasname="ml-5" titulo={item.valor} />
          </div>
        ))}
      </div>
    </div>
  );
};
