let (<||): ('a => 'b, 'c => 'a, 'c) => 'b;

let (||>): ('a => 'b, 'b => 'c, 'a) => 'c;

let (>>=): (Js.Promise.t('a), 'a => 'b) => Js.Promise.t('b);

let (>>=!): (Js.Promise.t('a), Js.Promise.error => 'a) => Js.Promise.t('a);

let (=<<): ('a => 'b, Js.Promise.t('a)) => Js.Promise.t('b);

let (!=<<): (Js.Promise.error => 'a, Js.Promise.t('a)) => Js.Promise.t('a);