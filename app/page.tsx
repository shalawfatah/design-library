import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </main>
  );
}
