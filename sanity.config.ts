import { getDefaultDocumentNode } from './structure';
import { myTheme } from "./theme";
import { DefaultDocument, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "./app/components/StudioNavbar";
import Logo from "./app/components/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "NEVIL_CONTENT_STUDIO",
  title: "NEVIL's CONTENT STUDIO",

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
