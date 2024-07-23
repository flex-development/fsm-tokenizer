/**
 * @file Test Constructs - codeText
 * @module tests/constructs/codeText
 */

import { codes } from '#src/enums'
import type { Construct, TokenizeContext } from '#src/interfaces'
import type { Code, Guard, Resolver, Tokenizer } from '#src/types'
import * as micromark from 'micromark-core-commonmark'

/**
 * Inline code construct.
 *
 * @const {Construct} codeText
 */
const codeText: Construct = {
  name: micromark.codeText.name,
  previous: micromark.codeText.previous as unknown as Guard,
  resolve: micromark.codeText.resolve as unknown as Resolver,
  test,
  tokenize: micromark.codeText.tokenize as unknown as Tokenizer
}

export default codeText

/**
 * Check if the current character `code` can start this construct.
 *
 * @see {@linkcode Code}
 * @see {@linkcode TokenizeContext}
 *
 * @this {TokenizeContext}
 *
 * @param {Code} code - Current character code
 * @return {boolean} `true` if `code` can start construct
 */
function test(this: TokenizeContext, code: Code): boolean {
  return code === codes.graveAccent
}
