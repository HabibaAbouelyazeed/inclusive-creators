/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

export function ButtonDefault({ Name, onclick, classname }) {
  return (
    <Button onClick={() => onclick()} className={classname}>
      {Name}
    </Button>
  );
}
