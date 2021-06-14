import React from "react";
import { Section } from "./styles";

interface Props {
  title: string;
  content: string;
}

const Main: React.FC<Props> = (props) => {
  return (
    <Section>
      <h4>Title: {props.title}</h4>
      <div>Content: {props.content}</div>
    </Section>
  );
};

export default Main;
