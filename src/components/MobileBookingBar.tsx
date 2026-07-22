"use client";

import { Button } from "@/components/ui/Button";
import { IconCalendar } from "@/components/ui/Icons";

export function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-none">
      <div className="px-5 pb-[max(18px,env(safe-area-inset-bottom))] pt-4 bg-gradient-to-t from-background via-background/96 to-transparent">
        <div className="pointer-events-auto">
          <Button
            href="#reservation"
            className="w-full !tracking-[0.08em]"
            icon={<IconCalendar size={18} className="text-white" />}
          >
            온라인 예약
          </Button>
        </div>
      </div>
    </div>
  );
}
