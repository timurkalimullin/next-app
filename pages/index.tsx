import React from "react";
import { Htag, Button, Ptag, Tag, Rating } from "../components";
import { withLayout } from "../Layout/Layout";

function Home() {
  const [r, setR] = React.useState(2);
  return (
    <div>
      <Htag tag="h3">Hello</Htag>
      <Button arrow="right">Btn</Button>
      <Button appearance="ghost" arrow="down">
        Btn
      </Button>
      <Ptag>Paragraph</Ptag>
      <Tag color="green" size="s">
        Tag component
      </Tag>
      <Tag color="primary" size="m">
        Tag component
      </Tag>
      <Rating rating={3} />
      <Rating isEditable rating={r} setRating={setR} />
    </div>
  );
}

export default withLayout(Home);
