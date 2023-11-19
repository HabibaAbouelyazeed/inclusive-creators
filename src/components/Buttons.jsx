import { Button } from "@material-tailwind/react";

export function ButtonDefault({ Name, onClick, classname, disabled }) {
  return (
    <Button onClick={onClick} className={classname} disabled={disabled}>
      {Name}
    </Button>
  );
}
