import { Container } from "~/layout/container";
import { Wrapper } from "~/layout/wrapper";
import Header from "~/layout/header";
import type { Route } from "./+types/privacy-policy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | Berkshire Hathaway Shoe Holdings" },
    { name: "description", content: "Our privacy policy and data practices" },
  ];
}

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <Container className="min-h-screen pt-32">
        <Wrapper className="max-w-4xl">
          <h1 className="mb-8 text-3xl font-extrabold tracking-wide md:text-5xl">
            Privacy Policy
          </h1>
          <div className="space-y-4 text-left text-gray-700">
            <p className="text-base leading-relaxed md:text-lg">
              Berkshire Hathaway Shoe Holdings, Inc. and its affiliates provide
              content and materials on this website for general informational
              purposes only. The content and materials are subject to change
              without notice. Berkshire Hathaway Shoe Holdings does not provide
              any warranty or guarantee as to the accuracy, timeliness,
              performance, completeness or suitability of the information and
              materials found or offered on this website for any particular
              purpose.
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              Users of this website may not publish, transmit, modify, create
              derivative works, or in any manner exploit, any of content and
              materials on this website, in whole or in part, without the
              express written permission of Berkshire Hathaway Shoe Holdings.
            </p>
          </div>
        </Wrapper>
      </Container>
    </main>
  );
}
