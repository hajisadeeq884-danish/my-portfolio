import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916006606523"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with me on WhatsApp"
      title="Chat with me on WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  );
}

export default WhatsAppButton;