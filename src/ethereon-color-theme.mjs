import { readFileSync, writeFileSync } from 'fs';
import * as jt from 'json-templater'

const color_base = JSON.parse(readFileSync('src/base/src/base.json', 'utf8'));

const theme_base = JSON.parse(readFileSync('src/themes/ethereon-color-theme.json', 'utf8'));

const color_theme = jt.object(theme_base, color_base);

writeFileSync('themes/ethereon-color-theme.json', JSON.stringify(color_theme, null, 4));