import { Htag, Button, Ptag, Tag } from "../components";

export default function Home() {
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
    </div>
  );
}
