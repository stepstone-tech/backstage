## API Report File for "@backstage/frontend-app-api"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ConfigApi } from '@backstage/core-plugin-api';
import { createApp as createApp_2 } from '@backstage/frontend-defaults';
import { CreateAppFeatureLoader as CreateAppFeatureLoader_2 } from '@backstage/frontend-defaults';
import { ExternalRouteRef } from '@backstage/frontend-plugin-api';
import { FrontendModule } from '@backstage/frontend-plugin-api';
import { FrontendPlugin } from '@backstage/frontend-plugin-api';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@backstage/frontend-plugin-api';
import { SubRouteRef } from '@backstage/frontend-plugin-api';

// @public @deprecated (undocumented)
export const createApp: typeof createApp_2;

// @public @deprecated (undocumented)
export type CreateAppFeatureLoader = CreateAppFeatureLoader_2;

// @public
export type CreateAppRouteBinder = <
  TExternalRoutes extends {
    [name: string]: ExternalRouteRef;
  },
>(
  externalRoutes: TExternalRoutes,
  targetRoutes: PartialKeys<
    TargetRouteMap<TExternalRoutes>,
    KeysWithType<TExternalRoutes, ExternalRouteRef<any>>
  >,
) => void;

// @public
export function createSpecializedApp(options?: {
  features?: FrontendFeature[];
  config?: ConfigApi;
  bindRoutes?(context: { bind: CreateAppRouteBinder }): void;
}): {
  createRoot(): JSX_2.Element;
};

// @public (undocumented)
export type FrontendFeature =
  | FrontendPlugin
  | FrontendModule
  | {
      $$type: '@backstage/ExtensionOverrides';
    }
  | {
      $$type: '@backstage/BackstagePlugin';
    };
```
