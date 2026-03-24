import * as migration_20260126_211624 from './20260126_211624';
import * as migration_20260304_233728_template_reset_features from './20260304_233728_template_reset_features';
import * as migration_20260317_234829 from './20260317_234829';
import * as migration_20260318_123234 from './20260318_123234';

export const migrations = [
  {
    up: migration_20260126_211624.up,
    down: migration_20260126_211624.down,
    name: '20260126_211624',
  },
  {
    up: migration_20260304_233728_template_reset_features.up,
    down: migration_20260304_233728_template_reset_features.down,
    name: '20260304_233728_template_reset_features',
  },
  {
    up: migration_20260317_234829.up,
    down: migration_20260317_234829.down,
    name: '20260317_234829',
  },
  {
    up: migration_20260318_123234.up,
    down: migration_20260318_123234.down,
    name: '20260318_123234'
  },
];
