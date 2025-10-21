import { Container } from "~/layout/container";
import { Wrapper } from "~/layout/wrapper";

export default function Contact() {
  return (
    <Container id="contact" as="footer">
      <Wrapper className="max-w-4xl">
        <div
          className="border-accent inline-block border-b-2 px-16 pb-3 md:border-b-4 md:px-8 md:pb-6"
          aria-hidden="true"
        >
          <h2 className="text-center text-2xl font-extrabold tracking-wide md:text-5xl">
            Contact Us
          </h2>
        </div>
        <div className="mt-8 space-y-1 text-xs tracking-wide text-gray-700 md:text-xl">
          <address className="not-italic">
            124 W Putnam Ave, Greenwich, CT 06830,{" "}
            <a href="tel:+12036612424" className="hover:underline">
              203-661-2424
            </a>
          </address>
          <p>
            &copy; 2025 Berkshire Hathaway Shoe Holdings
            <span aria-hidden="true"> | </span>
            <a href="/privacy-policy" className="uppercase hover:underline">
              Legal Policy
            </a>
            <span aria-hidden="true"> | </span>
            <a href="/privacy-policy" className="uppercase hover:underline">
              Consumer Policy
            </a>
          </p>
        </div>
      </Wrapper>
    </Container>
  );
}
