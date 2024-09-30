## API Report File for "@backstage/plugin-auth-backend-module-okta-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@backstage/backend-plugin-api';
import { OAuthAuthenticator } from '@backstage/plugin-auth-node';
import { OAuthAuthenticatorResult } from '@backstage/plugin-auth-node';
import { PassportOAuthAuthenticatorHelper } from '@backstage/plugin-auth-node';
import { PassportProfile } from '@backstage/plugin-auth-node';
import { SignInResolverFactory } from '@backstage/plugin-auth-node';

// @public (undocumented)
const authModuleOktaProvider: BackendFeature;
export default authModuleOktaProvider;

// @public (undocumented)
export const oktaAuthenticator: OAuthAuthenticator<
  PassportOAuthAuthenticatorHelper,
  PassportProfile
>;

// @public
export namespace oktaSignInResolvers {
  const emailMatchingUserEntityAnnotation: SignInResolverFactory<
    OAuthAuthenticatorResult<PassportProfile>,
    unknown
  >;
}

// Warnings were encountered during analysis:
//
// src/authenticator.d.ts:3:22 - (ae-undocumented) Missing documentation for "oktaAuthenticator".
// src/module.d.ts:2:22 - (ae-undocumented) Missing documentation for "authModuleOktaProvider".
```