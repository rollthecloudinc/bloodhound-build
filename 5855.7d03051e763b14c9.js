(self.webpackChunkbloodhound=self.webpackChunkbloodhound||[]).push([[5855],{75855:(j,h,s)=>{s.r(h),s.d(h,{takeUntilDestroyed:()=>p,toObservable:()=>m,toSignal:()=>b});var _=s(43144),f=s(15671),P=s(60136),k=s(18486),D=s(35724),i=s(56718),M=s(69751),I=s(4707),N=s(82722);function p(n){n||((0,i.assertInInjectionContext)(p),n=(0,i.inject)(i.DestroyRef));var e=new M.y(function(t){return n.onDestroy(t.next.bind(t))});return function(t){return t.pipe((0,N.R)(e))}}function m(n,e){var t;(null==e||!e.injector)&&(0,i.assertInInjectionContext)(m);var r=null!==(t=e?.injector)&&void 0!==t?t:(0,i.inject)(i.Injector),o=new I.t(1),a=(0,i.effect)(function(){var u;try{u=n()}catch(l){return void(0,i.untracked)(function(){return o.error(l)})}(0,i.untracked)(function(){return o.next(u)})},{injector:r,manualCleanup:!0});return r.get(i.DestroyRef).onDestroy(function(){a.destroy(),o.complete()}),o.asObservable()}var O=function(n){(0,P.Z)(t,n);var e=(0,k.Z)(t);function t(r,o){var a;return(0,f.Z)(this,t),a=e.call(this,function A(n,e){var t="NG0".concat(Math.abs(n));return"".concat(t).concat(e?": "+e:"")}(r,o)),a.code=r,a}return(0,_.Z)(t)}((0,D.Z)(Error));function b(n,e){var t,r,o=!(null!=e&&e.manualCleanup);o&&(null==e||!e.injector)&&(0,i.assertInInjectionContext)(b);var u,a=o?null!==(t=null==e||null===(r=e.injector)||void 0===r?void 0:r.get(i.DestroyRef))&&void 0!==t?t:(0,i.inject)(i.DestroyRef):null;u=(0,i.signal)(null!=e&&e.requireSync?{kind:0}:{kind:1,value:e?.initialValue});var l=n.subscribe({next:function(c){return u.set({kind:1,value:c})},error:function(c){return u.set({kind:2,error:c})}});return a?.onDestroy(l.unsubscribe.bind(l)),(0,i.computed)(function(){var d=u();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new O(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);