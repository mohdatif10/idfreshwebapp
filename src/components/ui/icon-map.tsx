import {
  Briefcase,
  Building2,
  Eye,
  Home,
  Map,
  MessageCircle,
  Newspaper,
  ShoppingBag,
  Soup,
  User,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

export const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  home: Home,
  soup: Soup,
  "shopping-bag": ShoppingBag,
  newspaper: Newspaper,
  user: User,
  briefcase: Briefcase,
  "building-2": Building2,
  eye: Eye,
  "message-circle": MessageCircle,
  map: Map,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  twitter: XIcon,
  linkedin: LinkedinIcon,
};
