const o=(...items)=>items;

export const GAME_DAY_WORLD='GAME DAY BADDIE™';
export const GAME_DAY_MODES=o('Surprise Me','Sideline Baddie','Tailgate Baddie','Stadium Glam','Luxury Suite Baddie','Sunday Football Chill','Rivalry Day Menace','Football Mama','Game Day Girlfriend','Game Day Wife','Alumni Baddie','Halftime Hottie','Watch Party Baddie','Parking Lot Pregame','Tunnel Walk Baddie','Victory Celebration','Postgame Baddie','Cold Weather Game Day','Home Game Energy','Away Game Energy');

export const TEAM_PALETTES={
  'Red + Black + White':['#b51f32','#111111','#ffffff','#d8d2c8'],
  'Blue + Silver + White':['#174b9b','#aeb7c4','#ffffff','#20242b'],
  'Purple + Gold + White':['#5b2a86','#d4a72c','#ffffff','#171219'],
  'Green + Gold + Cream':['#175c43','#c49a32','#f6edda','#27231f'],
  'Orange + Navy + White':['#e66b22','#13284c','#ffffff','#c8ced8'],
  'Burgundy + Gold + Cream':['#6e2034','#c89b43','#f5ead7','#24191a'],
  'Black + Gold':['#111111','#c59a3d','#f2dfb5','#ffffff'],
  'Pink + Black + White':['#e83f78','#111111','#ffffff','#d8c8cd'],
  'Teal + Black + Silver':['#087f83','#111111','#b9c1c8','#f3f3f3'],
  'Royal Blue + Gold':['#214fb0','#d0a239','#ffffff','#181b25'],
  'Maroon + White + Gold':['#721f35','#ffffff','#cda349','#21171a'],
  'Custom':['#6e2034','#e8d5b5','#d0a05d','#171311']
};
export const TEAM_PALETTE_TYPES=['Surprise Me',...Object.keys(TEAM_PALETTES)];

