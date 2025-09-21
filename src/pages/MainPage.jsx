import { HeaderSection } from "./HeaderSection";
import { TimelineSection } from "./TimelineSection";
import { ContextSection } from "./ContextSection";
import { ApplicationSection } from "./ApplicationSection";
import { ConclusionSection } from "./ConclusionSection";

export default function MainPage() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      
      <HeaderSection />
      <TimelineSection />
      <ContextSection />
      <ApplicationSection />
      <ConclusionSection />
    </div>
  );
}
