import { useActiveSectionContext } from "@/app/lib/Active";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./type";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now()) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return {
    ref,
  };
}
