import { Place } from "../data/places";
import { MapPin, Star } from "lucide-react";

export default function PlaceCard({ place }: { place: Place }) {
    return (
        <div className="group relative flex cursor-pointer flex-col overflow-hidden bg-black border border-neutral-800 transition-all hover:border-neutral-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 flex items-center gap-1 text-xs font-semibold text-white">
                    <Star className="w-3 h-3 fill-white" />
                    {place.rating}
                </div>
            </div>
            <div className="flex flex-col flex-1 p-6 z-10 bg-gradient-to-t from-black via-black/95 to-transparent">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        {place.category}
                    </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                    {place.name}
                </h3>
                <p className="mb-4 text-sm text-neutral-500 line-clamp-2 flex-grow">
                    {place.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-medium text-neutral-400">
                    <MapPin className="w-4 h-4" />
                    {place.location}
                </div>
            </div>
        </div>
    );
}
