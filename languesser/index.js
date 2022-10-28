import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { franc } from 'franc';
const langs = require('langs');

const langString  = process.argv[2];
// console.log(langString);
const langCode = franc(langString)
const langObject = langs.where("3", `${langCode}`)

// console.log(langCode);
// console.log(langs.where("3", `${langCode}`));
console.log(`Best guess here is ${langObject.name}`)

// console.log(franc(langString))
