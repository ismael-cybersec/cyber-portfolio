import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Router, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectStage from "./pages/ProjectStage";
import ProjectVortexCore from "./pages/ProjectVortexCore";
import ProjectEthicalHacking from "./pages/ProjectEthicalHacking";
import ProjectPhishing from "./pages/ProjectPhishing";
import ProjectActiveDirectoryLabs from "./pages/ProjectActiveDirectoryLabs";
import ProjectYodeck from "./pages/ProjectYodeck";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/stage" component={ProjectStage} />
        <Route path="/projects/vortexcore" component={ProjectVortexCore} />
        <Route path="/projects/ethical-hacking" component={ProjectEthicalHacking} />
        <Route path="/projects/phishing" component={ProjectPhishing} />
        <Route path="/projects/active-directory-labs" component={ProjectActiveDirectoryLabs} />
        <Route path="/projects/yodeck" component={ProjectYodeck} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
