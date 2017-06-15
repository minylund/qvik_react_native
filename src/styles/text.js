import { colorStyles } from './colors';
import { typographyStyles } from './typography';

/*
 TODO: Add examples from below elements
  - lineheight
  - spacing, if needed
  - color,
  - fontSize
  - fontWeight
*/

export const textStyles = {
    paragraph: {
      ...typographyStyles.primaryFont,
      color: colorStyles.gray.dark,
      fontSize: 14,
    },
    title: {
      ...typographyStyles.primaryFont,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    subTitle: {
      ...typographyStyles.primaryFont,
      fontWeight: 'bold',
      fontSize: 14,
    },
    data: {
    ...typographyStyles.primaryFont,
      fontSize: 25,
    },
  };
