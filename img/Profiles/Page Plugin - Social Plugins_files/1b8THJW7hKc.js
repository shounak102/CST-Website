if (self.CavalryLogger) { CavalryLogger.start_js(["GtNWn"]); }

__d("EmbeddedPostPluginActions",[],(function a(b,c,d,e,f,g){f.exports={EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"};}),null);
__d("EmbeddedPostPluginActionTypes",[],(function a(b,c,d,e,f,g){f.exports={CLICK:"click"};}),null);
__d('AsyncFormRequestUtils',['Arbiter'],(function a(b,c,d,e,f,g){var h={subscribe:function i(j,k,l){c('Arbiter').subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=h;}),null);
__d('PluginTabLoadMore',['CSS','Event'],(function a(b,c,d,e,f,g){'use strict';var h={noMoreContent:function i(){c('Event').fire(this.root,'noMoreContent');c('CSS').hide(this.spinner);},setCursor:function i(j){c('Event').fire(this.root,'setCursor',j);},init:function i(j,k){this.root=j;this.spinner=k;}};f.exports=h;}),null);
__d("XPostPluginLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/platform\/plugin\/post\/logging\/",{});}),null);
__d('PluginFeedFooterActionLogger',['AsyncRequest','DOM','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes','Event','XPostPluginLoggingController'],(function a(b,c,d,e,f,g){var h={initializeClickLoggers:function i(j,k,l,m,n,o,p,q,r){var s=function t(u,v){try{var x=c('DOM').find(j,'.'+u);c('Event').listen(x,'click',function(y){new (c('AsyncRequest'))().setURI(c('XPostPluginLoggingController').getURIBuilder().getURI()).setData({action:v,action_type:c('EmbeddedPostPluginActionTypes').CLICK,source:o,story_token:p,referer_url:q,is_sdk:r}).send();});}catch(w){}};s(k,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);s(l,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);s(m,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);s(n,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);}};f.exports=h;}),null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],(function a(b,c,d,e,f,g){window.resetConfirmStoryLike=function(i){c('CSS').show(c('DOM').find(document,'#likeStory_'+i));c('DOM').remove(c('DOM').find(document,'#confirmStory_'+i));};var h={addClientId:function i(j){j.setAttribute('value',c('ClientIDs').getNewClientID());},loggedOutLikeButton:function i(j,k,l){var m='';if(k===c('FBFeedLocations').EMBED){m='post';}else if(k===c('FBFeedLocations').PAGE_PLUGIN){m='page';}else throw new Error('Invalid FBFeedLocation type.');var n=new (c('PluginOptin'))(m).addReturnParams({act:'like_'+j});c('DOMEventListener').add(l,'click',n.start.bind(n));},init:function i(j,k,l,m,n){var o=function r(s){if(s.type==='keypress')if(s.keyCode===c('Keys').RETURN||s.keyCode===c('Keys').SPACE){c('FormSubmit').send(n);}else return;c('FormSubmit').send(n);};c('DOMEventListener').add(k,'click',o);c('DOMEventListener').add(l,'click',o);c('DOMEventListener').add(k,'keypress',o);c('DOMEventListener').add(l,'keypress',o);var p=m.getAttribute('value')==='1';c('AsyncFormRequestUtils').subscribe(n,'send',function(r){var s=m.getAttribute('value')==='1';c('CSS').conditionShow(l,s);c('CSS').conditionShow(k,!s);c('Arbiter').inform('embeddedUfiToggle',{isLike:s,storyToken:j});m.setAttribute('value',s?'':'1');});c('AsyncFormRequestUtils').subscribe(n,'response',function(r){var s=r.response.payload;if(s&&!s.success){var t=s.isLike;c('CSS').conditionShow(k,t);c('CSS').conditionShow(l,!t);c('Arbiter').inform('revertLike',{isLike:t,storyToken:j});m.setAttribute('value',t?'1':'');}});var q=new (c('URI'))(window.location.search).getQueryData();if(p&&q.act==='like_'+j)c('FormSubmit').send(n);}};f.exports=h;}),null);