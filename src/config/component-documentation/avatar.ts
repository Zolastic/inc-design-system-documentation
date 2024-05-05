import AvatarDemo from "@/components/preview/avatar";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const avatarProps: DocComponentProp[] = [
  {
    component: "Avatar",
    props: [],
  },
  {
    component: "AvatarBadge",
    props: [
      {
        prop: "position",
        type: "'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'",
        description:
          "Specifies the badge's position relative to the avatar. Default is bottomLeft.",
        default: "'bottomLeft'",
      },
    ],
  },
  {
    component: "AvatarGroup",
    props: [
      {
        prop: "limit",
        type: "number",
        description:
          "Specifies the maximum number of avatars to show before showing an overflow indicator.",
      },
    ],
  },
];

const avatarComponentDocumentation: DocComponentDocumentation = {
  url: "avatar",
  componentTitle: "Avatar",
  componentDescription:
    "Avatars can be used to represent people or objects. It supports images, icons, and text.",
  previewCode: `import React from "react";
import {
Avatar,
AvatarFallback,
AvatarGroup,
AvatarGroupList,
AvatarImage,
AvatarOverflowIndicator,
} from "inc-design-system/avatar";

const AvatarDemo = () => {
const data = Array.from({ length: 5 }, (_, i) => ({
    fallback: \`SP\`,
    src: \`https://xsgames.co/randomusers/assets/avatars/female/\${i}.jpg\`,
}));

return (
    <AvatarGroup limit={3}>
        <AvatarGroupList>
            {data.map((item, i) => (
            <Avatar key={i}>
                <AvatarImage src={item.src} alt="userProfile" />
                <AvatarFallback>{item.fallback}</AvatarFallback>
            </Avatar>
            ))}
        </AvatarGroupList>
        <AvatarOverflowIndicator />
    </AvatarGroup>
);
};

export default AvatarDemo;`,
  previewComponent: AvatarDemo,
  usageCodeImport: `import { Avatar, AvatarFallback, AvatarImage } from "inc-design-system/avatar";`,
  usageCode: `<Avatar>
  <AvatarImage
    src="https://xsgames.co/randomusers/assets/avatars/female/0.jpg"
    alt="userProfile"
  />
  <AvatarFallback>SP</AvatarFallback>
</Avatar>`,
  props: avatarProps,
};

export default avatarComponentDocumentation;
