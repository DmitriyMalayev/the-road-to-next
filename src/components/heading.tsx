import { Separator } from "@/components/ui/separator";

type HeadingProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <header className="text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <Separator />
    </header>
  );
};

export default Heading;
