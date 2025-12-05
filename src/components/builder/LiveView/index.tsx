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
    <div className="flex flex-1 h-full items-start justify-center p-2 min-w-[320px]">
      {children}
    </div>
  );
}
