export default function Hero({
  image,
  title,
  className = "",
}: {
  image: string;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden mb-8 ${className} lg:h-[220px] md:h-[220px] sm:h-[110px] h-[110px]`}
    >
      <img
        src={image}
        alt={title || "Image d'arrière-plan"}
        className="w-full h-full object-cover"
        loading="lazy"
        srcSet={`${image}?w=480 480w, ${image}?w=768 768w, ${image}?w=1200 1200w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        {title && (
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium text-center px-4">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
}
