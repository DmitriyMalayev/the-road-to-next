import { LucideLoaderCircle } from "lucide-react";
const Spinner = () => {
  return (
    <div role="status" className="flex items-center justify-center">
      <LucideLoaderCircle className="animate-spin w-16 h-16 text-primary" />
    </div>
  );
};
export default Spinner;
