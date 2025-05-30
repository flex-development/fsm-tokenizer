/**
 * @file Type Aliases - Constructs
 * @module fsm-tokenizer/types/Constructs
 */

import type {
  ConstructPack,
  ConstructRecord
} from '@flex-development/fsm-tokenizer'

/**
 * A single construct, list of constructs, or several constructs mapped from
 * their initial codes.
 *
 * @see {@linkcode ConstructPack}
 * @see {@linkcode ConstructRecord}
 */
type Constructs = ConstructRecord | ConstructPack

export type { Constructs as default }
