import React from "react";
import Badge from "inc-design-system/badge";

const BadgeDemo = () => {
  return (
    <div>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="translucent">Light</Badge>
      <Badge variant="primaryAccent">Dark</Badge>
    </div>
  );
};

export default BadgeDemo;
