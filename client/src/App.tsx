import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectVortexCore from "./pages/ProjectVortexCore";
import ProjectCyberSentinel from "./pages/ProjectCyberSentinel";
import ProjectVLAN from "./pages/ProjectVLAN";
import ProjectStage from "./pages/ProjectStage";
import ProjectIntegration from "./pages/ProjectIntegration";
import ProjectPhishing from "./pages/ProjectPhishing";
import ProjectEthicalHacking from "./pages/ProjectEthicalHacking";
import ProjectSECS1025 from "./pages/ProjectSECS1025";
import ProjectBabyLab1AD from "./pages/ProjectBabyLab1AD";
import ProjectBabyLab2AD from "./pages/ProjectBabyLab2AD";
import ProjectExamenFinal from "./pages/ProjectExamenFinal";
import ProjectEvaluationFinal from "./pages/ProjectEvaluationFinal";
import ProjectOSSE from "./pages/ProjectOSSE";
import ProjectCyberSentinelV1 from "./pages/ProjectCyberSentinelV1";
import ProjectCahierCharges from "./pages/ProjectCahierCharges";
import ProjectLabsAdditionnels from "./pages/ProjectLabsAdditionnels";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/vortexcore" component={ProjectVortexCore} />
      <Route path="/projects/cybersentinel" component={ProjectCyberSentinel} />
      <Route path="/projects/vlan" component={ProjectVLAN} />
      <Route path="/projects/stage" component={ProjectStage} />
      <Route path="/projects/integration" component={ProjectIntegration} />
      <Route path="/projects/phishing" component={ProjectPhishing} />
      <Route path="/projects/ethical-hacking" component={ProjectEthicalHacking} />
      <Route path="/projects/secs1025" component={ProjectSECS1025} />
      <Route path="/projects/baby-lab-1-ad" component={ProjectBabyLab1AD} />
      <Route path="/projects/baby-lab-2-ad" component={ProjectBabyLab2AD} />
      <Route path="/projects/examen-final" component={ProjectExamenFinal} />
      <Route path="/projects/evaluation-final" component={ProjectEvaluationFinal} />
      <Route path="/projects/osse" component={ProjectOSSE} />
      <Route path="/projects/cybersentinel-v1" component={ProjectCyberSentinelV1} />
      <Route path="/projects/cahier-charges" component={ProjectCahierCharges} />
      <Route path="/projects/labs-additionnels" component={ProjectLabsAdditionnels} />
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
