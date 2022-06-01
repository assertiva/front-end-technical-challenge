import { ReactNode } from "react";

export interface SearchProps {
    filter(value: string): void;
  }

export interface StoresProviderProps {
    children: ReactNode
}

export interface MapMarkerProps {
  name: string;
  revenueSpecial: boolean;
}