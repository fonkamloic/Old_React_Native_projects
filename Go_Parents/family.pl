child(mary, steve).
child(mary, anne).
child(alice, anne).
child(alice, steve).
allChild(X):- child(X, steve), child(X, anne).


