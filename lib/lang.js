import { format } from 'date-fns';
import {
  cs,
  da,
  de,
  el,
  enUS,
  es,
  fi,
  fr,
  id,
  ja,
  nb,
  nl,
  pl,
  pt,
  ro,
  ru,
  sv,
  tr,
  uk,
  zhCN,
  zhTW,
} from 'date-fns/locale';
import enMessages from 'lang-compiled/en-US.json';
import nlMessages from 'lang-compiled/nl-NL.json';
import zhCNMessages from 'lang-compiled/zh-CN.json';
import zhTWMessages from 'lang-compiled/zh-TW.json';
import trTRMessages from 'lang-compiled/tr-TR.json';
import ruRUMessages from 'lang-compiled/ru-RU.json';
import deDEMessages from 'lang-compiled/de-DE.json';
import jaMessages from 'lang-compiled/ja-JP.json';
import esMXMessages from 'lang-compiled/es-MX.json';
import frMessages from 'lang-compiled/fr-FR.json';
import mnMNMessages from 'lang-compiled/mn-MN.json';
import daMessages from 'lang-compiled/da-DK.json';
import svMessages from 'lang-compiled/sv-SE.json';
import grMessages from 'lang-compiled/el-GR.json';
import foMessages from 'lang-compiled/fo-FO.json';
import ptMessages from 'lang-compiled/pt-PT.json';
import roMessages from 'lang-compiled/ro-RO.json';
import nbNOMessages from 'lang-compiled/nb-NO.json';
import idMessages from 'lang-compiled/id-ID.json';
import ukMessages from 'lang-compiled/uk-UA.json';
import fiMessages from 'lang-compiled/fi-FI.json';
import csMessages from 'lang-compiled/cs-CZ.json';
import plMessages from 'lang-compiled/pl-PL.json';

export const messages = {
  'en-US': enMessages,
  'nl-NL': nlMessages,
  'zh-CN': zhCNMessages,
  'zh-TW': zhTWMessages,
  'de-DE': deDEMessages,
  'ru-RU': ruRUMessages,
  'tr-TR': trTRMessages,
  'ja-JP': jaMessages,
  'es-MX': esMXMessages,
  'fr-FR': frMessages,
  'mn-MN': mnMNMessages,
  'da-DK': daMessages,
  'sv-SE': svMessages,
  'el-GR': grMessages,
  'fo-FO': foMessages,
  'pt-PT': ptMessages,
  'ro-RO': roMessages,
  'nb-NO': nbNOMessages,
  'id-ID': idMessages,
  'uk-UA': ukMessages,
  'fi-FI': fiMessages,
  'cs-CZ': csMessages,
  'pl-PL': plMessages,
};

export const dateLocales = {
  'en-US': enUS,
  'nl-NL': nl,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'de-DE': de,
  'da-DK': da,
  'ru-RU': ru,
  'sv-SE': sv,
  'tr-TR': tr,
  'ja-JP': ja,
  'es-MX': es,
  'fr-FR': fr,
  'mn-MN': enUS,
  'el-GR': el,
  'fo-FO': da,
  'pt-PT': pt,
  'ro-RO': ro,
  'nb-NO': nb,
  'id-ID': id,
  'uk-UA': uk,
  'fi-FI': fi,
  'cs-CZ': cs,
  'pl-PL': pl,
};

export const menuOptions = [
  { label: '??????', value: 'zh-CN', display: 'cn' },
  { label: '??????(??????)', value: 'zh-TW', display: 'tw' },
  { label: '??e??tina', value: 'cs-CZ', display: 'cs' },
  { label: 'Dansk', value: 'da-DK', display: 'da' },
  { label: 'Deutsch', value: 'de-DE', display: 'de' },
  { label: 'English', value: 'en-US', display: 'en' },
  { label: 'Espa??ol', value: 'es-MX', display: 'es' },
  { label: 'F??royskt', value: 'fo-FO', display: 'fo' },
  { label: 'Fran??ais', value: 'fr-FR', display: 'fr' },
  { label: '????????????????', value: 'el-GR', display: 'el' },
  { label: 'Bahasa Indonesia', value: 'id-ID', display: 'id' },
  { label: '?????????', value: 'ja-JP', display: 'ja' },
  { label: '????????????', value: 'mn-MN', display: 'mn' },
  { label: 'Nederlands', value: 'nl-NL', display: 'nl' },
  { label: 'Norsk Bokm??l', value: 'nb-NO', display: 'nb' },
  { label: 'Polski', value: 'pl-PL', display: 'pl' },
  { label: 'Portugu??s', value: 'pt-PT', display: 'pt' },
  { label: '??????????????', value: 'ru-RU', display: 'ru' },
  { label: 'Rom??n??', value: 'ro-RO', display: 'ro' },
  { label: 'Suomi', value: 'fi-FI', display: 'fi' },
  { label: 'Svenska', value: 'sv-SE', display: 'sv' },
  { label: 'T??rk??e', value: 'tr-TR', display: 'tr' },
  { label: '????????????????????', value: 'uk-UA', display: 'uk' },
];

export function dateFormat(date, str, locale) {
  return format(date, str, { locale: dateLocales[locale] || enUS });
}
