if (self.CavalryLogger) { CavalryLogger.start_js(["\/TEe0"]); }

__d('DialogHideOnSuccess',['csx','cx','CSS'],(function a(b,c,d,e,f,g,h,i){function j(k){'use strict';this._layer=k;}j.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('success',this._handle.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype._handle=function(k,event){'use strict';if(c('CSS').matchesSelector(event.getTarget(),"._s"))this._layer.hide();};Object.assign(j.prototype,{_subscription:null});f.exports=j;}),null);
__d("coalesce",[],(function a(b,c,d,e,f,g){function h(){for(var i=0;i<arguments.length;++i)if(arguments[i]!=null)return arguments[i];return null;}f.exports=h;}),null);
__d('OnVisible',['Arbiter','DOM','Event','Parent','Run','Vector','ViewportBounds','coalesce','queryThenMutateDOM'],(function a(b,c,d,e,f,g){var h=[],i,j=0,k=[],l,m,n,o,p;function q(){h.forEach(function(w){w.remove();});if(m){m.remove();l.remove();i.unsubscribe();m=l=i=null;}j=0;h.length=0;}function r(){if(!h.length){q();return;}k.length=0;n=c('Vector').getScrollPosition().y;o=c('Vector').getViewportDimensions().y;p=c('ViewportBounds').getTop();for(var w=0;w<h.length;++w){var x=h[w];if(isNaN(x.elementHeight))k.push(w);x.elementHeight=c('Vector').getElementDimensions(x.element).y;x.elementPos=c('Vector').getElementPosition(x.element);x.hidden=c('Parent').byClass(x.element,'hidden_elem');if(x.scrollArea){x.scrollAreaHeight=c('Vector').getElementDimensions(x.scrollArea).y;x.scrollAreaY=c('Vector').getElementPosition(x.scrollArea).y;}}j=w;}function s(){for(var w=Math.min(h.length,j)-1;w>=0;--w){var x=h[w];if(!x.elementPos||x.removed){h.splice(w,1);continue;}if(x.hidden)continue;var y=n+o+x.buffer,z=false;if(y>x.elementPos.y){var aa=n+p-x.buffer,ba=n+p+o+x.buffer,ca=x.elementPos.y+x.elementHeight,da=!x.strict||aa<x.elementPos.y&&ba>ca;z=da;if(z&&x.scrollArea){var ea=x.scrollAreaY+x.scrollAreaHeight+x.buffer;z=x.elementPos.y>=x.scrollAreaY-x.buffer&&x.elementPos.y<ea;}}if(x.inverse?!z:z){x.remove();x.handler(k.indexOf(w)!==-1);}}}function t(){u();if(h.length)return;m=c('Event').listen(window,'scroll',u);l=c('Event').listen(window,'resize',u);i=c('Arbiter').subscribe('dom-scroll',u);}function u(){c('queryThenMutateDOM')(r,s,'OnVisible/positionCheck');}function v(w,x,y,z,aa,ba){'use strict';this.element=w;this.handler=x;this.strict=y;this.buffer=c('coalesce')(z,300);this.inverse=c('coalesce')(aa,false);this.scrollArea=ba||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();if(h.length===0)c('Run').onLeave(q);t();h.push(this);}v.prototype.remove=function(){'use strict';if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};v.prototype.reset=function(){'use strict';this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();h.indexOf(this)===-1&&h.push(this);t();};v.prototype.setBuffer=function(w){'use strict';this.buffer=w;u();};v.prototype.checkBuffer=function(){'use strict';u();};v.prototype.getElement=function(){'use strict';return this.element;};v.prototype.$OnVisible1=function(){'use strict';return c('Event').listen(c('DOM').find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};Object.assign(v,{checkBuffer:u});f.exports=v;}),null);
__d('ScrollingPager',['Arbiter','CSS','DOM','OnVisible','UIPagelet','$','ge'],(function a(b,c,d,e,f,g){var h={};function i(j,k,l,m){'use strict';this.scroll_loader_id=j;this.pagelet_src=k;this.data=l;this.options=m||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=j;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}i.prototype.setBuffer=function(j){'use strict';this.options.buffer=j;this.onvisible&&this.onvisible.setBuffer(j);};i.prototype.getBuffer=function(){'use strict';return this.options.buffer;};i.prototype.register=function(){'use strict';this.onvisible=new (c('OnVisible'))(c('$')(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,c('ge')(this.scroll_area_id));h[this.scroll_loader_id]=this;c('Arbiter').inform(i.REGISTERED,{id:this.scroll_loader_id});};i.prototype.getInstance=function(j){'use strict';return h[j];};i.prototype.getHandler=function(){'use strict';if(this.handler)return this.handler;function j(k){var l=c('ge')(this.scroll_loader_id);if(!l){this.onvisible.remove();return;}c('CSS').addClass(l.firstChild,'async_saving');var m=this.options.handler,n=this.options.force_remove_pager&&this.scroll_loader_id!==this.target_id;this.options.handler=function(){c('Arbiter').inform('ScrollingPager/loadingComplete');m&&m.apply(null,arguments);if(n)c('DOM').remove(l);};if(k)this.data.pager_fired_on_init=true;c('UIPagelet').loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return j.bind(this);};i.prototype.setHandler=function(j){'use strict';this.handler=j;};i.prototype.removeOnVisible=function(){'use strict';this.onvisible.remove();};i.prototype.checkBuffer=function(){'use strict';this.onvisible&&this.onvisible.checkBuffer();};i.getInstance=function(j){'use strict';return h[j];};Object.assign(i,{REGISTERED:'ScrollingPager/registered'});f.exports=i;}),null);
__d('legacy:ui-scrolling-pager-js',['ScrollingPager'],(function a(b,c,d,e,f,g){b.ScrollingPager=c('ScrollingPager');}),3);
__d('TabIsolation',['Event','Focus','Keys','TabbableElements','containsNode'],(function a(b,c,d,e,f,g){var h=[],i=0;function j(k){'use strict';this.$TabIsolation3=k;this.$TabIsolation1=null;this.$TabIsolation2=i++;}j.prototype.enable=function(){'use strict';h.unshift(this.$TabIsolation2);this.$TabIsolation1=c('Event').listen(window,'keydown',function(k){if(h[0]===this.$TabIsolation2)this.$TabIsolation4(k);}.bind(this),c('Event').Priority.URGENT);};j.prototype.disable=function(){'use strict';if(this.$TabIsolation1){var k=h.indexOf(this.$TabIsolation2);if(k>-1)h.splice(k,1);this.$TabIsolation1.remove();this.$TabIsolation1=null;}};j.prototype.$TabIsolation4=function(k){'use strict';if(c('Event').getKeyCode(k)!==c('Keys').TAB)return;var l=k.getTarget();if(!l)return;var m=c('TabbableElements').find(this.$TabIsolation3),n=m[0],o=m[m.length-1],p=k.getModifiers(),q=p.shift;if(q&&l===n){k.preventDefault();c('Focus').set(o);}else if(!q&&l===o||!c('containsNode')(this.$TabIsolation3,l)){k.preventDefault();c('Focus').set(n);}};f.exports=j;}),null);
__d('AccessibleLayer',['fbt','DOM','Event','Focus'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._afterShowSubscription=this._layer.subscribe('aftershow',this._onAfterShow.bind(this));};i.prototype.disable=function(){'use strict';this._listener&&this._listener.remove();this._afterShowSubscription.unsubscribe();this._listener=this._afterShowSubscription=null;};i.prototype._closeListener=function(event){'use strict';var j=this._layer.getCausalElement();if(j)if(j.tabIndex==-1){j.tabIndex=0;c('Focus').setWithoutOutline(j);}else c('Focus').set(j);this._layer.hide();};i.prototype._onAfterShow=function(){'use strict';var j=this._layer.getContentRoot();if(c('DOM').scry(j,'.layer_close_elem')[0])return;var k=c('DOM').create('a',{className:'accessible_elem layer_close_elem',href:'#',role:'button'},[h._("Close popup and return")]);c('DOM').appendContent(j,k);this._listener=c('Event').listen(k,'click',this._closeListener.bind(this));};f.exports=i;}),null);
__d('ContextualDialogARIA',['DOM','getOrCreateDOMID'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('beforeshow',this._addAriaAttribute.bind(this));};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};h.prototype._addAriaAttribute=function(){'use strict';var i=this._layer.getCausalElement();if(!i)return;var j=c('DOM').scry(this._layer.getRoot(),'.accessible_elem');if(j.length)i.setAttribute('aria-describedby',c('getOrCreateDOMID')(j[0]));};f.exports=h;}),null);
__d('focusWithinLayer',['AccessibilityConfig','DOMQuery','Focus','TabbableElements','getActiveElement'],(function a(b,c,d,e,f,g){function h(i){var j=c('DOMQuery').scry(i,'.autofocus')[0],k=true;if(!j){var l=c('getActiveElement')();if(c('DOMQuery').isNodeOfType(l,['input','textarea']))return;var m=c('TabbableElements').find(i);for(var n=0;n<m.length;n++){var o=m[n];if(o.tagName!=='A'||c('AccessibilityConfig').a11yInitialDialogFocusElement&&o.getAttribute('role')==='button'){j=m[n];break;}}}else if(j.tabIndex!==0)k=false;if(j){k?c('Focus').set(j):c('Focus').setWithoutOutline(j);}else if(!i.offsetWidth){i.tabIndex=-1;c('Focus').setWithoutOutline(i);}}f.exports=h;}),null);
__d('LayerAutoFocus',['focusWithinLayer'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;this._subscription=null;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('aftershow',this._focus.bind(this));};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};h.prototype._focus=function(){'use strict';var i=this._layer.getRoot();i&&c('focusWithinLayer')(i);};f.exports=h;}),null);
__d('LayerButtons',['csx','Button','Event','Parent'],(function a(b,c,d,e,f,g,h){function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._listener=c('Event').listen(this._layer.getRoot(),'click',this._handle.bind(this));};i.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};i.prototype._handle=function(j){'use strict';var k=j.getTarget(),l=c('Parent').byClass(k,'layerHide');if(l){this._layer.hide();return;}var m=c('Parent').byClass(k,'layerConfirm');if(m){if(this._isButton(m)&&!c('Button').isEnabled(m))return;if(this._isInNestedLayer(m))return;if(this._layer.inform('confirm',m)===false)j.prevent();return;}var n=c('Parent').byClass(k,'layerCancel');if(n){if(this._isButton(n)&&!c('Button').isEnabled(n))return;if(this._isInNestedLayer(n))return;if(this._layer.inform('cancel',n)!==false)this._layer.hide();j.prevent();return;}var o=c('Parent').byClass(k,'layerButton');if(o){if(this._isButton(o)&&!c('Button').isEnabled(o))return;if(this._isInNestedLayer(o))return;if(this._layer.inform('button',o)===false)j.prevent();}};i.prototype._isInNestedLayer=function(j){'use strict';var k=c('Parent').byClass(j,'uiLayer'),l=this._layer.getRoot();return !!(k&&l!==k);};i.prototype._isButton=function(j){'use strict';return !!(c('Parent').byClass(j,'uiButton')||c('Parent').bySelector(j,"._42ft"));};i.prototype._listener=null;f.exports=i;}),null);
__d('LayerFadeOnHide',['Animation','Layer','Style','UserAgent_DEPRECATED','emptyFunction','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';if(c('UserAgent_DEPRECATED').ie()<9)return;this._subscription=this._layer.subscribe('starthide',this._handleStartHide.bind(this));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};h.prototype._getDuration=function(){'use strict';return 150;};h.prototype._handleStartHide=function(){'use strict';var i=true,j=c('Layer').subscribe('show',function(){j.unsubscribe();i=false;});c('setTimeoutAcrossTransitions')(function(){j.unsubscribe();j=null;var k=function(){this._layer.finishHide();}.bind(this);if(i){this._animate(k);}else k();}.bind(this),0);return false;};h.prototype._animate=function(i){'use strict';var j=this._layer.getRoot();new (c('Animation'))(j).from('opacity',1).to('opacity',0).duration(this._getDuration()).ondone(function(){c('Style').set(j,'opacity','');i();}).go();};h.forDuration=function(i){var j,k;'use strict';j=babelHelpers.inherits(l,h);k=j&&j.prototype;function l(){j.apply(this,arguments);}l.prototype._getDuration=c('emptyFunction').thatReturns(i);return l;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('LayerFadeOnShow',['Bootloader','Run','Style','UserAgent_DEPRECATED','emptyFunction','ifRequired'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;c('Run').onAfterLoad(function(){c('Bootloader').loadModules(["Animation"],c('emptyFunction'),'LayerFadeOnShow');});}h.prototype.enable=function(){'use strict';if(c('UserAgent_DEPRECATED').ie()<9)return;this._subscriptions=[this._layer.subscribe('beforeshow',function(){c('Style').set(this._layer.getRoot(),'opacity',0);}.bind(this)),this._layer.subscribe('show',this._animate.bind(this))];};h.prototype.disable=function(){'use strict';if(this._subscriptions){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;}};h.prototype._getDuration=function(){'use strict';return 100;};h.prototype._animate=function(){'use strict';var i=this._layer.getRoot();c('ifRequired')('Animation',function(j){return (new j(i).from('opacity',0).to('opacity',1).duration(this._getDuration()).ondone(c('Style').set.bind(null,i,'opacity','')).go());}.bind(this),c('Style').set.bind(null,i,'opacity',''));};h.forDuration=function(i){var j,k;'use strict';j=babelHelpers.inherits(l,h);k=j&&j.prototype;function l(){j.apply(this,arguments);}l.prototype._getDuration=c('emptyFunction').thatReturns(i);return l;};Object.assign(h.prototype,{_subscriptions:null});f.exports=h;}),null);
__d('LayerFormHooks',['Event'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';var i=this._layer.getRoot();this._subscriptions=[c('Event').listen(i,'submit',this._onSubmit.bind(this)),c('Event').listen(i,'success',this._onSuccess.bind(this)),c('Event').listen(i,'error',this._onError.bind(this))];};h.prototype.disable=function(){'use strict';this._subscriptions.forEach(function(i){i.remove();});this._subscriptions=null;};h.prototype._onSubmit=function(event){'use strict';if(this._layer.inform('submit',event)===false)event.kill();};h.prototype._onSuccess=function(event){'use strict';if(this._layer.inform('success',event)===false)event.kill();};h.prototype._onError=function(event){'use strict';var i=event.getData();if(this._layer.inform('error',{response:i.response})===false)event.kill();};Object.assign(h.prototype,{_subscriptions:null});f.exports=h;}),null);
__d('LayerMouseHooks',['Arbiter','ContextualThing','Event','Layer'],(function a(b,c,d,e,f,g){var h=new (c('Arbiter'))();function i(j){'use strict';this._layer=j;this._subscriptions=[];this._currentlyActive=false;}i.prototype.enable=function(){'use strict';this._subscriptions=[h.subscribe('mouseenter',this._handleActive.bind(this)),h.subscribe('mouseleave',this._handleInactive.bind(this)),this._layer.subscribe('hide',function(){this._currentlyActive=false;}.bind(this))];};i.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=[];this._currentlyActive=false;};i.prototype._handleActive=function(j,k){'use strict';if(!this._currentlyActive&&this._isNodeWithinStack(k)){this._layer.inform('mouseenter');this._currentlyActive=true;}};i.prototype._handleInactive=function(j,k){'use strict';if(this._currentlyActive)if(!k||!this._isNodeWithinStack(k)){this._layer.inform('mouseleave');this._currentlyActive=false;}};i.prototype._isNodeWithinStack=function(j){'use strict';return c('ContextualThing').containsIncludingLayers(this._layer.getContentRoot(),j);};c('Layer').subscribe('show',function(j,k){var l=k.getContentRoot(),m=[c('Event').listen(l,'mouseenter',function(){h.inform('mouseenter',l);}),c('Event').listen(l,'mouseleave',function(o){h.inform('mouseleave',o.getRelatedTarget());})],n=k.subscribe('hide',function(){while(m.length)m.pop().remove();n.unsubscribe();m=n=null;});});f.exports=i;}),null);
__d('LayerRefocusOnHide',['ContextualThing','DOM','DOMQuery','Focus','Parent','getActiveElement'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('hide',this._handle.bind(this));};h.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};h.prototype._handle=function(i,event){'use strict';var j=c('getActiveElement')();if(j===document.body||c('DOMQuery').contains(this._layer.getRoot(),j)){var k=this._layer.getCausalElement();while(k&&!k.offsetWidth){var l=c('Parent').byClass(k,'uiToggle');if(l&&l.offsetWidth){k=c('DOM').scry(l,'[rel="toggle"]')[0];}else{var m=c('ContextualThing').getContext(k);if(m){k=m;}else k=k.parentNode;}}if(k)if(k.tabIndex!=-1)c('Focus').setWithoutOutline(k);}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('LayerRemoveOnHide',['DOM'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('hide',c('DOM').remove.bind(null,this._layer.getRoot()));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('LayerTabIsolation',['TabIsolation'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;this._tabIsolation=null;}h.prototype.enable=function(){'use strict';this._tabIsolation=new (c('TabIsolation'))(this._layer.getRoot());this._subscriptions=[this._layer.subscribe('show',this._tabIsolation.enable.bind(this._tabIsolation)),this._layer.subscribe('hide',this._tabIsolation.disable.bind(this._tabIsolation))];};h.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._tabIsolation.disable();this._tabIsolation=null;};Object.assign(h.prototype,{_subscriptions:[]});f.exports=h;}),null);
__d('ContextualDialogDefaultTheme',['cx'],(function a(b,c,d,e,f,g,h){var i={wrapperClassName:"_53ip",arrowDimensions:{offset:15,length:16}};f.exports=i;}),null);
__d('ContextualDialogFitInViewport_PUSHSAFE',['Style','Vector'],(function a(b,c,d,e,f,g){var h=50,i=10;function j(k){'use strict';this._layer=k;this._contentHeight=null;this._contextY=null;}j.prototype.enable=function(){'use strict';var k=this._layer.getArrowDimensions();this._arrowOffset=k.offset;var l=k.length;this._arrowBuffer=this._arrowOffset+l;this._subscription=this._layer.subscribe(['reposition'],function(m,n){if(!this._layer.isFixed()||n.isVertical())return;this._adjustPosition();}.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype._getContentHeight=function(){'use strict';return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};j.prototype._getContextY=function(){'use strict';return c('Vector').getElementPosition(this._layer.getContext(),'viewport').y;};j.prototype._adjustPosition=function(){'use strict';var k=this._getContextY(),l=this._getContentHeight();if(k===this._contextY&&l===this._contentHeight)return;this._contextY=k;this._contentHeight=l;var m=c('Vector').getViewportDimensions().y,n=Math.min(Math.max(0,k+l+i-m),Math.max(0,k-h),l-this._arrowOffset-this._arrowBuffer);c('Style').set(this._layer.getContent(),'top',-n+'px');};f.exports=j;}),null);
__d('ContextualDialogKeepInViewport',['ContextualLayerDimensions','Event','Style','Vector','throttle'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;this._listeners=[];this._subscription=null;this._minimumTop=null;}h.prototype.enable=function(){'use strict';var i=this._layer.getArrowDimensions();this._arrowOffset=i.offset;var j=i.length;this._arrowBuffer=this._arrowOffset+j;this._subscription=this._layer.subscribe(['show','hide','reposition'],function(k,l){if(this._layer.isFixed())return;if(k=='reposition'){this._calculateMinimumTop(l);this._adjustForScroll();}else if(k=='show'){this._attachScroll();this._adjustForScroll();}else this._detachScroll();}.bind(this));if(this._layer.isShown())this._attachScroll();};h.prototype.disable=function(){'use strict';if(this._layer.isShown())this._detachScroll();this._subscription.unsubscribe();this._subscription=null;};h.prototype._attachScroll=function(){'use strict';var i=c('throttle')(this._adjustForScroll.bind(this)),j=this._layer.getContextScrollParent()||window;this._listeners=[c('Event').listen(j,'scroll',i),c('Event').listen(window,'resize',i)];};h.prototype._detachScroll=function(){'use strict';while(this._listeners.length)this._listeners.pop().remove();this._listeners=[];};h.prototype._getContentHeight=function(){'use strict';if(!this._layer._contentWrapper)return 0;return c('Vector').getElementDimensions(this._layer._contentWrapper).y;};h.prototype._getContextY=function(){'use strict';return c('Vector').getElementPosition(this._layer.getContext()).y;};h.prototype._calculateMinimumTop=function(i){'use strict';if(i.isVertical())return;this._minimumTop=this._getContextY()-(this._getContentHeight()-this._arrowBuffer)+i.getOffsetY();};h.prototype._adjustForScroll=function(){'use strict';var i=this._layer.getOrientation(),j=this._layer.getContent();if(i.isVertical()||!j)return;var k=c('ContextualLayerDimensions').getViewportRect(this._layer),l=k.b-this._minimumTop;if(l<0)return;var m=this._getContentHeight(),n=m-(this._arrowBuffer+this._arrowOffset),o=Math.max(0,Math.min(n,n-(l-m)));c('Style').set(j,'top',-o+'px');};f.exports=h;}),null);
__d('ContextualDialog',['csx','cx','invariant','ContextualDialogARIA','AccessibleLayer','ContextualDialogArrow','ContextualDialogDefaultTheme','ContextualDialogKeepInViewport','ContextualDialogFitInViewport_PUSHSAFE','ContextualLayer','CSS','DOM','Event','JSXDOM','LayerButtons','LayerFormHooks','LayerRefocusOnHide','LayerHideOnTransition','LayerMouseHooks','Style','removeFromArray','shield'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=0,n=300;k=babelHelpers.inherits(o,c('ContextualLayer'));l=k&&k.prototype;function o(p,q){'use strict';l.constructor.call(this,p,q);this._footer=null;}o.prototype._configure=function(p,q){'use strict';Object.assign(p,p.theme||c('ContextualDialogDefaultTheme'));var r=p.arrowBehavior||c('ContextualDialogArrow');p.addedBehaviors=p.addedBehaviors||[];p.addedBehaviors.push(r);l._configure.call(this,p,q);this._footer=c('DOM').scry(q,"div._572u")[0];if(this._footer)if(this._footer.children.length===1&&this._footer.children[0].nodeName==='DIV'&&this._footer.children[0].children.length===0){this._footer.parentNode.removeChild(this._footer);}else c('CSS').addClass(this.getContentRoot(),"_kc");if(p.hoverContext)this._registerHoverHandlers(p.hoverContext,p.hoverShowDelay,p.hoverHideDelay);};o.prototype._registerHoverHandlers=function(p,q,r){'use strict';if(q==null)q=m;if(r==null)r=n;var s,t,u=function(event){clearTimeout(t);s=setTimeout(c('shield')(this.show,this),q);}.bind(this),v=function(event){if(this._isHoverLocked())return;clearTimeout(s);t=setTimeout(this.hide.bind(this),r);}.bind(this),w=c('Event').listen(p,'mouseenter',u),x=c('Event').listen(p,'mouseleave',v),y=this.subscribe('mouseenter',u),z=this.subscribe('mouseleave',v);this.subscribe('destroy',function(){clearTimeout(t);w.remove();x.remove();y.unsubscribe();z.unsubscribe();});};o.prototype._getDefaultBehaviors=function(){'use strict';var p=l._getDefaultBehaviors.call(this);c('removeFromArray')(p,c('LayerHideOnTransition'));return p.concat([c('AccessibleLayer'),c('LayerRefocusOnHide'),c('ContextualDialogKeepInViewport'),c('ContextualDialogFitInViewport_PUSHSAFE'),c('LayerButtons'),c('LayerFormHooks'),c('LayerMouseHooks'),c('ContextualDialogARIA')]);};o.prototype._buildWrapper=function(p,q){'use strict';this._innerWrapper=c('JSXDOM').div(null,q);var r=l._buildWrapper.call(this,p,this._innerWrapper);c('CSS').addClass(r,p.wrapperClassName);this.replaceEntireLayerContents(q);this.getContent()===q||j(0);this.setWidth(p.width);return r;};o.prototype.getContentRoot=function(){'use strict';!!this._innerWrapper||j(0);return this._innerWrapper;};o.prototype.setContent=function(p){'use strict';j(0);};o.prototype.replaceEntireLayerContents=function(p){'use strict';this._content=null;c('DOM').empty(this.getContentRoot());this.setInnerContent(p);};o.prototype.setInnerContent=function(p){'use strict';c('CSS').addClass(p,"_53ij");if(this.getContent()){c('DOM').replace(this.getContent(),p);}else c('DOM').appendContent(this.getContentRoot(),p);this._content=p;this.isShown()&&this.updatePosition();};o.prototype.setWidth=function(p){'use strict';c('Style').set(this.getContentRoot(),'width',p?Math.floor(p)+'px':'');return this;};o.prototype.getFooter=function(){'use strict';return this._footer;};o.prototype.lockHover=function(){'use strict';this._hoverLocked=true;return this;};o.prototype.unlockHover=function(){'use strict';this._hoverLocked=false;return this;};o.prototype._isHoverLocked=function(){'use strict';return !!this._hoverLocked;};o.setContext=function(p,q){'use strict';p.setContext(q);};f.exports=o;}),null);
__d('ContextualDialogXUITheme',['cx'],(function a(b,c,d,e,f,g,h){var i={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};f.exports=i;}),null);