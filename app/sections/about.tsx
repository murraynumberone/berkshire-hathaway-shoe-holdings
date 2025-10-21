import { Container } from "~/layout/container";
import { Wrapper } from "~/layout/wrapper";
import { companies } from "~/data/companies";

export default function About() {
  return (
    <Container id="about" className="bg-primary">
      <Wrapper>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div
            className="border-accent inline-block border-b-2 px-16 pb-3 md:border-b-4 md:px-8 md:pb-6"
            aria-hidden="true"
          >
            <h2 className="text-2xl font-extrabold tracking-wide text-white md:text-5xl">
              About Us
            </h2>
          </div>
          <p className="mt-6 mb-16 text-xs leading-relaxed text-white md:text-xl">
            Berkshire Hathaway Shoe Holdings is the parent company of H. H.
            Brown and Justin Brands, two well-established, longstanding
            companies that respectively operate a variety of footwear brands.
          </p>
        </div>
      </Wrapper>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ul
          role="list"
          className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-8"
        >
          {companies.map((company) => (
            <li key={company.name}>
              <div className="-mx-4 sm:-mx-4 lg:mx-0">
                <img
                  src={company.imageUrl}
                  alt={`${company.name} heritage`}
                  className="border-accent aspect-auto w-full border-t-8 object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xs leading-relaxed font-extrabold text-white md:text-2xl">
                  {company.name}
                </h3>
                <div className="mt-4 space-y-4">
                  {company.history.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-xs leading-relaxed text-white md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
