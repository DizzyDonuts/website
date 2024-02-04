const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'Auto detailing in Strongsville, Ohio | Dizzy Donutz',
    description: `The Ultimate Detailing Makeover! ${url.replace('https://', '').replace('http://', '')}`,
    url,
    image:
      'https://images.ctfassets.net/8zvqegep4uuw/6HhdAB3AAUDj65T7phr0xN/ec8d0c58e24e0c15c228e835b3a33283/DE5A4D9F-12A4-493F-9B28-AA95744A7B9C.jpeg',
  },
  icon: {
    light:
      'https://images.ctfassets.net/8zvqegep4uuw/5jk1cMU9fxlguLLpn1LXgl/5dfd9f0acb938ce53781bfce4cc76173/favicon-32x32.svg',
    dark: 'https://images.ctfassets.net/8zvqegep4uuw/5jk1cMU9fxlguLLpn1LXgl/5dfd9f0acb938ce53781bfce4cc76173/favicon-32x32.svg',
    width: 66,
    height: 64,
  },
};
