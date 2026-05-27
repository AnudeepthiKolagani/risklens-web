import { Bot, LayoutDashboard, ShieldCheck, Sparkles, TrendingUp, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ScenarioItem {
  title: string;
  impact: string;
  risk: string;
  alert: string;
}

export const featureHighlights: FeatureItem[] = [
  {
    title: "Portfolio Risk Analytics",
    description: "Spot concentration, volatility, and tail risk across holdings with AI-normalized confidence scores.",
    icon: ShieldCheck,
  },
  {
    title: "AI Investment Insights",
    description: "Receive predictive signals, sector rotation guidance, and risk-aware opportunity scoring.",
    icon: Sparkles,
  },
  {
    title: "Scenario Simulation",
    description: "Test downside outcomes with macro, policy, and event-driven scenarios in seconds.",
    icon: TrendingUp,
  },
  {
    title: "Sector Exposure Analysis",
    description: "Understand portfolio sensitivity by sector, theme, geography and market regime.",
    icon: Globe,
  },
  {
    title: "Interactive Financial Dashboards",
    description: "Dive into real-time risk maps, heatmaps, stress curves and multi-factor dashboards.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Copilot Chat Assistant",
    description: "Ask questions, decode risk drivers, and get concise, compliant portfolio advice.",
    icon: Bot,
  },
];

export const scenarioCards: ScenarioItem[] = [
  {
    title: "Tech Crash",
    impact: "-18.4%",
    risk: "High",
    alert: "High concentration in growth and cloud exposure.",
  },
  {
    title: "Interest Rate Hike",
    impact: "-9.2%",
    risk: "Moderate",
    alert: "Bond and rate-sensitive sectors are under pressure.",
  },
  {
    title: "Global Recession",
    impact: "-14.7%",
    risk: "Elevated",
    alert: "Defensive positioning and liquidity scenarios matter most.",
  },
];

export const footerLinks = [
  { label: "Platform", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Scenario", href: "#scenario" },
  { label: "AI Copilot", href: "#copilot" },
];
