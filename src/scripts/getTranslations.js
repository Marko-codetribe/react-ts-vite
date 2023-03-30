import { parse } from "csv-parse"
import { createReadStream, writeFileSync } from "fs"

import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const supportedLanguages = ["en", "de"]

async function main() {
  const records = []
  createReadStream(__dirname + "/translations.csv")
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        trim: true,
        skip_lines_with_empty_values: true,
        quote: true,
        skip_empty_lines: true,
        relax_quotes: true,
      })
    )
    .on("data", function (row) {
      records.push(row)
    })
    .on("error", function (error) {
      console.error(error.message)
    })
    .on("end", function () {
      parseAndMoveTranslations(records)
    })
  // eslint-disable-next-line no-console
  console.log("radsd. iii")
}

main()

parseAndMoveTranslations()

////////////////////
// HELPER FUNCTIONS
////////////////////

function parseAndMoveTranslations(records) {
  // eslint-disable-next-line no-console
  console.log("radiii")
  const translations = {
    // will look like
    // "en.hello": "hello",
    // "de.hello": "hallo",
  }

  for (let record of records) {
    record.key = record.key.trim()
    if (!record.key) continue

    let translationKey = `${record.key}`

    for (let locale of supportedLanguages) {
      //                  "en.hello"              =  "hello" || "hello [en]"
      translations[`${locale}.${translationKey}`] =
        record[locale] || `${record.en} [${locale}]`
    }
  }
  const ExpandedTranslations = expand(translations)
  // ExpandedTranslations will look like:
  // {
  //    en: { hello: "hello" },
  //    de: { hello: "hallo" }
  // }

  for (let locale of supportedLanguages) {
    // write translations to the directory
    writeFileSync(
      `./i18n/locales/${locale}.json`,
      JSON.stringify(ExpandedTranslations[locale], null, 4),
      { encoding: "utf8", flag: "w" }
    )
  }
}

function parseDotNotation(str, val, obj) {
  var currentObj = obj,
    keys = str.split("."),
    i,
    l = Math.max(1, keys.length - 1),
    key

  for (i = 0; i < l; ++i) {
    key = keys[i]
    currentObj[key] = currentObj[key] || {}
    currentObj = currentObj[key]
  }

  currentObj[keys[i]] = val
  delete obj[str]
}

function expand(obj) {
  for (var key in obj) {
    if (key.indexOf(".") !== -1) {
      parseDotNotation(key, obj[key], obj)
    }
  }

  return obj
}
