// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type { Store, Action } from "redux";

import type { GlobalState } from "@mattermost/types/store";

import manifest from "@/manifest";
import type { PluginRegistry } from "@/types/mattermost-webapp";
import "./custom_style.css";

export default class Plugin {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  public async initialize(
    registry: PluginRegistry,
    store: Store<GlobalState, Action<Record<string, unknown>>>
  ) {
    // @see https://developers.mattermost.com/extend/plugins/webapp/reference/
    // 例: 「Free Edition」ラベルを表示しているコンポーネント（例：FreeVersionLabel）を上書き
    registry.registerRootComponent(
      "ProductBrandingTeamEditionContainer", // ここは実際のコンポーネント識別子に合わせる必要があります
      () => {
        return null; // 何もレンダリングせずに非表示にする
      }
    );
  }
}

declare global {
  interface Window {
    registerPlugin(pluginId: string, plugin: Plugin): void;
  }
}

window.registerPlugin(manifest.id, new Plugin());
