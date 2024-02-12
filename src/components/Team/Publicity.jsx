import React from "react";
import Card from "./Card/Card";
import { pubs, pubsHeads } from "./Card/initdata";

export default function Publicity() {
  return (
    <>
      {pubsHeads.map((data) => (
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
      {pubs.map((data) => (
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
