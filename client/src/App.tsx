import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectStage from "./pages/ProjectStage";
import ProjectVortexCore from "./pages/ProjectVortexCore";
import ProjectEthicalHacking from "./pages/ProjectEthicalHacking";
import ProjectPhishing from "./pages/ProjectPhishing";
import ProjectActiveDirectoryLabs from "./pages/ProjectActiveDirectoryLabs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/stage" component={ProjectStage} />
      <Route path="/projects/vortexcore" component={ProjectVortexCore} />
      <Route path="/projects/ethical-hacking" component={ProjectEthicalHacking} />
      <Route path="/projects/phishing" component={ProjectPhishing} />
      <Route path="/projects/active-directory-labs" component={ProjectActiveDirectoryLabs} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
