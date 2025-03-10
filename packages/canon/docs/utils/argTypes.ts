/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { boxProperties } from '../../src/components/Box/sprinkles.css';
import {
  colorProperties,
  spacingProperties,
} from '../../src/layout/sprinkles.css';

export const listResponsiveValues = (
  value: keyof typeof boxProperties.styles,
) => {
  const values = boxProperties.styles[value];

  if (!values) {
    console.warn(`Value "${value}" not found in boxProperties.styles`);
    return [];
  }

  if ('values' in values) {
    return Object.keys(values.values);
  }

  return [];
};

export const listColorValues = (value: keyof typeof colorProperties.styles) => {
  const values = colorProperties.styles[value];

  if ('values' in values) {
    return Object.keys(values.values);
  }

  return [];
};

export const argTypesSpacing = Object.keys(spacingProperties.styles).reduce<
  Record<string, any>
>((acc, n) => {
  acc[n] = {
    control: 'inline-radio',
    options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  };
  return acc;
}, {});

export const argTypesColor = Object.keys(colorProperties.styles).reduce<
  Record<string, any>
>((acc, n) => {
  acc[n as keyof typeof colorProperties.styles] = {
    control: 'select',
    options: Object.keys(
      colorProperties.styles[n as keyof typeof colorProperties.styles].values,
    ),
  };
  return acc;
}, {});
