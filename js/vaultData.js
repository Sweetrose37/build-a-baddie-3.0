export const vaultItems = [
  { id: 'dtf-creative-director', type: 'dtf', title: 'Creative Director', file: 'assets/vault/dtf/creative-director.png', tags: ['portrait', 'boss', 'fashion'] },
  { id: 'dtf-power-suit', type: 'dtf', title: 'Coral Power Suit', file: 'assets/vault/dtf/coral-power-suit.png', tags: ['fashion', 'boss', 'full body'] },
  { id: 'dtf-game-day', type: 'dtf', title: 'Game Day Muse', file: 'assets/vault/dtf/game-day-muse.png', tags: ['game day', 'football', 'fashion'] },
  { id: 'dtf-brunch', type: 'dtf', title: 'Brunch Muse', file: 'assets/vault/dtf/brunch-muse.png', tags: ['brunch', 'fashion', 'celebration'] },
  { id: 'dtf-travel', type: 'dtf', title: 'Travel Muse', file: 'assets/vault/dtf/travel-muse.png', tags: ['travel', 'fashion', 'full body'] },
  { id: 'dtf-beauty-boss', type: 'dtf', title: 'Beauty Boss', file: 'assets/vault/dtf/beauty-boss.png', tags: ['beauty', 'boss', 'portrait'] },
  { id: 'dtf-roller', type: 'dtf', title: 'Roller Muse', file: 'assets/vault/dtf/roller-muse.png', tags: ['retro', 'fun', 'fashion'] },
  { id: 'dtf-floral-afro', type: 'dtf', title: 'Floral Afro', file: 'assets/vault/dtf/floral-afro.png', tags: ['floral', 'portrait', 'natural hair'] },
  { id: 'dtf-coffee-laptop', type: 'dtf', title: 'Coffee + Laptop', file: 'assets/vault/dtf/coffee-and-laptop.png', tags: ['boss', 'coffee', 'work'] },
  { id: 'dtf-celestial', type: 'dtf', title: 'Celestial Glam', file: 'assets/vault/dtf/celestial-glam.png', tags: ['celestial', 'portrait', 'glam'] },
  { id: 'dtf-birthday', type: 'dtf', title: 'Birthday Glam', file: 'assets/vault/dtf/birthday-glam.png', tags: ['birthday', 'celebration', 'fashion'] },
  { id: 'dtf-winter', type: 'dtf', title: 'Winter Glam', file: 'assets/vault/dtf/winter-glam.png', tags: ['winter', 'holiday', 'portrait'] },

  { id: 'sticker-sunglasses', type: 'sticker', title: 'Cobalt Sunglasses', file: 'assets/vault/stickers/cobalt-sunglasses.png', tags: ['fashion', 'accessory'] },
  { id: 'sticker-hoops', type: 'sticker', title: 'Gold Hoops', file: 'assets/vault/stickers/gold-hoops.png', tags: ['jewelry', 'accessory'] },
  { id: 'sticker-heel', type: 'sticker', title: 'Coral Heel', file: 'assets/vault/stickers/coral-heel.png', tags: ['fashion', 'shoe'] },
  { id: 'sticker-handbag', type: 'sticker', title: 'Cobalt Handbag', file: 'assets/vault/stickers/cobalt-handbag.png', tags: ['fashion', 'accessory'] },
  { id: 'sticker-coffee', type: 'sticker', title: 'Coffee Cup', file: 'assets/vault/stickers/coffee-cup.png', tags: ['coffee', 'lifestyle'] },
  { id: 'sticker-football', type: 'sticker', title: 'Game Day Football', file: 'assets/vault/stickers/game-day-football.png', tags: ['game day', 'football'] },
  { id: 'sticker-butterfly', type: 'sticker', title: 'Coral Butterfly', file: 'assets/vault/stickers/coral-butterfly.png', tags: ['nature', 'glam'] },
  { id: 'sticker-heart-lock', type: 'sticker', title: 'Heart Lock', file: 'assets/vault/stickers/heart-lock.png', tags: ['love', 'glam'] },
  { id: 'sticker-nail-polish', type: 'sticker', title: 'Nail Polish', file: 'assets/vault/stickers/nail-polish.png', tags: ['beauty', 'nails'] },
  { id: 'sticker-camera', type: 'sticker', title: 'Coral Camera', file: 'assets/vault/stickers/coral-camera.png', tags: ['camera', 'lifestyle'] },
  { id: 'sticker-peony', type: 'sticker', title: 'Coral Peony', file: 'assets/vault/stickers/coral-peony.png', tags: ['floral', 'nature'] },
  { id: 'sticker-suitcase', type: 'sticker', title: 'Travel Suitcase', file: 'assets/vault/stickers/travel-suitcase.png', tags: ['travel', 'lifestyle'] }
];

export const vaultTypes = {
  dtf: { label: 'DTF Designs', singular: 'DTF design' },
  sticker: { label: 'Stickers', singular: 'sticker' }
};

export function drawFromShuffleBag(ids, saved = {}, random = Math.random) {
  let remaining = Array.isArray(saved.remaining) ? saved.remaining.filter(id => ids.includes(id)) : [];
  const last = ids.includes(saved.last) ? saved.last : null;
  if (!remaining.length) {
    remaining = [...ids];
    for (let index = remaining.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [remaining[index], remaining[swapIndex]] = [remaining[swapIndex], remaining[index]];
    }
    if (last && remaining.length > 1 && remaining[0] === last) {
      [remaining[0], remaining[1]] = [remaining[1], remaining[0]];
    }
  }
  const id = remaining.shift() || null;
  return { id, cycle: { remaining, last: id, started: Boolean(id) } };
}
