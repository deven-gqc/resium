define(["exports","./when-4bbc8319"],(function(e,s){"use strict";e.combine=function e(n,r,t){t=s.defaultValue(t,!1);var o,f,i,a={},c=s.defined(n),p=s.defined(r);if(c)for(o in n)n.hasOwnProperty(o)&&(f=n[o],p&&t&&"object"==typeof f&&r.hasOwnProperty(o)?(i=r[o],a[o]="object"==typeof i?e(f,i,t):f):a[o]=f);if(p)for(o in r)r.hasOwnProperty(o)&&!a.hasOwnProperty(o)&&(i=r[o],a[o]=i);return a}}));