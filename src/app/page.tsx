import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500">Hello World</h1>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
}
