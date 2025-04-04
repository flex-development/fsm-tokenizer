/**
 * @file Type Aliases - ReturnHandle
 * @module fsm-tokenizer/types/ReturnHandle
 */

import type { Construct, Info } from '@flex-development/fsm-tokenizer'

/**
 * Successful construct callback.
 *
 * @see {@linkcode Construct}
 * @see {@linkcode Info}
 *
 * @this {void}
 *
 * @param {Construct} construct
 *  The successful construct
 * @param {Info} info
 *  Info passed around
 * @return {undefined}
 */
type ReturnHandle = (this: void, construct: Construct, info: Info) => undefined

export type { ReturnHandle as default }
