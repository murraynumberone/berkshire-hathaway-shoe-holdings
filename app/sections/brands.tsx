import LogoCloud from "~/components/logo-cloud";
import { Container } from "~/layout/container";
import { Wrapper } from "~/layout/wrapper";

export default function Brands() {
  return (
    <Container id="brands" className="bg-stone-50">
      <Wrapper>
        <div
          className="border-accent inline-block border-b-2 px-16 pb-3 md:border-b-4 md:px-8 md:pb-6"
          aria-hidden="true"
        >
          <h2 className="text-primary text-2xl font-extrabold tracking-wide md:text-5xl">
            Our Brands
          </h2>
        </div>
        <p className="mt-6 mb-16 text-xs leading-relaxed md:text-xl">
          Celebrated for their innovative designs, fine craftsmanship and utmost
          commitment to quality and comfort, our trusted brands have earned a
          loyal following among customers worldwide.
        </p>
      </Wrapper>
      <LogoCloud />
    </Container>
  );
}
