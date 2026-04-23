export type ImpactMetric = {
  value: string;
  label: string;
  note: string;
};

export const impactMetrics: ImpactMetric[] = [
  { value: "650K+", label: "YouTube Subscribers", note: "@swizzmagik" },
  { value: "600+", label: "AI Agents Managed", note: "Production fleet" },
  { value: "$30M", label: "DeFi TVL Scaled", note: "Year-one outcome" },
  { value: "$200M", label: "Tracked for NASA / DoD", note: "Cost reporting system" },
  { value: "2,500+", label: "Shopify Merchants Served", note: "SaaS platform" },
  { value: "15+", label: "Years Shipping", note: "Aerospace → fintech → AI" },
];
