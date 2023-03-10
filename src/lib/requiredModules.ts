import { webpack } from "replugged";
import * as Utils from "./utils";
import * as Types from "../types";
export const ClientThemesExperimentModule = webpack.getBySource(/"Client Themes"/);
export const ClientThemesExperimentConfig = webpack.getExportsForProps(
  ClientThemesExperimentModule,
  ["getCurrentConfig", "definition"],
) as Types.ClientThemesExperimentConfig;
export const TimeoutModule = webpack.getModule((m) =>
  Utils.prototypeChecker(m?.exports, ["start", "stop", "isStarted"]),
);
export const Timeout = Object.values(TimeoutModule).find(
  (m) =>
    ["start", "stop", "isStarted"].every(
      (proto) => m?.prototype?.[proto],
    ) as unknown as Types.Timeout,
);
export const DiscordConstantsModule = webpack.getBySource(
  /command:"giphy"/,
) as unknown as Types.DefaultTypes.ObjectExports;
export const DiscordConstants = {
  Permissions: webpack.getExportsForProps(DiscordConstantsModule, [
    "ADMINISTRATOR",
    "MANAGE_GUILD",
  ]),
};
export const AccountSwitcherStrings = webpack.getBySource(
  /multiaccount_cta_tooltip_seen/,
) as unknown as Types.DefaultTypes.ObjectExports;
export const PermissionStore = webpack.getByProps(
  "getChannelPermissions",
) as unknown as Types.PermissionStore;
export const ElectronModule = webpack.getByProps("setBadge") as unknown as Types.ElectronModule;
export const StreamPreviewStore = webpack.getByProps(
  "getPreviewURL",
) as unknown as Types.StreamPreviewStore;
export const CurrentUserIdle = webpack.getByProps(
  "getIdleSince",
  "isIdle",
  "isAFK",
) as unknown as Types.CurrentUserIdle;
export const SpotifyProtocoalStore = webpack.getBySource(
  /"SPOTIFY_PROFILE_UPDATE"/,
) as unknown as Types.GenericModule;
export const SpotifyPremiumCheck = webpack.getBySource(
  /"spotify account is not premium"/,
) as unknown as Types.GenericModule;
