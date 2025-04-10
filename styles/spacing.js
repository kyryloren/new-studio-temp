'use client'

import { css } from 'styled-components'
import media, { breakpoints, pxCutOff } from './media'

const spacing = css`
  --fluid-min-width: ${breakpoints.phoneS};
  --fluid-max-width: ${breakpoints.desktopL};

  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );

  @media screen and (min-width: ${breakpoints.desktopL}) {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }

  --fc-3xs-min: (var(--fc-s-min) * 0.25);
  --fc-3xs-max: (var(--fc-s-max) * 0.25);

  --fc-2xs-min: (var(--fc-s-min) * 0.5);
  --fc-2xs-max: (var(--fc-s-max) * 0.5);

  --fc-xs-min: (var(--fc-s-min) * 0.75);
  --fc-xs-max: (var(--fc-s-max) * 0.75);

  --fc-s-min: (var(--f-0-min, 18));
  --fc-s-max: (var(--f-0-max, 22));

  --fc-m-min: (var(--fc-s-min) * 1.5);
  --fc-m-max: (var(--fc-s-max) * 1.5);

  --fc-l-min: (var(--fc-s-min) * 2);
  --fc-l-max: (var(--fc-s-max) * 2);

  --fc-xl-min: (var(--fc-s-min) * 3);
  --fc-xl-max: (var(--fc-s-max) * 3);

  --fc-2xl-min: (var(--fc-s-min) * 4);
  --fc-2xl-max: (var(--fc-s-max) * 4);

  --fc-3xl-min: (var(--fc-s-min) * 6);
  --fc-3xl-max: (var(--fc-s-max) * 6);

  /* T-shirt sizes */
  --space-3xs: calc(
    ((var(--fc-3xs-min) / 16) * 1rem) +
      (var(--fc-3xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
  );
  --space-2xs: calc(
    ((var(--fc-2xs-min) / 16) * 1rem) +
      (var(--fc-2xs-max) - var(--fc-2xs-min)) * var(--fluid-bp)
  );
  --space-xs: calc(
    ((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-xs-min)) *
      var(--fluid-bp)
  );
  --space-s: calc(
    ((var(--fc-s-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-s-min)) *
      var(--fluid-bp)
  );
  --space-m: calc(
    ((var(--fc-m-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-m-min)) *
      var(--fluid-bp)
  );
  --space-l: calc(
    ((var(--fc-l-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-l-min)) *
      var(--fluid-bp)
  );
  --space-xl: calc(
    ((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-xl-min)) *
      var(--fluid-bp)
  );
  --space-2xl: calc(
    ((var(--fc-2xl-min) / 16) * 1rem) +
      (var(--fc-2xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
  );
  --space-3xl: calc(
    ((var(--fc-3xl-min) / 16) * 1rem) +
      (var(--fc-3xl-max) - var(--fc-3xl-min)) * var(--fluid-bp)
  );

  /* One-up pairs */
  --space-3xs-2xs: calc(
    ((var(--fc-3xs-min) / 16) * 1rem) +
      (var(--fc-2xs-max) - var(--fc-3xs-min)) * var(--fluid-bp)
  );
  --space-2xs-xs: calc(
    ((var(--fc-2xs-min) / 16) * 1rem) + (var(--fc-xs-max) - var(--fc-2xs-min)) *
      var(--fluid-bp)
  );
  --space-xs-s: calc(
    ((var(--fc-xs-min) / 16) * 1rem) + (var(--fc-s-max) - var(--fc-xs-min)) *
      var(--fluid-bp)
  );
  --space-s-m: calc(
    ((var(--fc-s-min) / 16) * 1rem) + (var(--fc-m-max) - var(--fc-s-min)) *
      var(--fluid-bp)
  );
  --space-m-l: calc(
    ((var(--fc-m-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-m-min)) *
      var(--fluid-bp)
  );
  --space-l-xl: calc(
    ((var(--fc-l-min) / 16) * 1rem) + (var(--fc-xl-max) - var(--fc-l-min)) *
      var(--fluid-bp)
  );
  --space-xl-2xl: calc(
    ((var(--fc-xl-min) / 16) * 1rem) + (var(--fc-2xl-max) - var(--fc-xl-min)) *
      var(--fluid-bp)
  );
  --space-2xl-3xl: calc(
    ((var(--fc-2xl-min) / 16) * 1rem) +
      (var(--fc-3xl-max) - var(--fc-2xl-min)) * var(--fluid-bp)
  );

  /* Custom pairs */
  --space-s-l: calc(
    ((var(--fc-s-min) / 16) * 1rem) + (var(--fc-l-max) - var(--fc-s-min)) *
      var(--fluid-bp)
  );
`

export default spacing
