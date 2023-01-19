const color = {
  primary: '#F03E3E',
  secondary: '#FF6B6B',
  hover: '#C92A2A',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#ADB5BD',
  border: '#DEE2E6'
};

const size = {
  mobile: 576,
  tablet: 992
};

const theme = {
  primaryColor: `${color.primary}`,
  secondaryColor: `${color.secondary}`,
  hoverColor: `${color.hover}`,
  blackColor: `${color.black}`,
  whiteColor: `${color.white}`,
  grayColor: `${color.gray}`,
  borderColor: `${color.border}`,
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.mobile + 1}px) and (max-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.tablet + 1}px)`
};

export default theme;
