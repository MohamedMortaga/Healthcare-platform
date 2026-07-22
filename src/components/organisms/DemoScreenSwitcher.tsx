'use client';
import { useUiStore } from '@/store/uiStore';
import { DEMO_SCREENS } from '@/data/mockData';
import { ActiveView } from '@/types';
import { cn } from '@/lib/cn';

// Quick screen jumper for stakeholder walkthroughs / CEO demos — not part of
// the patient-facing product surface.
export default function DemoScreenSwitcher() {
  const { demoOpen, toggleDemo, view, navigate } = useUiStore();

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {demoOpen ? (
        <div className="w-[220px] bg-brand-midnight rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center px-3.5 py-3 border-b border-white/10">
            <span className="text-[11px] font-bold text-white">Preview Screens</span>
            <button onClick={toggleDemo} className="text-slate-300 text-xs">✕</button>
          </div>
          <div className="max-h-[260px] overflow-y-auto p-1.5">
            {DEMO_SCREENS.map((scr) => (
              <button
                key={scr.key}
                onClick={() => {
                  navigate(scr.key as ActiveView);
                  toggleDemo();
                }}
                className={cn(
                  'w-full text-start px-3 py-2 rounded-lg text-[11.5px] mb-0.5',
                  scr.key === view ? 'bg-brand-navy text-white font-semibold' : 'text-slate-300 hover:bg-white/5'
                )}
              >
                {scr.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={toggleDemo} className="px-4 py-2.5 bg-brand-midnight text-white rounded-full text-[11.5px] font-bold shadow-xl">
          ⌗ Preview Screens
        </button>
      )}
    </div>
  );
}
