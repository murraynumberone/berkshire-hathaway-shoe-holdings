import { brands } from "~/data/brands";

export default function LogoCloud() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 px-4 md:max-w-4xl lg:max-w-5xl lg:grid-cols-4 lg:px-6">
      {brands.map((brand) => (
        <a
          key={brand.name}
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block transition"
          aria-label={`Visit ${brand.name} website`}
        >
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={158}
            height={48}
            loading="lazy"
            className="w-full object-contain object-left opacity-70 transition duration-300 group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
}
