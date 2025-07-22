import type { Selection } from "@heroui/react";
import { Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";

interface AccordionItemProps {
  key: string;
  ariaLabel: string;
  title: React.ReactNode;
  isDisabled?: boolean; 
  content: React.ReactNode;
}

interface CustomAccordionProps {
  items: AccordionItemProps[];
  defaultSelectedKeys?: Selection;
  className?: string;
}

export const Acordion = ({
  items,
  defaultSelectedKeys = new Set(["1"]),
  className,
}: CustomAccordionProps) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(defaultSelectedKeys);

  return (
    <Accordion
      variant="splitted"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className={`mb-2 ${className}`}
      radioGroup=""
      showDivider={false}
      itemClasses={{
        base: "bg-background-three",
      }}

    >
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.ariaLabel}
          title={item.title}
          isDisabled={item.isDisabled}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};