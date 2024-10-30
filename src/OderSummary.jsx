import { CircleHelp } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export const ItemImageCard = ({ quantity = 0, imageUrl }) => {
  return (
    <div className="relative border rounded-md size-16 border-zinc-100 ">
      <img src={imageUrl} alt="ac adapter" className="size-full" />
      {quantity ? (
        <span className="absolute flex items-center justify-center text-xs text-white rounded-full -right-2 -top-2 size-5 bg-black/50">
          1
        </span>
      ) : null}
    </div>
  );
};

export const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <ItemImageCard imageUrl="/ac-adapter.webp" quantity={1} />
        {/* <div className="relative p-1 border rounded-md size-16 border-zinc-300">
          <img src="/ac-adapter.webp" alt="ac adapter" className="size-full" />
          <span className="absolute flex items-center justify-center text-xs text-white rounded-full -right-2 -top-2 size-5 bg-black/50">
            1
          </span>
        </div> */}
        <p className="text-sm">AC Adapter - 65W | Slim | Carbide</p>
        <p className="ml-auto text-sm">$65.00</p>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Discount code or gift card" />
        <Button disabled>Apply</Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm">Subtotal (1 item)</p>
          <p className="ml-auto text-sm">$65.00</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm">Shipping</p>
          <CircleHelp size={16} />
          <p className="ml-auto text-sm text-zinc-500">Entering address</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">Total</p>
          <p className="ml-auto text-sm font-light text-zinc-500">USD</p>
          <p className="text-lg font-bold">$65.00</p>
        </div>
      </div>
    </div>
  );
};
