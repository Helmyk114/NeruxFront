import { Tooltip } from "@heroui/react";
import { IconInfoOctagon } from "@tabler/icons-react";

interface TooltipAtomProps {
  content?: string;
}

 export function TooltipAtom ({ content }: TooltipAtomProps): JSX.Element {
  return(
    <Tooltip
    content={content}
    placement="top"
    >
      <IconInfoOctagon className="text-semantic-informacion"/>
    </Tooltip>
  )
 }