# Haskell for Light Table

**Note**: This thing is most likely not going to be updated. The eval part
has been merged into [light-haskell](https://github.com/jetaggart/light-haskell)
and a general version of the "send stuff to process" pattern is being
implemented in the [lt-interact](https://github.com/heyLu/lt-interact)
plugin.

A plugin that supports inline-evaluation of Haskell code in Light Table.

It spawns a `ghci` process in the background and sends code and commands
to it. It can currently evaluate the current selection or line and display
the type of expressions. Because it uses `ghci` you should also be able
to `import` libraries and do other things that `ghci` supports.

If you have `hoogle` installed, then you can also view the documentation
for the current symbol or the current selection.

## setup

To be able to infer the types of expressions put something like the
following in your `user.keymap`:

    {:+ {:editor.haskell {"ctrl-i" [:editor-type-form]}}}

Alternatively you can use the sidebar actions `Eval: Eval a form in an editor`
and `Eval: Get the type of a form in editor` directly.

For documentation support you have to install `hoogle` and generate an index
with it:

    $ cabal install hoogle
    # wait a bit
    $ hoogle data
    # wait a bit longer

## todo

* select expressions/forms (ideally by asking a proper haskell parser,
    but maybe a guessing based on indentation would also work?)
* search for functions that fit a given type (hoogle supports this but
    might not have an api)
* code-completion
* navigate to the source for code
* better `Connect` support (appear in connections, support quitting)

## ideas

* this interaction style might be suitable for other language
    plugins (spawning a repl, sending commands to it)
* maybe use [hdevtools](https://github.com/bitc/hdevtools) or
    [ghc-mod](https://github.com/kazu-yamamoto/ghc-mod)
