var curry = {};

curry.effectful = function(val) {
    return function() {
        return val;
    };
};

curry.F2 = function(fun) {
    return function(a) {
        return function(b) {
            return fun(a, b);
        };
    };
};

curry.F3 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fun(a, b, c);
            };
        };
    };
};

curry.F4 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return fun(a, b, c, d);
                };
            };
        };
    };
};

curry.F5 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return fun(a, b, c, d, e);
                    };
                };
            };
        };
    };
};

curry.F6 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return fun(a, b, c, d, e, f);
                        };
                    };
                };
            };
        };
    };
};

curry.F7 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return function(g) {
                                return fun(a, b, c, d, e, f, g);
                            };
                        };
                    };
                };
            };
        };
    };
};

curry.F8 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return function(g) {
                                return function(h) {
                                    return fun(a, b, c, d, e, f, g, h);
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

curry.F9 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return function(g) {
                                return function(h) {
                                    return function(i) {
                                        return fun(a, b, c, d, e, f, g, h, i);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

curry.F10 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return function(g) {
                                return function(h) {
                                    return function(i) {
                                        return function(j) {
                                            return fun(a, b, c, d, e, f, g, h, i, j);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

curry.F11 = function(fun) {
    return function(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function(e) {
                        return function(f) {
                            return function(g) {
                                return function(h) {
                                    return function(i) {
                                        return function(j) {
                                            return function(k) {
                                                return fun(a, b, c, d, e, f, g, h, i, j, k);
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};

module.exports = curry;
