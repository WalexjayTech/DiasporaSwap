import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Features",
    items: [
      {
        label: "Trade",
        href: "#",
      },
      {
        label: "Farms",
        href: "#",
      },
      {
        label: "Pool",
        href: "#",
      },
      {
        label: "NFT",
        href: "#",
      },
      {
        label: "Launchpad",
        href: "#",
      },
    ],
  },
];


export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/marshallcowell/status/1486137494131326978?s=21&t=gX2eGWHwAEKSZLI66odxvw",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/africandiasporaworld",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/p/CZc0M2Kv70H/?igshid=YmMyMTA2M2Y=",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/PUngNdaB",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