export const GAME_DAY_HAIR=o('Surprise Me','Sleek High Ponytail','Long Curls','Big Glam Curls','Straight Middle Part','Side-Part Waves','Jumbo Braids','Knotless Braids','High Bun','Messy Glam Bun','Natural Afro','Defined Natural Curls','Half-Up Half-Down','Braided Ponytail','Locs','Short Pixie','Bob');
export const GAME_DAY_MAKEUP=o('Surprise Me','Natural Game Day','Soft Glam','Full Glam','Team Color Accent','Bold Lip','Glossy Neutral','Stadium Night Glam','No Makeup Look');
export const GAME_DAY_TOPS=o('Surprise Me','Original Cropped Football Jersey','Oversized Game Jersey','Fitted Game Top','Corset-Inspired Football Top','Varsity Sweater','Varsity Jacket','Bomber Jacket','Letterman-Inspired Jacket','Cropped Puffer','Full-Length Puffer','Hoodie','Graphic Sweatshirt','Baby Tee','Ribbed Tank','Halter Top','Long Sleeve Game Top','Off-Shoulder Athletic Top','Denim Jacket','Leather-Inspired Jacket','Luxury Suite Blazer');
export const GAME_DAY_BOTTOMS=o('Surprise Me','Distressed Denim','Denim Shorts','Fitted Jeans','Cargo Pants','Cargo Mini Skirt','Pleated Skirt','Leggings','Flare Leggings','Joggers','Faux Leather Pants','Faux Leather Shorts','Mini Skirt','Athletic Shorts','Cutoff Shorts');
export const GAME_DAY_FOOTWEAR=o('Surprise Me','Original High-Top Sneakers','Original Low-Top Sneakers','Platform Sneakers','Fashion Boots','Knee-High Boots','Thigh-High Boots','Western Boots','Combat-Inspired Boots','Heeled Boots','Fashion Heels','Cozy Stadium Boots');
export const GAME_DAY_ACCESSORIES=o('Surprise Me','None','Generic Football','Original Stadium Bag','Mini Clear Stadium Bag','Football Earrings','Football Necklace','Team-Color Hoop Earrings','Sunglasses','Fashion Visor','Original Baseball Cap','Knit Beanie','Foam Finger','Pom-Poms','Megaphone','Game Ticket','Stadium Cup','Tailgate Cup','Blanket','Scarf','Gloves','Ear Warmers','Original Championship-Inspired Belt');
export const GAME_DAY_PROPS=o('Surprise Me','None','Generic football','Generic helmet','Goalpost','Turf + yard-line graphics','Scoreboard','Stadium lights','Bleachers','Megaphone','Foam finger','Generic game ticket','Stadium seating','Tailgate cooler','Folding chair','Blanket','Original pennant','Pom-poms','Confetti','Championship-inspired trophy silhouette','Stadium cup','Game-day food setup');
export const GAME_DAY_POSES=o('Surprise Me','Confident Sideline Stance','Football Tucked Under Arm','Football Resting Against Hip','Holding Football With Both Hands','Walking Toward Stadium','Stadium Tunnel Walk','Looking Back Over Shoulder','Jacket Over Shoulder','Leaning Against Goalpost Padding','Sitting On Bleachers','Sitting In Stadium Seat','Standing In Stadium Aisle','Tailgate Lean','One Foot On Cooler','Hands On Hips','Arms Folded','Victory Arms Raised','Touchdown Celebration','Finger Point Toward Scoreboard','Side-Eye Rival Pose','Phone In Hand Pregame Pose','Walking With Stadium Bag','Cozy Seated Watch Party Pose','Luxury Suite Lounge Pose');
export const GAME_DAY_ATTITUDES=o('Surprise Me','Unbothered','Game Face','Victory Smirk','Rivalry Side-Eye','Screaming At The Ref','Loud + Hyped','Competitive','Flirty Game Day','Confident','Luxury + Calm','Petty Rival Energy','Touchdown Excited','Focused','Proud Football Mama','Watch Party Cozy',"Don't Play With My Team");
export const GAME_DAY_EXPRESSIONS=o('Surprise Me','Calm unbothered gaze','Focused game face','Knowing victory smirk','Sharp rivalry side-eye','Mid-shout referee reaction','Open-mouthed hype cheer','Competitive narrowed gaze','Flirty half-smile','Direct confident gaze','Relaxed luxury composure','Petty raised-brow stare','Joyful touchdown reaction','Locked-in concentration','Proud mama glow','Cozy amused expression','Protective team-pride glare');
export const GAME_DAY_ENVIRONMENTS=o('Surprise Me','Football Stadium','Stadium Entrance','Stadium Concourse','Stadium Tunnel','Stadium Seats','Bleachers','Sideline-Inspired Area','Tailgate','Parking Lot Pregame','Luxury Suite','Home Watch Party','Sports Bar Inspired Setting','Outdoor Big Screen Party','Locker-Room-Inspired Fashion Set','Stadium Hallway','Night Game','Day Game','Cold Weather Stadium','Rainy Game Day','Championship Celebration','Abstract Football Graphic World','Transparent DTF Composition');
export const GAME_DAY_TYPOGRAPHY=o('Surprise Me','Varsity Block','Collegiate Inspired','Stadium Scoreboard','Athletic Sans','Chenille Inspired','Embroidered Patch','Dimensional Sports Type','Chrome Athletic','Glitter Game Day','Distressed Athletic','Bold Condensed','Tailgate Hand Lettering','Luxury Sports Editorial','Retro Football','Minimal Modern Game Day');
export const GAME_DAY_PHRASES=o('Surprise Me','GAME DAY LOOKS GOOD ON ME','LOUD FOR FOUR QUARTERS','CUTE BUT COMPETITIVE','GAME FACE: ACTIVATED','SUNDAYS ARE FOR THE DRAMA','I CAME TO YELL','STADIUM BEHAVIOR','TOO GLAM TO LOSE MY VOICE','FOOTBALL + FOOLISHNESS',"DON'T ASK ME THE SCORE",'LOVE ME. FEED ME. LET ME WATCH FOOTBALL.','SIDELINE ENERGY','TAILGATE FIRST','ALL FOUR QUARTERS','GAME DAY BADDIE','PRETTY WITH A PLAYBOOK','THIS IS MY GAME FACE',"WE DON'T DO QUIET ON GAME DAY",'FOUR QUARTERS OF FINE','PRETTY LOUD ON PURPOSE','MY GAME FACE HAS LIP GLOSS','BLEACHERS, BOOTS + BIG ENERGY','SCOREBOARD ATTITUDE','TAILGATE GLAM, ZERO CHILL');
export const GAME_DAY_ART_STYLES=o('Surprise Me','Semi-Realistic Baddie','Editorial Fashion','Faux 3D','Faux 4D','Illustrated Glam','Luxury Sports Campaign','Stadium Photography Inspired','Streetwear Editorial','Fashion Poster','DTF Graphic','Typography-Led Graphic','Character + Typography','Minimal Game Day','Controlled Maximalist','Retro Sports','Glam Tailgate','Night Stadium Cinematic');
export const GAME_DAY_PRODUCTION=o('Surprise Me','Match Main Production Mode','Transparent DTF','T-Shirt Graphic','Sweatshirt Graphic','Hoodie Graphic','Poster','Social Media Graphic','Phone Wallpaper','Full Scene','Sticker-Like Die Cut Composition','PNG Artwork','Mockup Ready');

