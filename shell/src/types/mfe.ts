export interface MFEConfig {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  port: number;
  color: string;
  colorDim: string;
  colorBorder: string;
  textColor: string;
  tag: string;
  tagColor: string;
  tagText: string;
  topics: string[];
  icon: string;
  gradient: string;
  number: string;
}

export type MFEStatus = "checking" | "online" | "offline";
