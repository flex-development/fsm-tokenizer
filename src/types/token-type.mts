/**
 * @file Type Aliases - TokenType
 * @module vfile-tokenizer/types/TokenType
 */

import type { TokenTypeMap } from '@flex-development/vfile-tokenizer'

/**
 * Union of registered token types.
 *
 * To register custom token types, augment {@linkcode TokenTypeMap}. They will
 * be added to this union automatically.
 */
type TokenType = TokenTypeMap[keyof TokenTypeMap]

export type { TokenType as default }
