webpackJsonp(["app/js/mobile-bind/index"],{0:function(e,t){e.exports=jQuery},"5844f90fb4369f71479a":function(e,t,i){"use strict";var s=i("90115c5fc1df75f99ef1");new(function(e){return e&&e.__esModule?e:{default:e}}(s).default)},"90115c5fc1df75f99ef1":function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i("7ab4a89ebadbfdecc2bf"),a=s(n),o=i("4602c3f5fe7ad9e3e91d"),d=s(o),r=i("0282bb17fb83bfbfed9b"),u=s(r),f=i("fe53252afd7b6c35cb73"),l=s(f),c=function(){function e(){(0,a.default)(this,e),this.$smsCode=$(".js-sms-send"),this.$form=$("#mobile-bind-form"),this.initCheckCookie(),this.initValidator(),this.initMobileCodeSendBtn(),this.initEvent()}return(0,d.default)(e,[{key:"initEvent",value:function(){var e=this;$("#mobile-bind-modal").on("click","#submit-btn",function(t){return e._submit(t)})}},{key:"_submit",value:function(){this.validator&&this.validator.form()&&(this.$form.submit(),$(".modal").modal("hide"))}},{key:"initCheckCookie",value:function(){var e=this.$form.data("userId")+"-last-login-in";l.default.get(e)&&l.default.get(e)==(new Date).getDate()||($("#mobile-bind-modal").modal(),l.default.set(e,(new Date).getDate()))}},{key:"initValidator",value:function(){var e=this;this.validator=this.$form.validate({currentDom:"#submit-btn",ajax:!0,rules:{password:{required:!0,es_remote:{type:"post"}},mobile:{required:!0,phone:!0,es_remote:{type:"get",callback:function(t){t?e.$smsCode.removeAttr("disabled"):e.$smsCode.attr("disabled",!0)}}},sms_code:{required:!0,unsigned_integer:!0,es_remote:{type:"get"}}},messages:{sms_code:{required:Translator.trans("site.captcha_code.required")}}})}},{key:"initMobileCodeSendBtn",value:function(){var e=this;this.$smsCode.on("click",function(){new u.default({element:".js-sms-send",url:e.$smsCode.data("url"),smsType:"sms_bind"})})}}]),e}();t.default=c}},["5844f90fb4369f71479a"]);