export const ATTITUDE_EXPRESSIONS={
  'Unbothered':'Calm unbothered gaze','Game Face':'Focused game face','Victory Smirk':'Knowing victory smirk','Rivalry Side-Eye':'Sharp rivalry side-eye','Screaming At The Ref':'Mid-shout referee reaction','Loud + Hyped':'Open-mouthed hype cheer','Competitive':'Competitive narrowed gaze','Flirty Game Day':'Flirty half-smile','Confident':'Direct confident gaze','Luxury + Calm':'Relaxed luxury composure','Petty Rival Energy':'Petty raised-brow stare','Touchdown Excited':'Joyful touchdown reaction','Focused':'Locked-in concentration','Proud Football Mama':'Proud mama glow','Watch Party Cozy':'Cozy amused expression',"Don't Play With My Team":'Protective team-pride glare'
};

export const MODE_PROFILES={
  'Sideline Baddie':{environment:['Sideline-Inspired Area','Football Stadium'],top:['Fitted Game Top','Original Cropped Football Jersey'],bottom:['Cargo Pants','Fitted Jeans'],footwear:['Original High-Top Sneakers','Fashion Boots'],pose:['Confident Sideline Stance','Football Tucked Under Arm'],attitude:['Game Face','Confident']},
  'Tailgate Baddie':{environment:['Tailgate','Parking Lot Pregame'],top:['Oversized Game Jersey','Baby Tee','Graphic Sweatshirt'],bottom:['Distressed Denim','Cutoff Shorts','Cargo Pants'],footwear:['Original High-Top Sneakers','Western Boots'],pose:['Tailgate Lean','One Foot On Cooler'],attitude:['Loud + Hyped','Flirty Game Day']},
  'Luxury Suite Baddie':{environment:['Luxury Suite','Stadium Concourse','Stadium Seats'],top:['Luxury Suite Blazer','Corset-Inspired Football Top'],bottom:['Faux Leather Pants','Fitted Jeans','Mini Skirt'],footwear:['Heeled Boots','Fashion Heels'],pose:['Luxury Suite Lounge Pose','Standing In Stadium Aisle'],attitude:['Luxury + Calm','Victory Smirk']},
  'Sunday Football Chill':{environment:['Home Watch Party','Sports Bar Inspired Setting'],top:['Hoodie','Graphic Sweatshirt','Oversized Game Jersey'],bottom:['Leggings','Flare Leggings','Joggers'],footwear:['Original Low-Top Sneakers','Cozy Stadium Boots'],pose:['Cozy Seated Watch Party Pose','Sitting In Stadium Seat'],attitude:['Watch Party Cozy','Unbothered']},
  'Watch Party Baddie':{environment:['Home Watch Party','Outdoor Big Screen Party','Sports Bar Inspired Setting'],top:['Baby Tee','Hoodie','Oversized Game Jersey'],bottom:['Joggers','Leggings','Denim Shorts'],footwear:['Original Low-Top Sneakers','Platform Sneakers'],pose:['Cozy Seated Watch Party Pose','Phone In Hand Pregame Pose','Sitting In Stadium Seat'],attitude:['Watch Party Cozy','Loud + Hyped']},
  'Cold Weather Game Day':{environment:['Cold Weather Stadium','Night Game'],top:['Cropped Puffer','Full-Length Puffer','Varsity Sweater','Long Sleeve Game Top'],bottom:['Fitted Jeans','Faux Leather Pants','Leggings'],footwear:['Cozy Stadium Boots','Knee-High Boots','Combat-Inspired Boots'],pose:['Walking Toward Stadium','Standing In Stadium Aisle'],attitude:['Game Face','Confident'],accessory:['Knit Beanie','Scarf','Gloves','Ear Warmers']},
  'Tunnel Walk Baddie':{environment:['Stadium Tunnel','Stadium Hallway'],top:['Leather-Inspired Jacket','Original Cropped Football Jersey','Luxury Suite Blazer'],bottom:['Cargo Pants','Faux Leather Pants','Fitted Jeans'],footwear:['Original High-Top Sneakers','Heeled Boots'],pose:['Stadium Tunnel Walk','Jacket Over Shoulder'],attitude:['Game Face','Confident','Petty Rival Energy']},
  'Rivalry Day Menace':{environment:['Football Stadium','Stadium Entrance','Night Game'],top:['Original Cropped Football Jersey','Varsity Jacket'],bottom:['Distressed Denim','Cargo Mini Skirt'],footwear:['Combat-Inspired Boots','Original High-Top Sneakers'],pose:['Side-Eye Rival Pose','Arms Folded'],attitude:['Rivalry Side-Eye','Petty Rival Energy',"Don't Play With My Team"]},
  'Victory Celebration':{environment:['Championship Celebration','Football Stadium'],top:['Fitted Game Top','Original Cropped Football Jersey'],bottom:['Fitted Jeans','Athletic Shorts'],footwear:['Original High-Top Sneakers','Platform Sneakers'],pose:['Victory Arms Raised','Touchdown Celebration'],attitude:['Touchdown Excited','Victory Smirk'],prop:['Confetti','Championship-inspired trophy silhouette']},
  'Stadium Glam':{environment:['Night Game','Football Stadium','Stadium Seats'],top:['Corset-Inspired Football Top','Fitted Game Top','Leather-Inspired Jacket'],bottom:['Faux Leather Pants','Mini Skirt','Fitted Jeans'],footwear:['Thigh-High Boots','Heeled Boots','Platform Sneakers'],pose:['Walking Toward Stadium','Looking Back Over Shoulder'],attitude:['Confident','Flirty Game Day']},
  'Football Mama':{environment:['Stadium Seats','Bleachers','Sideline-Inspired Area'],top:['Varsity Sweater','Long Sleeve Game Top','Varsity Jacket'],bottom:['Fitted Jeans','Cargo Pants','Leggings'],footwear:['Original Low-Top Sneakers','Fashion Boots'],pose:['Standing In Stadium Aisle','Sitting On Bleachers'],attitude:['Proud Football Mama',"Don't Play With My Team"]},
  'Game Day Girlfriend':{environment:['Stadium Entrance','Stadium Concourse','Football Stadium'],top:['Fitted Game Top','Baby Tee','Varsity Jacket'],bottom:['Fitted Jeans','Denim Shorts','Cargo Mini Skirt'],footwear:['Platform Sneakers','Fashion Boots'],pose:['Walking With Stadium Bag','Looking Back Over Shoulder'],attitude:['Flirty Game Day','Confident']},
  'Game Day Wife':{environment:['Stadium Concourse','Luxury Suite','Stadium Seats'],top:['Luxury Suite Blazer','Off-Shoulder Athletic Top','Varsity Sweater'],bottom:['Fitted Jeans','Faux Leather Pants','Pleated Skirt'],footwear:['Fashion Boots','Heeled Boots','Original Low-Top Sneakers'],pose:['Standing In Stadium Aisle','Walking With Stadium Bag'],attitude:['Confident','Luxury + Calm']},
  'Alumni Baddie':{environment:['Stadium Entrance','Tailgate','Bleachers'],top:['Letterman-Inspired Jacket','Varsity Sweater','Original Cropped Football Jersey'],bottom:['Distressed Denim','Pleated Skirt','Cargo Pants'],footwear:['Original High-Top Sneakers','Western Boots'],pose:['Walking Toward Stadium','Confident Sideline Stance'],attitude:['Confident','Loud + Hyped']},
  'Halftime Hottie':{environment:['Stadium Concourse','Stadium Seats','Football Stadium'],top:['Corset-Inspired Football Top','Fitted Game Top','Cropped Puffer'],bottom:['Faux Leather Pants','Mini Skirt','Fitted Jeans'],footwear:['Platform Sneakers','Heeled Boots'],pose:['Walking Toward Stadium','Looking Back Over Shoulder'],attitude:['Flirty Game Day','Victory Smirk']},
  'Parking Lot Pregame':{environment:['Parking Lot Pregame','Tailgate'],top:['Baby Tee','Oversized Game Jersey','Denim Jacket'],bottom:['Cutoff Shorts','Cargo Pants','Distressed Denim'],footwear:['Original High-Top Sneakers','Western Boots'],pose:['Phone In Hand Pregame Pose','One Foot On Cooler','Tailgate Lean'],attitude:['Loud + Hyped','Confident']},
  'Postgame Baddie':{environment:['Stadium Hallway','Stadium Entrance','Parking Lot Pregame'],top:['Oversized Game Jersey','Bomber Jacket','Hoodie'],bottom:['Fitted Jeans','Joggers','Cargo Pants'],footwear:['Original Low-Top Sneakers','Combat-Inspired Boots'],pose:['Jacket Over Shoulder','Walking With Stadium Bag','Looking Back Over Shoulder'],attitude:['Unbothered','Victory Smirk']},
  'Home Game Energy':{environment:['Football Stadium','Stadium Entrance','Stadium Seats'],top:['Original Cropped Football Jersey','Varsity Jacket','Fitted Game Top'],bottom:['Fitted Jeans','Cargo Pants','Pleated Skirt'],footwear:['Original High-Top Sneakers','Platform Sneakers'],pose:['Confident Sideline Stance','Finger Point Toward Scoreboard'],attitude:['Loud + Hyped',"Don't Play With My Team"]},
  'Away Game Energy':{environment:['Stadium Entrance','Stadium Concourse','Football Stadium'],top:['Oversized Game Jersey','Bomber Jacket','Long Sleeve Game Top'],bottom:['Cargo Pants','Fitted Jeans','Leggings'],footwear:['Original High-Top Sneakers','Combat-Inspired Boots'],pose:['Walking Toward Stadium','Walking With Stadium Bag'],attitude:['Game Face','Petty Rival Energy']}
};

