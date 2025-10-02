import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileHeader = () => {
  return (
    <header className="flex flex-col mb-16 animate-in fade-in duration-700">
      <Avatar className="w-24 h-24 mb-6">
        <AvatarImage
          src="/me.jpg"
          alt="Profile"
        />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold mb-2">Timur Aizatvafin</h1>
      <p className="text-muted-foreground text-lg">
        I like to build and scale software
      </p>
    </header>
  );
};
