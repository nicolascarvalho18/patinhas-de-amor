import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Adoption from "./pages/Adoption";
import PetDetail from "./pages/PetDetail";
import HowItWorks from "./pages/HowItWorks";
import Donation from "./pages/Donation";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";

function Router() {
  return (
    <Switch>
      <Route path={"/?"}  component={Home} />
      <Route path={"/adotar"} component={Adoption} />
      <Route path={"/pet/:id"} component={PetDetail} />
      <Route path={"/como-funciona"} component={HowItWorks} />
      <Route path={"/donation"} component={Donation} />
      <Route path={"/sobre"} component={About} />
      <Route path={"/depoimentos"} component={Testimonials} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