export const GAME_DAY_FIELDS={
  her:[
    ['footballMode','FOOTBALL BADDIE MODE','Choose her game-day story','🏈',GAME_DAY_MODES],
    ['teamPaletteType','TEAM COLOR PALETTE','Original colors, never team branding','◉',TEAM_PALETTE_TYPES],
    ['teamColors','TEAM COLORS','Primary, secondary, accent + neutral','🎨','teamColors']
  ],
  face:[
    ['gameDayHair','GAME DAY HAIR','Optional stadium-ready crown','♛',GAME_DAY_HAIR],
    ['gameDayMakeup','GAME DAY MAKEUP','Beauty direction for the moment','💄',GAME_DAY_MAKEUP]
  ],
  fashion:[
    ['gameDayTop','GAME DAY TOP','Original football-aware fashion','▱',GAME_DAY_TOPS],
    ['gameDayBottom','GAME DAY BOTTOM','Balance the silhouette','▰',GAME_DAY_BOTTOMS],
    ['gameDayFootwear','GAME DAY FOOTWEAR','Original and logo-free','👟',GAME_DAY_FOOTWEAR],
    ['gameDayAccessory','FOOTBALL ACCESSORY','One useful finishing detail','◇',GAME_DAY_ACCESSORIES],
    ['gameDayProp','FOOTBALL PROP','Support the story without clutter','🏈',GAME_DAY_PROPS]
  ],
  attitude:[
    ['gameDayAttitude','GAME DAY ATTITUDE','Her football energy','⚡',GAME_DAY_ATTITUDES],
    ['gameDayExpression','GAME DAY EXPRESSION','Matched naturally to her attitude','☺',GAME_DAY_EXPRESSIONS],
    ['gameDayPose','GAME DAY POSE','Rotate posture, limbs and energy','♟',GAME_DAY_POSES]
  ],
  art:[
    ['gameDayEnvironment','GAME DAY ENVIRONMENT','Original stadium and watch-party worlds','▧',GAME_DAY_ENVIRONMENTS],
    ['gameDayArtStyle','GAME DAY ART DIRECTION','Football without a one-style default','🎨',GAME_DAY_ART_STYLES],
    ['gameDayTypography','GAME DAY TYPOGRAPHY','Responsive sports type direction','Aa',GAME_DAY_TYPOGRAPHY],
    ['gameDayPhrase','GAME DAY PHRASE','Original wording, no team slogans','✎',GAME_DAY_PHRASES]
  ],
  production:[
    ['gameDayProduction','GAME DAY OUTPUT','Supplement the main production mode','⚙',GAME_DAY_PRODUCTION]
  ]
};

