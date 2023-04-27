/**
 * Do not edit directly
 * Generated on Thu, 27 Apr 2023 17:43:49 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "green-ultradark": DesignToken,
    "green-darkgreen": DesignToken,
    "green-normal": DesignToken,
    "green-light": DesignToken,
    "blue-normal": DesignToken,
    "white-normal": DesignToken,
    "black-normal": DesignToken
  },
  "font": {
    "text-style-1": DesignToken
  },
  "typography": {
    "text-style-1": {
      "fontSize": DesignToken,
      "textDecoration": DesignToken,
      "fontFamily": DesignToken,
      "fontWeight": DesignToken,
      "fontStyle": DesignToken,
      "fontStretch": DesignToken,
      "letterSpacing": DesignToken,
      "lineHeight": DesignToken,
      "paragraphIndent": DesignToken,
      "paragraphSpacing": DesignToken,
      "textCase": DesignToken
    }
  }
}