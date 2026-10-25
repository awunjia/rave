import Image from "next/image";
import { MapPin } from "lucide-react";

const countries = [
    { name: "Cameroon", region: "Africa", imageSrc: "/images/branches/cameroon.jpg" },
    { name: "Canada", region: "North America", imageSrc: "/images/branches/canada.jpg" },
    { name: "USA", region: "North America", imageSrc: "/images/branches/usa.jpg" },
    { name: "Finland", region: "Europe", imageSrc: "/images/branches/finland.jpg" },
    { name: "Germany", region: "Europe", imageSrc: "/images/branches/germany.jpg" },
    { name: "Ukraine", region: "Europe", imageSrc: "/images/branches/ukraine.jpg" },
    { name: "Belgium", region: "Europe", imageSrc: "/images/branches/belgium.jpg" },
    { name: "Poland", region: "Europe", imageSrc: "/images/branches/poland.jpg" },
    { name: "Estonia", region: "Europe", imageSrc: "/images/branches/estonia.jpg" },
];

export function CountriesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78a4d]">
                        Global Coverage
                    </p>

                    <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
                        Destinations We Advocate For
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                        We provide specialized immigration, legal, and visa advisory services across these key international jurisdictions.
                    </p>
                </div>
            </div>

            {/* Countries Grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {countries.map((country) => (
                    <div
                        key={country.name}
                        className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-[#b49a64]/70 hover:shadow-md"
                    >
                        {/* Country Image / Flag Thumbnail */}
                        <div className="relative aspect-square h-14 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                            <Image
                                src={country.imageSrc}
                                alt={`${country.name} immigration services`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="56px"
                            />
                        </div>

                        {/* Country Details */}
                        <div className="flex flex-1 flex-col justify-center">
                            <div className="flex items-center gap-1.5 text-foreground">
                                <MapPin size={15} className="shrink-0 text-[#a78a4d]" />
                                <h3 className="text-base font-semibold text-card-foreground">
                                    {country.name}
                                </h3>
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                                {country.region}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}