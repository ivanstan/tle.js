!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tle=e():t.Tle=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var r;n.r(e),n.d(e,"Tle",(function(){return i})),n.d(e,"TleProvider",(function(){return s})),n.d(e,"LineNumber",(function(){return r})),function(t){t[t.LINE1=1]="LINE1",t[t.LINE2=2]="LINE2"}(r||(r={}));class i{constructor(t){this.satelliteId=t.satelliteId,this.name=t.name,this.line1=t.line1,this.line2=t.line2}getLine(t){return t===r.LINE1?this.line1:t===r.LINE2?this.line2:""}getLineNumberRaw(t){return this.getLine(t).substring(0,1).trim()}getLineChecksumRaw(t){return this.getLine(t).substring(68,69).trim()}getSatelliteIdRaw(t){return this.getLine(t).substring(2,7).trim()}getClassificationRaw(){return this.line1.substring(7,8).trim()}getLaunchYearRaw(t=!1){return this.line1.substring(9,11).trim()}getLaunchNumberOfTheYearRaw(){return this.line1.substring(11,14).trim()}getLaunchPieceRaw(){return this.line1.substring(14,17).trim()}getEpochYearRaw(){return this.line1.substring(18,20).trim()}getEpochDayRaw(){return this.line1.substring(20,32).trim()}getFirstTimeDerivativeOfMeanMotionRaw(){return this.line1.substring(33,43).trim()}getSecondTimeDerivativeOfMeanMotionRaw(){return this.line1.substring(44,52).trim()}getBstarDragTermRaw(){return this.line1.substring(53,61).trim()}getEphemerisTypeRaw(){return this.line1.substring(62,63).trim()}getElementNumberRaw(){return this.line1.substring(64,68).trim()}getInclinationRaw(){return this.line2.substring(8,16).trim()}getRightAscensionOfAscendingNodeRaw(){return this.line2.substring(17,25).trim()}getEccentricityRaw(){return this.line2.substring(26,33).trim()}getArgumentOfPerigeeRaw(){return this.line2.substring(34,42).trim()}getMeanAnomalyRaw(){return this.line2.substring(43,51).trim()}getMeanMotionRaw(){return this.line2.substring(52,63).trim()}getRevolutionNumberRaw(){return this.line2.substring(63,68).trim()}}var u=function(t,e,n,r){return new(n||(n=Promise))((function(i,u){function s(t){try{l(r.next(t))}catch(t){u(t)}}function o(t){try{l(r.throw(t))}catch(t){u(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}l((r=r.apply(t,e||[])).next())}))};class s{search(t=null){return u(this,void 0,void 0,(function*(){let e=s.URL+"/api/tle";null!==t&&(e+="?search="+t);const n=yield fetch(e),r=yield n.json(),u=[];return u.hasOwnProperty("member")||r.member.forEach(t=>u.push(new i(t))),u}))}get(t){return u(this,void 0,void 0,(function*(){let e=s.URL+"/api/tle/"+t;const n=yield fetch(e),r=yield n.json();return r?new i(r):null}))}}s.URL="https://tle.ivanstanojevic.me"}])}));