import LoadingCard from "@/components/loadingCard";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  const cards = Array.from({ length: 20 }, (_, i) => <LoadingCard key={i} />);
  return (
    <main className="min-h-screen p-10 max-sm:px-0">
      <div className="grid gap-1">
        <Skeleton className="h-9 w-[200px]" />
        <Skeleton className="h-6 w-[300px]" />
      </div>
      <div className="flex flex-wrap min-h-screen p-10 max-sm:px-0">
        {cards}
      </div>
    </main>
  );
}
