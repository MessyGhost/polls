module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=22)}({22:function(e,r,t){"use strict";t.r(r);var n=t(5),o=t.n(n);o.a.initializers.add("fof/polls",(function(){o.a.extensionData.for("fof-polls").registerPermission({icon:"fa fa-signal",label:o.a.translator.trans("fof-polls.admin.permissions.view_results_without_voting"),permission:"viewPollResultsWithoutVoting",allowGuest:!0},"view").registerPermission({icon:"fa fa-signal",label:o.a.translator.trans("fof-polls.admin.permissions.start"),permission:"startPolls"},"start").registerPermission({icon:"fa fa-pencil-alt",label:o.a.translator.trans("fof-polls.admin.permissions.self_edit"),permission:"selfEditPolls"},"start").registerPermission({icon:"fa fa-signal",label:o.a.translator.trans("fof-polls.admin.permissions.vote"),permission:"votePolls"},"reply").registerPermission({icon:"fa fa-signal",label:o.a.translator.trans("fof-polls.admin.permissions.change_vote"),permission:"changeVotePolls"},"reply").registerPermission({icon:"fa fa-pencil-alt",label:o.a.translator.trans("fof-polls.admin.permissions.moderate"),permission:"discussion.polls"},"moderate")}))},5:function(e,r){e.exports=flarum.core.compat["admin/app"]}});
//# sourceMappingURL=admin.js.map