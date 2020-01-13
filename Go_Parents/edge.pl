ed(a,b).
ed(a,f).
ed(b,c).
ed(f,g).
ed(g,c).
ed(f,c).
ed(f,e).
te(Node1, Node2):- ed(Node1, A) , ed(A, Node2).
