export const DESIGN_BLUEPRINTS={
  'Clean Editorial Spread':{placements:['Offset Left','Offset Right'],details:['Edge Anchors','One Distant Accent'],density:['Airy','Clean & Edited'],compositions:['Editorial asymmetry'],cameras:['Three-quarter portrait','Eye-level full body']},
  'Monumental Centerpiece':{placements:['Centered'],details:['Floor-Anchored Details','One Hero Element Behind'],density:['Clean & Edited','Balanced'],compositions:['Centered monument'],cameras:['Low-angle full body','Eye-level full body']},
  'Cinematic Story Frame':{placements:['Rule-of-Thirds Left','Rule-of-Thirds Right'],details:['Foreground / Background Separation','Environmental Depth'],density:['Balanced','Rich but Separated'],compositions:['Wide environmental portrait','Layered depth'],cameras:['Wide cinematic frame','Candid side angle']},
  'Diagonal Runway Energy':{placements:['Dynamic Diagonal'],details:['Trailing Motion Accents','Floor-Anchored Details'],density:['Balanced'],compositions:['Diagonal motion'],cameras:['Low-angle full body','Dynamic dutch angle']},
  'Luxury Campaign Minimal':{placements:['Centered','Offset Right'],details:['No Supporting Cluster','One Distant Accent'],density:['Minimal','Airy'],compositions:['Full-body campaign','Close beauty crop'],cameras:['Three-quarter portrait','Close beauty portrait']},
  'Split-Panel Fashion Story':{placements:['Split Frame'],details:['Separated Side Panels','Edge Anchors'],density:['Clean & Edited','Balanced'],compositions:['Graphic cutout collage'],cameras:['Eye-level full body','Three-quarter portrait']},
  'Circular Portal Composition':{placements:['Centered','Lower Center'],details:['Single Open Halo','Floor-Anchored Details'],density:['Clean & Edited'],compositions:['Circular portal'],cameras:['Low-angle full body','Eye-level full body']},
  'Architectural Pedestal Scene':{placements:['Lower Center','Offset Left'],details:['Architectural Base Only','Vertical Background Accent'],density:['Balanced'],compositions:['Low-angle hero','Centered monument'],cameras:['Low-angle full body']},
  'Corner-Anchored Poster':{placements:['Lower Left Corner','Lower Right Corner'],details:['Opposite-Corner Accent','Open Negative Space'],density:['Airy','Clean & Edited'],compositions:['Editorial asymmetry','Stacked poster composition'],cameras:['Eye-level full body','Three-quarter portrait']},
  'Layered Paper-Cut Depth':{placements:['Centered','Rule-of-Thirds Right'],details:['Separated Depth Planes','Edge Anchors'],density:['Rich but Separated'],compositions:['Layered depth','Graphic cutout collage'],cameras:['Three-quarter portrait']},
  'Beauty Campaign Close-Up':{placements:['Upper Center','Offset Right'],details:['One Material Accent','Open Negative Space'],density:['Minimal','Airy'],compositions:['Close beauty crop'],cameras:['Close beauty portrait','Waist-up editorial']},
  'Street Editorial Environment':{placements:['Rule-of-Thirds Left','Rule-of-Thirds Right'],details:['Environmental Depth','Street-Level Accents'],density:['Balanced','Rich but Separated'],compositions:['Wide environmental portrait','Diagonal motion'],cameras:['Candid side angle','Wide cinematic frame']},
  'Type-as-Furniture Layout':{placements:['Centered','Offset Left'],details:['One Sculptural Type Element','Floor-Anchored Details'],density:['Clean & Edited'],compositions:['Stacked poster composition','Centered monument'],cameras:['Low-angle full body','Eye-level full body']},
  'Frame-Break Editorial':{placements:['Dynamic Diagonal','Offset Right'],details:['One Frame-Break Element','Edge Anchors'],density:['Balanced'],compositions:['Editorial asymmetry','Graphic cutout collage'],cameras:['Dynamic dutch angle','Three-quarter portrait']},
  'Runway Corridor':{placements:['Lower Center'],details:['Receding Lines','One Distant Accent'],density:['Airy','Balanced'],compositions:['Full-body campaign','Layered depth'],cameras:['Low-angle full body','Wide cinematic frame']},
  'Floating Material Study':{placements:['Centered','Offset Left'],details:['Widely Spaced Floating Accents','Open Negative Space'],density:['Airy','Clean & Edited'],compositions:['Editorial asymmetry'],cameras:['Three-quarter portrait','Waist-up editorial']},
  'Window-Crop Lifestyle':{placements:['Rule-of-Thirds Right','Rule-of-Thirds Left'],details:['Foreground Frame','Environmental Depth'],density:['Balanced'],compositions:['Wide environmental portrait','Layered depth'],cameras:['Candid side angle','Telephoto compression']},
  'Asymmetrical Gallery Wall':{placements:['Offset Left','Lower Right Corner'],details:['Separated Gallery Accents','Open Negative Space'],density:['Rich but Separated'],compositions:['Editorial asymmetry','Stacked poster composition'],cameras:['Eye-level full body','Three-quarter portrait']},
  'Single-Silhouette Apparel Graphic':{placements:['Centered'],details:['No Supporting Cluster','Controlled Detached Accents'],density:['Minimal','Clean & Edited'],compositions:['Centered monument','Full-body campaign'],cameras:['Eye-level full body']},
  'Surreal Scale Contrast':{placements:['Lower Center','Dynamic Diagonal'],details:['One Overscale Object','Tiny Distant Accents'],density:['Clean & Edited','Balanced'],compositions:['Layered depth','Low-angle hero'],cameras:['Low-angle full body','Wide cinematic frame']}
};

export const DESIGN_ARCHITECTURES=Object.keys(DESIGN_BLUEPRINTS);
export const SUBJECT_PLACEMENTS=['Centered','Offset Left','Offset Right','Rule-of-Thirds Left','Rule-of-Thirds Right','Lower Center','Upper Center','Lower Left Corner','Lower Right Corner','Dynamic Diagonal','Split Frame'];
export const DETAIL_PLACEMENTS=['No Supporting Cluster','Open Negative Space','Edge Anchors','One Distant Accent','One Hero Element Behind','Floor-Anchored Details','Foreground / Background Separation','Environmental Depth','Trailing Motion Accents','Separated Side Panels','Single Open Halo','Architectural Base Only','Vertical Background Accent','Opposite-Corner Accent','Separated Depth Planes','One Material Accent','Street-Level Accents','One Sculptural Type Element','One Frame-Break Element','Receding Lines','Widely Spaced Floating Accents','Foreground Frame','Separated Gallery Accents','Controlled Detached Accents','One Overscale Object','Tiny Distant Accents'];
export const VISUAL_DENSITIES=['Minimal','Airy','Clean & Edited','Balanced','Rich but Separated'];

export const chooseDesignArchitecture=(history=[],current='')=>{
  const recent=new Set(history.slice(-16));
  let choices=DESIGN_ARCHITECTURES.filter(x=>x!==current&&!recent.has(x));
  if(!choices.length)choices=DESIGN_ARCHITECTURES.filter(x=>x!==current);
  return choices[Math.floor(Math.random()*choices.length)]||DESIGN_ARCHITECTURES[0];
};
