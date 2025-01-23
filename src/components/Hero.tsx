export default function Hero({image, title}: {image: string; title?: string}) {
  return (
    <div className="relative h-[220px] rounded-3xl overflow-hidden mb-8">
      <img
        src={image}
        alt="Mountain landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-white text-4xl font-medium">{title}</h1>
      </div>
    </div>
  );
}
