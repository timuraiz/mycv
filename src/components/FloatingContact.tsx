import { useState } from "react";
import { Mail, Phone, MessageCircle, X, Twitter, Instagram, Youtube } from "lucide-react";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-foreground text-background px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 z-50 animate-in fade-in slide-in-from-bottom-4"
      >
        {isOpen ? (
          <X className="w-5 h-6" />
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Want to talk?</span>
          </>
        )}
      </button>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-card border rounded-lg shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Let's connect!</h3>

            <a
              href="mailto:aiztim02@gmail.com"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">aiztim02@gmail.com</span>
            </a>

            <a
              href="https://t.me/timuraizatvafin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              <span className="text-sm">@timuraizatvafin</span>
            </a>

            <a
              href="tel:+79047196369"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+7 (904) 719 63 69</span>
            </a>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 animate-in fade-in duration-300"
        />
      )}
    </>
  );
};
