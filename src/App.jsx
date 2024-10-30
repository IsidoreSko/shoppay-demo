import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { cn } from "./lib/utils";
import { ItemImageCard, OrderSummary } from "./OderSummary";

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
          <ChevronDownIcon className="items-center ml-2 transition-transform duration-200 size-4 shrink-0 text-muted-foreground" />
          <p className="ml-auto text-lg font-bold">$65.00</p>
        </AccordionTrigger>
        <AccordionContent className="px-5 pt-4 border-t">
          <OrderSummary />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export function App() {
  return (
    <main
      className="flex flex-col h-full bg-white lg:flex-row"
      // style={{
      //   "--left-overflow": "4rem",
      //   "--element-size": "600px",
      // }}
    >
      <div
        className=" flex h-full flex-[12] justify-end bg-white"
        style={{
          width: "calc{50% + 4rem}",
        }}
      >
        <div
          className="flex flex-col h-full gap-4"
          style={{
            maxWidth: "512px",
          }}
        >
          <div className="p-4 pt-8">
            <img src="/logo_black.webp" className="h-auto m-auto w-36" />
          </div>
          <div className="border-y border-zinc-300 bg-zinc-100 lg:hidden">
            <ShowOrderSummaryMobile />
          </div>
          <div className="flex flex-col gap-4 px-6">
            <p className="mt-4 text-sm text-center text-zinc-500">
              Express Checkout
            </p>
            <div className="flex flex-row flex-wrap gap-3">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 lg:flex-1">
                <img src="./shoppay.png" className="w-auto h-6" />
              </Button>
              {/* <div className="flex gap-4"> */}
              <Button className="flex-1 w-full bg-amber-400 hover:bg-amber-300">
                <img src="./paypal.svg" className="w-auto h-14" />
              </Button>
              <Button className="flex-1 w-full bg-black hover:bg-zinc-800">
                <img src="./google-pay.svg" className="w-auto h-6" />
              </Button>
              {/* </div> */}
            </div>
            <div className="relative px-6 mt-6">
              <div className="w-full h-px bg-zinc-300" />
              <div className="absolute inset-x-0 bottom-[-9px] flex justify-center">
                <span className="px-2 text-sm bg-white w-fit text-zinc-500">
                  OR
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 px-6 mt-6 ">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <a href="/login" className="ml-auto text-sm underline">
                  Log in
                </a>
              </div>
              <Input placeholder="Email" />
              <div className="flex items-center mt-2 space-x-2">
                <Checkbox id="terms" defaultChecked />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email me with news and offers
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Delevery</h2>
              <div className="relative flex h-14 w-full flex-col gap-0.5 rounded-md  border border-input bg-background px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                <span className="mt-2 text-xs text-zinc-500">
                  Country/Region
                </span>
                <span>United States</span>
                <ChevronDownIcon className="absolute right-2 top-3 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-4 lg:flex-row">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input placeholder="Company (optional)" />
              <Input placeholder="Address (35 characters limit)" />
              <Input placeholder="Apartment, suite, etc. (optional)" />
              <div className="flex flex-col gap-4 lg:flex-row">
                <Input placeholder="City" />
                <Input placeholder="State" />
                <Input placeholder="Zip code" />
              </div>
              <Input placeholder="Phone" />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Text me with news and offers
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Shipping Method</h2>
              <div className="flex flex-col gap-4 lg:px-4">
                <div className="p-4 rounded-md bg-muted text-muted-foreground">
                  Enter your shipping address to view available shipping
                  methods.
                </div>
                <p className="text-sm text-center">
                  You're <b>$85.00</b> away from free shipping
                </p>
                <div className="flex items-center justify-start h-3 px-1 border rounded-full">
                  <div className="w-4/5 h-1 bg-black rounded-full"></div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <ItemImageCard imageUrl="/ac-adapter.webp" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      AC Adapter - 65W | Slim | Carbide
                    </p>
                    <p className="text-sm ">$65.00</p>
                  </div>
                  <Button variant="outline" className="ml-auto w-fit">
                    Add
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <ItemImageCard imageUrl="/ac-adapter.webp" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      AC Adapter - 65W | Slim | Carbide
                    </p>
                    <p className="text-sm ">$65.00</p>
                  </div>
                  <Button variant="outline" className="ml-auto w-fit">
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 px-6 mt-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">Payment</h2>
                <p className="text-sm text-muted-foreground">
                  All transactions are secure and encrypted.
                </p>
              </div>
            </div>
            <PaymentMethod />
            <div className="flex flex-col gap-8 px-6 mt-6 lg:hidden">
              <h2 className="text-2xl font-semibold">Order summary</h2>
              <OrderSummary />
            </div>
          </div>
          <div className="flex flex-col gap-8 px-6 mt-6">
            <Button className="h-16 text-lg">Pay Now</Button>
          </div>
          <div className="flex flex-row flex-wrap gap-2 px-6 my-6 border-t">
            <div className="flex flex-wrap gap-4">
              <a className="text-sm underline" href="#">
                Refund policy
              </a>
              <a className="text-sm underline" href="#">
                Shipping policy
              </a>
              <a className="text-sm underline" href="#">
                Privacy policy
              </a>
              <a className="text-sm underline" href="#">
                Terms of service
              </a>
              <a className="text-sm underline" href="#">
                Contact information
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden flex-[10] flex-col gap-4 bg-muted p-8 lg:flex"> */}
      <div
        className="flex-col hidden gap-4  bg-muted lg:flex"
        style={{
          width: "calc(50% - 4rem)",
        }}
      >
        {/* <div className="max-w-sm p-8"> */}
        <div
          className="fixed max-w-sm p-8 top-8"
          style={{
            maxWidth: "calc(512px - 4rem*2)",
          }}
        >
          {/* </div> */}
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}

const PaymentMethod = () => {
  const [value, setValue] = useState("credit");

  return (
    <Accordion type="single" value={value} onValueChange={setValue}>
      <AccordionItem value="credit">
        <PaymentMethodTrigger
          className="rounded-t-lg"
          enabled={value === "credit"}
        >
          <p>Credit card</p>
          <div className="flex items-center gap-1 ml-auto">
            <img src="/mastercard.svg" className="w-10 h-auto" />
            <img src="/visa.svg" className="w-10 h-auto" />
            <img src="/amex.svg" className="w-10 h-auto" />
            <div className="w-10 border rounded-md aspect-video">+5</div>
          </div>
        </PaymentMethodTrigger>
        <AccordionContent className="flex flex-col gap-4 p-6 border-x bg-accent">
          <Input placeholder="Card number" />
          <Input placeholder="Expiration date (MM/YY)" />
          <Input placeholder="Security code" />
          <Input placeholder="Name on card" />
          <div className="flex items-center mt-2 space-x-2">
            <Checkbox id="terms" defaultChecked />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
            >
              Use shipping address as billing address
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="paypal">
        <PaymentMethodTrigger enabled={value === "paypal"}>
          <p>Paypal</p>
          <img src="/paypal.svg" className="w-10 h-auto ml-auto" />
        </PaymentMethodTrigger>
        <AccordionContent className="flex flex-col gap-4 p-6 border-x bg-accent">
          <div className="p-4 border border-blue-500 border-dashed rounded-md">
            Paypal
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shoppay" className="bg-accent">
        <PaymentMethodTrigger enabled={value === "shoppay"}>
          <p>Shoppay</p>
          <img
            src="/shoppayIndigo.svg"
            className="w-10 h-auto ml-auto border-b rounded-b-lg"
          />
        </PaymentMethodTrigger>
        <AccordionContent className="flex flex-col gap-4 p-6 border-x bg-accent">
          <div className="p-4 border border-blue-500 border-dashed rounded-md">
            Shop Pay
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const PaymentMethodTrigger = ({ enabled, children, className }) => {
  return (
    <AccordionTrigger
      className={cn("justify-start gap-4 px-5 border-x border-t", className, {
        "border-black bg-accent border-b": enabled,
      })}
    >
      <span
        className={cn(
          "flex size-5 items-center justify-center rounded-full border",
          {
            "bg-black": enabled,
          }
        )}
      >
        {enabled ? (
          <span className="size-1.5 rounded-full bg-white"></span>
        ) : null}
      </span>
      {children}
    </AccordionTrigger>
  );
};
