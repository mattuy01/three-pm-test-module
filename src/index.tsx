import * as React from 'react';

interface ThingProp {
  text: string;
}

// Delete me
export const Thing: React.FC<ThingProp> = props => {
  return <div>{props.text}</div>;
};
