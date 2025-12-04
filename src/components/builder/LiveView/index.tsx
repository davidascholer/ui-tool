/**
 * LiveView Component
 * Displays the live view area in the builder interface.
 */
interface LiveViewProps {
  children: React.ReactNode;
}

export function LiveView({ children }: LiveViewProps) {
  // Batch detection state for
  return (
    <div className="flex h-full items-center justify-center p-2 border-b-amber-600 border-2 min-w-[320px]">
      {children}
    </div>
  );
}
