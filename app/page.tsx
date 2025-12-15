"use client";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-100 mx-auto">
      <Button variant="outline" size="lg">Button</Button>
      <Button variant="destructive" size="sm">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
    </div>
  );
};

export default Home;
