import { readdirSync, readFileSync, writeFileSync } from 'fs';
import * as jt from 'json-templater'

const color_base = JSON.parse(readFileSync('src/base/src/base.json', 'utf8'));

for (const theme of readdirSync('src/themes').filter((file) => file.endsWith('.json'))) {
    const theme_base = JSON.parse(readFileSync(`src/themes/${theme}`, 'utf8'));
    const color_theme = jt.object(theme_base, color_base);

    writeFileSync(`themes/${theme}`, JSON.stringify(color_theme, null, 4));
}
