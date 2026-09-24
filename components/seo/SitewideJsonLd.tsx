import { getOrganizationSchema, getWebSiteSchema } from "./schema";
import { JsonLd } from "./JsonLd";

export function SitewideJsonLd() {
  return <JsonLd schema={[getOrganizationSchema(), getWebSiteSchema()]} />;
}
