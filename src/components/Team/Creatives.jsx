import React from "react";
import Card from "./Card/Card";
import { creativeHeads, creatives } from "./Card/initdata";

export default function Creatives() {
  return (
    <>
      {creativeHeads.map((data) => (
        <Card
          id={data.id}
          name={data.Name}
          image={data.Image}
          pos={data.Position}
          insta={data.Instagram}
          git={data.Github}
          lin={data.LinkedIn}
          email={data.Email}
        />
      ))}
      {creatives.map((data) => (
        <Card
          id={data.id}
          name={data.Name}
          image={data.Image}
          pos={data.Position}
          insta={data.Instagram}
          git={data.Github}
          lin={data.LinkedIn}
          email={data.Email}
        />
      ))}
    </>
  );
}