export const GAME_DAY_KEYS=new Set(Object.values(GAME_DAY_FIELDS).flat().map(field=>field[0]));
export const gameDayFieldsFor=section=>GAME_DAY_FIELDS[section]||[];
export const isGameDay=values=>values.world===GAME_DAY_WORLD;
export const paletteColors=type=>TEAM_PALETTES[type]||TEAM_PALETTES['Burgundy + Gold + Cream'];

export const gameDayDefaults={footballMode:'Stadium Glam',teamPaletteType:'Burgundy + Gold + Cream',teamColors:[...TEAM_PALETTES['Burgundy + Gold + Cream']],gameDayHair:'Side-Part Waves',gameDayMakeup:'Stadium Night Glam',gameDayTop:'Original Cropped Football Jersey',gameDayBottom:'Fitted Jeans',gameDayFootwear:'Original High-Top Sneakers',gameDayAccessory:'Original Stadium Bag',gameDayProp:'Generic football',gameDayAttitude:'Victory Smirk',gameDayExpression:'Knowing victory smirk',gameDayPose:'Football Tucked Under Arm',gameDayEnvironment:'Night Game',gameDayArtStyle:'Luxury Sports Campaign',gameDayTypography:'Varsity Block',gameDayPhrase:'GAME DAY LOOKS GOOD ON ME',gameDayProduction:'Match Main Production Mode'};
