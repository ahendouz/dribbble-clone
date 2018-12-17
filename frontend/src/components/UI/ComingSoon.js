import React from "react";
import { HeadingPrimary } from "../../styles/Heading";

import { ReactComponent as ComingSoonSvg } from "../../svgs/coming-soon.svg";
import { Container } from "../Errors/ErrorPage";

const ComingSoon = () => {
  return (
    <Container>
      <HeadingPrimary>Coming Soon.</HeadingPrimary>
      <p>We are working on that page and soon it will be available</p>
      <ComingSoonSvg />
    </Container>
  );
};
export default ComingSoon;

