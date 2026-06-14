import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 max-w-xl text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
