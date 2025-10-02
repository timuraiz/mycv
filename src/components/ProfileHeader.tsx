import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileHeader = () => {
  return (
    <header className="flex flex-col items-center text-center mb-16 animate-in fade-in duration-700">
      <Avatar className="w-24 h-24 mb-6">
        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Profile" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold mb-2">John Doe</h1>
      <p className="text-muted-foreground text-lg">I like to build and scale software</p>
    </header>
  );
};
