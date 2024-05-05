import React from "react";
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
    fallback: `SP`,
    src: `https://xsgames.co/randomusers/assets/avatars/female/${i}.jpg`,
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

export default AvatarDemo;
