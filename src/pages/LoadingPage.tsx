export default function LoadingPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
      <div className="text-[#FF6060] text-4xl mb-8 animate-pulse">
        K<span className="inline-block -rotate-45">🏠</span>sa
      </div>

      <div className="flex gap-2">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-[#FF6060] animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7,
              }}
            />
          ))}
      </div>

      <p className="text-[#FF6060] mt-8 animate-pulse">Chargement...</p>
    </div>
  );
}
