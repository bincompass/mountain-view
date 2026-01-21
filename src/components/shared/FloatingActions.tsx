import { Button } from "@/components/ui/button";
import { Video, MessageCircle, MousePointer2 } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-6 w-full max-w-fit px-4">
      {/* Action Bar */}
      <div className="bg-[#1a1a1a] rounded-full p-1.5 flex items-center gap-4 shadow-2xl border border-white/10 backdrop-blur-sm">
        <Button className="bg-[#1a1a1a] hover:bg-white/10 text-white rounded-full px-6 py-2 flex items-center gap-3 border border-white/20 h-10 group transition-all">
          <div className="w-6 h-6 flex items-center justify-center border border-white/40 rounded-sm group-hover:border-white transition-colors">
            <MousePointer2 className="w-4 h-4 text-white" />
          </div>
          <span className="uppercase text-xs font-bold tracking-widest">
            Register Now
          </span>
        </Button>

        <div className="flex items-center gap-3 px-2">
          <button className="text-[#00aeef] hover:opacity-80 transition-opacity cursor-pointer p-1">
            <Video className="w-6 h-6 fill-current" />
          </button>
          <button className="text-[#25d366] hover:opacity-80 transition-opacity cursor-pointer p-1">
            <MessageCircle className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
