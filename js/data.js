import { FIELDS as legacyFields, defaults as legacyDefaults, QUICK_FIELDS } from './catalog/data.js';
import { expressionOptionsFor, poseOptionsFor } from './catalog/performanceData.js';
import { effectiveHoliday, holidayVibesFor, holidayPalettesFor } from './catalog/holidayData.js';
import { GAME_DAY_FIELDS, GAME_DAY_WORLD, gameDayDefaults, isGameDay, paletteColors, ATTITUDE_EXPRESSIONS } from './catalog/gameDayData.js';

export { GAME_DAY_WORLD, isGameDay };

export const sections = [
  { id: 'her', number: '01', label: 'Her', note: 'The foundation', icon: '✦' },
  { id: 'face', number: '02', label: 'Face + Hair', note: 'Beauty + crown', icon: '◒' },
  { id: 'fashion', number: '03', label: 'Fashion', note: 'Head-to-toe look', icon: '◆' },
  { id: 'attitude', number: '04', label: 'Attitude', note: 'Pose + energy', icon: '↗' },
  { id: 'art', number: '05', label: 'Art Direction', note: 'The creative vision', icon: '▧' },
  { id: 'production', number: '06', label: 'Production', note: 'Make it usable', icon: '✺' }
];

const textAreas = new Set(['qualityNotes']);
const wideFields = new Set(['holidayPhrase', 'exactPhrase', 'qualityNotes', 'holidayCustomPalette', 'customPalette', 'teamColors']);

function adapt(tuple) {
  const [key, label, hint, icon, source] = tuple;
  let type = 'select';
  let options = Array.isArray(source) ? source : [];
  if (source === 'text') type = textAreas.has(key) ? 'textarea' : 'text';
  if (source === 'colors') type = 'colors';
  if (source === 'teamColors') type = 'teamColors';
  return { key, label, hint, icon, type, options, wide: wideFields.has(key) };
}

export const fields = Object.fromEntries(Object.entries(legacyFields).map(([section, list]) => [section, list.map(adapt)]));
export const gameDayFields = Object.fromEntries(Object.entries(GAME_DAY_FIELDS).map(([section, list]) => [section, list.map(adapt)]));
export const defaults = { ...legacyDefaults, ...gameDayDefaults };
export const quickKeys = new Set(QUICK_FIELDS);

export function getFieldsForSection(sectionId, values) {
  const activeHoliday = effectiveHoliday(values);
  const combined = [...(fields[sectionId] || []), ...(isGameDay(values) ? (gameDayFields[sectionId] || []) : [])];
  return combined.map(field => {
    if (field.key === 'holidayVibe') return { ...field, options: holidayVibesFor(activeHoliday) };
    if (field.key === 'holidayPalette') return { ...field, options: holidayPalettesFor(activeHoliday) };
    if (field.key === 'expression') return { ...field, options: expressionOptionsFor(values.expressionCategory) };
    if (field.key === 'pose') return { ...field, options: poseOptionsFor(values.poseCategory) };
    return field;
  });
}

export function shouldShowField(field, values, mode) {
  if (mode === 'quick' && !quickKeys.has(field.key)) return false;
  const holidayKeys = ['holidayVibe','holidayIntensity','holidayPalette','holidayFashion','holidayProps','holidayEnvironment','holidayTypography','holidayPhrase','holidayBeauty','holidayCustomPalette'];
  if (holidayKeys.includes(field.key) && values.holiday === 'None') return false;
  if (field.key === 'holidayCustomPalette' && values.holidayPalette !== 'Custom Holiday Palette') return false;
  if (field.key === 'customPalette' && values.palette !== 'Custom Palette') return false;
  if (field.key === 'exactPhrase' && values.includeTypography === 'No — Image Only') return false;
  return true;
}

export const paletteMap = {
  'Oxblood + Blush + Champagne': ['#6e2034','#e89a9a','#f4eddf','#d0a05d'],
  'Espresso + Ivory + Gold': ['#3b2118','#fff7e7','#d4a72c','#8c5a3c'],
  'Midnight + Cobalt + Chrome': ['#11172a','#153ee8','#dce1e8','#ff5d47'],
  'Olive + Terracotta + Cream': ['#66704b','#bf684d','#fff3db','#25281d'],
  'Plum + Rose + Copper': ['#572347','#d58a9f','#b86b45','#f8eadd'],
  'Monochrome Cocoa': ['#3e231c','#875e4b','#d8b59d','#fff4e8'],
  'Black + Hot Pink + Pearl': ['#171717','#f53c91','#fffaf2','#b9a4ff'],
  'Teal + Saffron + Onyx': ['#087f83','#e6ad28','#171717','#f4eddf'],
  'Lavender + Wine + Silver': ['#b9a4ff','#6e2034','#c8ced8','#fff7eb'],
  'Denim Blue + Caramel + Red': ['#315a91','#b97b54','#d72345','#f5e9da'],
  'Emerald + Chocolate + Gold': ['#087f5b','#3b2118','#d4a72c','#fff7e7'],
  'Citrus + Lilac + Espresso': ['#c6f629','#b9a4ff','#3b2118','#ff7548']
};

export function paletteFor(values) {
  if (isGameDay(values)) return values.teamColors || paletteColors(values.teamPaletteType);
  if (values.palette === 'Custom Palette') return values.customPalette;
  return paletteMap[values.palette] || paletteMap['Oxblood + Blush + Champagne'];
}

export const teamColorsFor = type => [...paletteColors(type)];
export const gameDayExpressionFor = attitude => ATTITUDE_EXPRESSIONS[attitude] || null;

export const presets = [
  { name: 'Gallery Boss', emoji: '◩', picks: { world:'Boss Baddie', occasion:'Gallery Opening', fashionDirection:'Creative Professional', attitude:'Quiet Luxury', artStyle:'Luxury Editorial Illustration', palette:'Midnight + Cobalt + Chrome' } },
  { name: 'Soft-Life CEO', emoji: '☼', picks: { world:'Soft Boss Baddie', occasion:'Brunch', fashionDirection:'Soft Luxury', attitude:'Soft Life', artStyle:'Beauty Campaign Illustration', palette:'Emerald + Chocolate + Gold' } },
  { name: 'Game Day', emoji: '↗', picks: { world:GAME_DAY_WORLD, footballMode:'Stadium Glam', gameDayAttitude:'Victory Smirk', gameDayEnvironment:'Night Game', gameDayArtStyle:'Luxury Sports Campaign' } },
  { name: 'Paper Doll', emoji: '✂', picks: { world:'Creative Baddie', occasion:'Creative Studio', fashionDirection:'Art-School Chic', attitude:'Confidently Weird', artStyle:'Paper-Cut Dimensional Art', palette:'Citrus + Lilac + Espresso' } }
];

export function allActiveFields(values) {
  return sections.flatMap(section => getFieldsForSection(section.id, values).filter(field => shouldShowField(field, values, 'studio')));
}
