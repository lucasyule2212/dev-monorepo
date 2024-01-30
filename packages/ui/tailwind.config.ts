import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import shadcnConfig from "./tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig, shadcnConfig],
};

export default config;
