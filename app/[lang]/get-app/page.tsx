import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { mobileAppStoreUrl, mobileGooglePlayUrl } from "@/config/mobile-page";
import { getLocale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

/**
 * Device-aware smart link for the Mobile app's QR code — scanned on any
 * device, it lands here and gets bounced straight to the right store.
 */
export default async function GetAppPage() {
  const userAgent = (await headers()).get("user-agent") ?? "";
  const locale = await getLocale();

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    redirect(mobileAppStoreUrl);
  }
  if (/Android/i.test(userAgent)) {
    redirect(mobileGooglePlayUrl);
  }
  redirect(withLocale("/platform/mobile", locale));
}
