import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { OrderSummary } from "./OderSummary";

const ShowOrderSummaryMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Accordion type="single" value={open ? "order-summary" : ""}>
      <AccordionItem value="order-summary">
        <AccordionTrigger
          className="justify-start px-5"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "Hide" : "Show"} order summary
          <ChevronDownIcon className="size-4 ml-2 items-center shrink-0 text-muted-foreground transition-transform duration-200" />
          <p className="ml-auto text-lg font-bold">$65.00</p>
        </AccordionTrigger>
        <AccordionContent className="border-t px-5 pt-4">
          <OrderSummary />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export function App() {
  return (
    <main className="h-full bg-white">
      <div className="p-4">
        <img src="/logo_black.webp" className="m-auto h-auto w-32" />
      </div>
      <div className="bg-zinc-100 border-y border-zinc-300">
        <ShowOrderSummaryMobile />
      </div>
    </main>
  );
}
