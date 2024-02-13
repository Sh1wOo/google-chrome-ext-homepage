import "./App.css";
import Clock from "./components/clock/clock";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { GearIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet";
import { Input } from "./components/ui/input";
import { useStore } from "./lib/settings.store";
import { Label } from "@radix-ui/react-label";

function App() {
  const name = useStore((state) => state.name);
  const updateName = useStore((state) => state.updateName);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-key">
        <div className="h-[100vh] flex justify-center items-center">
          <div className="py-2 text-center">
            <h1 className="text-xl">Hello, {name}</h1>
            <Clock />
          </div>
          <div className="absolute bottom-4 right-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-[50px] h-[50px] rounded-full">
                  <GearIcon className="w-[40px] h-[40px]" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                  <SheetDescription>
                    There you can change some on the home page.
                  </SheetDescription>
                  <div className="pt-2">
                    <Label htmlFor="terms" className="text-sm py-2">Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => updateName(e.target.value)}
                    />
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
