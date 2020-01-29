"use strict";

const regexp = /^(([0-9A-F]{2}[:]){5}[0-9A-F]{2})$/i;
alert(regexp.test("01:32:54:67:89:AB"));
alert(regexp.test("0132546789AB"));
alert(regexp.test("01:32:54:67:89"));
alert(regexp.test("01:32:54:67:89:ZZ"));
