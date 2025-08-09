// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export interface PluginRegistry {
  registerPostTypeComponent(typeName: string, component: React.ElementType);
  /**
   * Register a component at the root of the channel view of the app.
   * Accepts a React component. Returns a unique identifier.
   */
  registerRootComponent(typeName: string, component: React.ElementType);

  // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
}
