import { Container } from "~/layout/container";
import { Wrapper } from "~/layout/wrapper";
import { retailerCategories } from "~/data/retailers";

export default function Retailers() {
  return (
    <Container id="retail" className="bg-[#ffe5d8]">
      <Wrapper className="max-w-4xl">
        <div className="relative mx-auto flex flex-col items-center text-center text-gray-700">
          <p className="text-xs leading-relaxed font-extrabold md:text-xl">
            Available at many Independent Retailers, Specialty and Department
            Stores
          </p>
          <p className="mt-14 mb-10 text-xs leading-relaxed md:text-xl">
            Our footwear brands are sold in stores throughout the country. To
            shop in your area, choose a brand website below and select "Find A
            Store".
          </p>
        </div>
      </Wrapper>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ul className="columns-2 gap-10 lg:columns-3">
          {retailerCategories.map((category) => (
            <li key={category.name} className="mb-6 break-inside-avoid">
              <h3 className="mb-3 flex items-center text-xs font-extrabold md:text-xl">
                <span
                  className="bg-accent mr-2 inline-block size-3"
                  aria-hidden="true"
                />
                {category.name}
              </h3>
              <ul className="ml-6 space-y-2 lg:space-y-4">
                {category.brands.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.url}
                      className="text-xs text-gray-700 hover:underline md:text-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
