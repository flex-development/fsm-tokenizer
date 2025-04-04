/**
 * @file Type Aliases - Position
 * @module fsm-tokenizer/types/Position
 */

import type { Place } from '@flex-development/fsm-tokenizer'

/**
 * Range between two points in a source file.
 */
interface Position {
  /**
   * Place of last character code in range.
   *
   * @see {@linkcode Place}
   */
  end: Place

  /**
   * Place of first character code in range.
   *
   * @see {@linkcode Place}
   */
  start: Place
}

export type { Position as default }
