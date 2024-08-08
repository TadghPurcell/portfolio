import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useStore } from '@nanostores/react';
import { activeSection, timeOfLastClick } from '../store';
import type { SectionName } from '../lib/types';


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const $activeSection = useStore(activeSection);
    const $timeOfLastClick = useStore(timeOfLastClick);

    const { ref, inView } = useInView({
      threshold,
    });
  
    useEffect(() => {
      if (inView && Date.now() - $timeOfLastClick > 1000) {
        activeSection.set(sectionName);
      }
        }, [inView, activeSection, timeOfLastClick]);
    
    return {
        ref,
    }
}