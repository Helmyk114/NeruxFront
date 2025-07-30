import { Tooltip } from "@heroui/react";
import { IconInfoOctagon } from "@tabler/icons-react";

 export function TooltipAtom (): JSX.Element {
  return(
    <Tooltip
    content="Te avisaremos cuando el stock esté por debajo de este valor. El número debe ser en unidades."
    placement="top"
    >
      <IconInfoOctagon className="text-semantic-informacion"/>
    </Tooltip>
  )
 }