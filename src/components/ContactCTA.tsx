import { Mail, Phone } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="mt-20 pt-12 border-t animate-in fade-in duration-700 delay-300">
      <p className="text-lg mb-4 text-center">Want to build together?</p>
      <h3 className="text-2xl font-semibold mb-6 text-center">Let's connect!</h3>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a 
          href="mailto:hello@example.com" 
          className="flex items-center gap-2 text-accent hover:underline"
        >
          <Mail className="w-4 h-4" />
          hello@example.com
        </a>
        <a 
          href="tel:+1234567890" 
          className="flex items-center gap-2 text-accent hover:underline"
        >
          <Phone className="w-4 h-4" />
          +1 (234) 567-890
        </a>
      </div>
    </section>
  );
};
