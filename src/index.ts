import runner from "./runner";

const patches: (() => void)[] = [];

runner(`%(

  (conlog "setsection module" "\n" (wp.props close setSection))
  (conlog "formtext component" "\n" (wp.dname FormText))
  (conlog "header parent" "\n" (wp.dname Header ""))
  (conlog "settingsview prototype" "\n" (prop (wp.dname SettingsView) prototype))

)`);

runner(`%(

  (()
   sink's epic lisp fizzbuzz patent pending
   also eats up a hilarious amount of VM time
  )

  (set-func
      (fizz-buzz x)
      (if (== (mod (x) 3) 0)
          (if (== (mod (x) 5) 0)
              fizzbuzz
              fizz
          )
          (if (== (mod (x) 5) 0)
              buzz
              (get x)
          )
      )
  )

  (set l (list 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20))
  (conlog (map fizz-buzz (l)))

)`);

export default {
  onUnload: () => window._.forEachRight(patches, (p) => p()),
};