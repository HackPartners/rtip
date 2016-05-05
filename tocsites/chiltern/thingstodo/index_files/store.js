cloudiq_check_action();function cloudiq_check_action(){cloudiq_init_basket_recovery();var cancel_patt=/purchase\/Confirmation/ig;if(cancel_patt.test(window.location.href)){cloud_iq_cancel_basket();cloudiq_send_order_id()}else{cloud_iq_go()}}function cloudiq_send_order_id(){var tid=setInterval(function(){if(document.readyState!=="complete")return;clearInterval(tid);cloudiq_delay()},100)}function cloudiq_delay(){setTimeout(function(){cloudiq_get_order_id()},1000)}function cloudiq_get_order_id(){var order_id=document.querySelector('#ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_OrderConfirmation_PanelBookingRef span');if(order_id.innerText){order_id=order_id.innerText}else{order_id=order_id.textContent}var cloudiq_src_query="session_id=&app_id="+cloudiq_app_id+"&mode=cancel&cloudiqOrderNo="+order_id;var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}function cloud_iq_go(){var tid=setInterval(function(){if(document.readyState!=="complete")return;clearInterval(tid);cloudiq_action()},100)}function cloudiq_action(){var checkout_patt=/PaymentDetails|purchase\/JourneyDetails/ig;var clickthrough_patt=/cloudiq_session_id/ig;var product_patt=/JourneyPlanning\/MixingDeck|journeyplanning\/seasonmixingdeck/ig;var login_patt=/login|Register/ig;if(checkout_patt.test(window.location.href)){cloudiq_set_events(false);cloudiq_send_basket_info();cloudiq_set_payment_event()}else if(login_patt.test(window.location.href)){cloudiq_set_events(true);cloudiq_store_history("true","0")}else if(clickthrough_patt.test(window.location.href)&&!cart_patt.test(window.location.href)){cloudiq_landing_page_check()}else if(product_patt.test(window.location.href)){cloudiq_product_page()}else{cloudiq_store_history("true","0")}}function cloudiq_init_basket_recovery(){window.cloudiq_src_url="//platform2.cloud-iq.com/cartrecovery/";window.cloudiq_app_id="2256";window.cloudiq_base_campaign_id="803";window.cloudiq_basket_timeout="1800";window.cloudiq_contact_number_field="ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_MobilePhoneNumber";window.cloudiq_contact_email_field=/ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_EmailAddress|ctl00_mainContentPlaceHolder_loginControl_EmailAddress|ctl00_mainContentPlaceHolder_txtEmailAddress/ig;window.cloudiq_contact_first_name_field="ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_FirstName";window.cloudiq_contact_last_name_field="ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_Surname";window.cloudiq_contact_title="title";window.cloudiq_contact_county="county";window.cloudiq_contact_post_code="ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_UserAddresses_mainAddressBbc_AddressNew_txtPostcodeEntry";window.cloudiq_discount_code="coupon";var s=document.createElement('img');s.setAttribute('id','cloudiq_hidden_pixel');s.setAttribute('style','display:none;');document.getElementsByTagName('head')[0].appendChild(s)}function cloudiq_ajax_detection(){ $(document).ajaxSuccess(function(event,xhr,settings){if(settings.url=="myURL"){}});Ajax.Responders.register({onComplete:function(){}});_send=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){var callback=this.onreadystatechange;this.onreadystatechange=function(){if(this.readyState==4){var tid=setInterval(function(){if(document.readyState!=="complete")return;clearInterval(tid)},100)}callback.apply(this,arguments)};_send.apply(this,arguments)}}function cloudiq_set_events(start_session){var input=document.getElementsByTagName('input');var select=document.getElementsByTagName('select');var inputArr=[];for(var i=input.length;i--;inputArr.unshift(input[i]));var selectArr=[];for(var i=select.length;i--;selectArr.unshift(select[i]));var elements=inputArr.concat(selectArr);var l=elements.length;for(var i=0;i<l;i++){var form_element=elements[i];if(form_element.type!='hidden'&&form_element.type!='password'&&form_element.type!='submit'){if(form_element.attachEvent){form_element.attachEvent('onblur',function(){cloudiq_send_basket(start_session)})}else{form_element.addEventListener('blur',function(){cloudiq_send_basket(start_session)},false)}}}}function cloudiq_get_discount_code(){var field=document.getElementById('discount_code');if(field&&field.attachEvent){field.attachEvent('onblur',cloudiq_send_discount_code)}else if(field){field.addEventListener('blur',cloudiq_send_discount_code,false)}}function cloudiq_send_discount_code(){var cloudiq_src_query=cloudiq_set_src_query("store");var discount_code=document.getElementById('discount_code').value;cloudiq_src_query+="&cloudiqDiscountCode="+discount_code;cloudiq_src_query+=cloudiq_get_page_details();var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_set_src_query(mode){var cloudiq_src_query="mode="+mode+"&session_id=&app_id="+cloudiq_app_id;cloudiq_src_query+="&basket_timeout="+cloudiq_basket_timeout;cloudiq_src_query+="&base_campaign_id="+cloudiq_base_campaign_id;if(typeof(cloudiq_sms_delay)!=="undefined"){cloudiq_src_query+="&cloudiq_sms_delay="+cloudiq_sms_delay}if(typeof(cloudiq_sms_campaign_id)!=="undefined"){cloudiq_src_query+="&sms_campaign_id="+cloudiq_sms_campaign_id}if(typeof(cloudiq_email_campaign_id)!=="undefined"){cloudiq_src_query+="&email_campaign_id="+cloudiq_email_campaign_id}if(typeof(cloudiq_old_app_id)!=="undefined"){cloudiq_src_query+="&cloudiq_old_app_id="+cloudiq_old_app_id}if(typeof(baseAppId)!=="undefined"){cloudiq_src_query+="&baseAppId="+baseAppId}return cloudiq_src_query}function cloudiq_set_overlay_src_query(mode){var cloudiq_overlay_src_query="mode="+mode+"&session_id=&app_id="+cloudiq_overlay_app_id;cloudiq_overlay_src_query+="&basket_timeout="+cloudiq_overlay_basket_timeout;cloudiq_overlay_src_query+="&base_campaign_id="+cloudiq_overlay_base_campaign_id;if(typeof(cloudiq_overlay_email_campaign_id)!=="undefined"){cloudiq_overlay_src_query+="&email_campaign_id="+cloudiq_overlay_email_campaign_id}if(typeof(cloudiq_old_app_id)!=="undefined"){cloudiq_overlay_src_query+="&cloudiq_old_app_id="+cloudiq_old_app_id}return cloudiq_overlay_src_query}function cloudiq_get_clickthrough(){var shopping_patt=/chilternrailways\.co\.uk/ig;var cloudiq_patt=/cloudiq_session_id/ig;if(shopping_patt.test(window.location.href)){if(cloudiq_patt.test(window.location.href)){var cloudiq_src_query="&email_clickthrough=True";cloudiq_src_query+="&cloudiq_session_id="+cloudiq_get_url_param(cloudiq_patt)}else{var cloudiq_src_query=""}}else{var cloudiq_src_query=""}return cloudiq_src_query}function cloudiq_get_url_param(parameter){var hash=window.location.hash;var keyval=hash.split("=");value=keyval[1];return value}function cloudiq_landing_page_check(){cloudiq_src_query=cloudiq_set_src_query("store");cloudiq_src_query+=cloudiq_get_page_details();cloudiq_src_query+=cloudiq_get_clickthrough();cloudiq_src_query+="&cloudiq_page_load=true&cloudiq_cart_started=0";cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_get_page_details(){var page_title=document.title;page_title=encodeURIComponent(page_title);var page_url=window.location.href;page_url=encodeURIComponent(page_url);var referrer=document.referrer;referrer=encodeURIComponent(referrer);var client_url=/chilternrailways\.co\.uk/ig;if(!client_url.test(document.referrer)){var cloudiq_referring_url=document.referrer}var cloudiq_src_query="&page_title="+page_title+"&page_url="+page_url;if(typeof(cloudiq_referring_url)!=='undefined'){cloudiq_referring_url=cloudiq_referring_url.substring(0,250);cloudiq_src_query=cloudiq_src_query+"&cloudiqReferringURL="+encodeURIComponent(cloudiq_referring_url)}else{referrer=referrer.substring(0,250);cloudiq_src_query=cloudiq_src_query+"&referrer="+referrer}return cloudiq_src_query}function cloudiq_send_page_details(){cloudiq_src_query=cloudiq_set_src_query("store");cloudiq_src_query+=cloudiq_get_page_details();cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_detect_paypal_click(){var links=document.getElementsByTagName('a');var linkArr=[];for(var i=links.length;i--;linkArr.unshift(links[i]));var l=linkArr.length;var count=0;for(var i=0;i<l;i++){var link=links[i];var id_patt=/ec_shortcut/ig;if(id_patt.test(link.id)){var paypal=link;if(paypal.attachEvent){paypal.attachEvent('onclick',function(){cloudiq_send_payment_method("paypal")})}else{paypal.addEventListener('click',function(){cloudiq_send_payment_method("paypal")},false)}}}}function cloudiq_attach_element_event(element,event_type,callback){if(element&&element.attachEvent){element.attachEvent("on"+event_type,callback)}else if(element){element.addEventListener(event_type,callback,false)}}function cloudiq_set_payment_event(){var payment_button=document.getElementById('ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_BuyNow');cloudiq_attach_element_event(payment_button,'click',cloudiq_send_payment_method)}function cloudiq_send_payment_method(payment_method){var visa=document.querySelector('.CardRadio .Visa input'),master_card=document.querySelector('.CardRadio .MasterCard input'),maestro=document.querySelector('.CardRadio .Maestro input'),solo=document.querySelector('.CardRadio .Solo input'),diners_club=document.querySelector('.CardRadio .DinersClub input'),american_express=document.querySelector('.CardRadio .AmericanExpress input'),cloudiq_src_query=cloudiq_set_src_query("store");if(visa&&visa.checked){cloudiq_src_query+="&cloudiqBasketPayment=visa"}else if(master_card&&master_card.checked){cloudiq_src_query+="&cloudiqBasketPayment=master_card"}else if(maestro&&maestro.checked){cloudiq_src_query+="&cloudiqBasketPayment=maestro"}else if(solo&&solo.checked){cloudiq_src_query+="&cloudiqBasketPayment=solo"}else if(diners_club&&diners_club.checked){cloudiq_src_query+="&cloudiqBasketPayment=diners_club"}else if(american_express&&american_express.checked){cloudiq_src_query+="&cloudiqBasketPayment=american_express"}var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_product_page(){var cloudiq_src_query=cloudiq_set_src_query("store");var product_viewed=+new Date();cloudiq_src_query+=cloudiq_get_page_details();cloudiq_src_query+=cloudiq_get_clickthrough();cloudiq_src_query+="&cloudiq_page_load=true";cloudiq_src_query+="&cloudiq_product_viewed="+product_viewed;cloudiq_src_query+="&cloudiq_cart_started=0";cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_add_to_basket_event(){var button=document.getElementById('button-cart');if(button.attachEvent){button.attachEvent('onclick',function(){cloudiq_product_picked()})}else{button.addEventListener('click',function(){cloudiq_product_picked()},false)}}function cloudiq_product_picked(){var cloudiq_src_query=cloudiq_set_src_query("store");cloudiq_src_query+=cloudiq_get_page_details();var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_store_history(page_load,cart_started){var cloudiq_src_query=cloudiq_set_src_query("store");cloudiq_src_query+=cloudiq_get_page_details();cloudiq_src_query+="&cloudiq_page_load="+page_load;cart_started?cloudiq_src_query+="&cloudiq_cart_started="+cart_started:"";cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_send_basket_info(){var cloudiq_src_query=cloudiq_set_src_query("store");var basket=cloudiq_get_basket_info();if(basket!=null){if(basket[0]=="true"){cloudiq_src_query+="&cloudiqBasketEmpty="+basket[0]}else{if(basket[0]!=undefined){cloudiq_src_query+="&total="+basket[basket.length-1];cloudiq_src_query+="&cloudiqBasketTotal="+basket[basket.length-1];cloudiq_src_query+="&cloudiqCartStarted=true";cloudiq_src_query+="&cloudiqBasketEmpty=false"}}}cloudiq_src_query+=cloudiq_get_page_details();cloudiq_src_query+=cloudiq_get_clickthrough();var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=true&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_send_basket(start_session){var cloudiq_src_query=cloudiq_set_src_query("store");cloudiq_src_query+=cloudiq_get_form_data();if(this.name||this.id){if(this.name){var current_field=this.name}else if(this.id){var current_field=this.id}}else if(window.event){if(window.event.srcElement.name){var current_field=window.event.srcElement.name}else if(window.event.srcElement.id){var current_field=window.event.srcElement.id}}if(typeof(current_field)!=="undefined"){cloudiq_src_query+="&current_field="+current_field}cloudiq_src_query+=cloudiq_get_page_details();if(start_session){cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started=0&cloudiq_start_session=1"}else if(!start_session){var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=false&cloudiq_cart_started="+cart_started}var repeated_email=(cloudiq_src_query.match(/cloudiqConsumerEmail/g)||[]);for(var i=1;i<repeated_email.length;i++){cloudiq_src_query=cloudiq_src_query.replace(repeated_email[i],'additionalEmail')}cloudiq_update_src_query(cloudiq_src_query)}function cloudiq_get_basket_info(){var basketInfo=new Array();if(document.querySelector('.OrderSummary .orderSummaryTotalCost')){var total=document.querySelector('.OrderSummary .orderSummaryTotalCost');if(total.innerText){var total=total.innerText}else{var total=total.textContent}total=total.replace(/^\s+/,"").replace(/\s+$/,"");var comma_patt=/,/ig;if(comma_patt.test(total)){total=total.replace(",","&#44;")}total=encodeURIComponent(total);var pound_patt=/%C2%A3/ig;if(pound_patt.test(total)){total=total.replace("%C2%A3","")}}basketInfo.push(total);return basketInfo}function cloudiq_get_form_data(){var input_values="";var input=document.getElementsByTagName('input');var select=document.getElementsByTagName('select');var inputArr=[];for(var i=input.length;i--;inputArr.unshift(input[i]));var selectArr=[];for(var i=select.length;i--;selectArr.unshift(select[i]));var elements=inputArr.concat(selectArr);var l=elements.length;for(var i=0;i<l;i++){var form_element=elements[i];var element_value=form_element.value;element_value=cloudiq_encode_field_value(element_value);if((elements[i].type=='text'||elements[i].type=='checkbox'||elements[i].type=='email'||elements[i].type=='radio'||elements[i].tagName=="SELECT")&&elements[i].type!='hidden'&&elements[i].type!='password'){input_values=input_values+cloudiq_get_placeholders(elements[i])}var field_incl_arr=["ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_MobilePhoneNumber","ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_EmailAddress","ctl00_mainContentPlaceHolder_loginControl_EmailAddress","ctl00_mainContentPlaceHolder_txtEmailAddress","ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_FirstName","ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_ctl00_UserRegistration_Surname","ctl00_ctl00_mainContentPlaceHolder_purchaseProcessContentPlaceHolder_UserAddresses_mainAddressBbc_AddressNew_txtPostcodeEntry"];var found=-1;for(var j=0;j<field_incl_arr.length;j++){if(field_incl_arr[j]==elements[i].name){found=j}}var payment_patt=/payment/ig;if(!payment_patt.test(elements[i].name)&&found!=-1){if(elements[i].type=="radio"&&elements[i].checked){input_values=input_values+"&"+elements[i].name+"="+element_value}else if(elements[i].type=='checkbox'){if(elements[i].checked){input_values=input_values+"&"+elements[i].name+"="+element_value}else{input_values=input_values+"&"+elements[i].name+"="}}else if(elements[i].hasChildNodes()){input_values=input_values+"&"+elements[i].name+"="+element_value}else if(elements[i].type=="text"||elements[i].type=="hidden"||elements[i].type=="email"){input_values=input_values+"&"+elements[i].name+"="+element_value}}}if(typeof(first_name)!=="undefined"&&typeof(last_name)!=="undefined"){input_values=input_values+"&cloudiqConsumerName="+first_name+" "+last_name}return input_values}function cloudiq_get_placeholders(field){var input_values="";var field_value=cloudiq_encode_field_value(field.value);if(field.id==cloudiq_contact_number_field||field.name==cloudiq_contact_number_field){input_values=input_values+"&cloudiqConsumerNumber="+field_value}else if(cloudiq_contact_email_field.test(field.id)||cloudiq_contact_email_field.test(field.name)){if(field.value!=""&&field.value.match("^[A-Za-z0-9-_.]+@[a-z0-9-_]+\\.(([a-z]+)|([a-z]+\\.[a-z]+))$")){input_values=input_values+"&cloudiqConsumerEmail="+field_value}}else if(field.id==cloudiq_contact_first_name_field||field.name==cloudiq_contact_first_name_field){if(field.value!=""){input_values=input_values+"&cloudiqConsumerFirstName="+field_value;window.first_name=field_value}}else if(field.id==cloudiq_contact_last_name_field||field.name==cloudiq_contact_last_name_field){input_values=input_values+"&cloudiqConsumerLastName="+field_value;window.last_name=field_value}else if(field.id==cloudiq_contact_title||field.name==cloudiq_contact_title){input_values=input_values+"&cloudiqConsumerTitle="+field_value}else if(field.id==cloudiq_contact_county||field.name==cloudiq_contact_county){input_values=input_values+"&cloudiqConsumerCountyState="+field_value}else if(field.id==cloudiq_contact_post_code||field.name==cloudiq_contact_post_code){input_values=input_values+"&cloudiqConsumerPostZipCode="+field_value}else if(field.id==cloudiq_discount_code||field.name==cloudiq_discount_code){if(field.value!=""){input_values=input_values+"&cloudiqDiscountCode="+field_value}}return input_values}function cloudiq_encode_field_value(field_value){field_value=encodeURIComponent(field_value);return field_value}function cloud_iq_cancel_basket(){try{var cloudiq_src_query=cloudiq_set_src_query("cancel");cloudiq_src_query+=cloudiq_get_page_details();var cart_started=+new Date();cloudiq_src_query+="&cloudiq_page_load=true&cloudiq_cart_started="+cart_started;cloudiq_update_src_query(cloudiq_src_query)}catch(e){}}function cloudiq_update_src_query(cloudiq_src_query){var cloudiq_pixel=document.getElementById("cloudiq_hidden_pixel");cloudiq_pixel.src=window.cloudiq_src_url+"?"+cloudiq_src_query}function cloudiq_get_order_no(){var order_no=window.location.href.split('&OID=')[1].split('&')[0];return order_no}var UTILS=UTILS||{};UTILS.getElementsByClassName=function(className,node,tagName){"use strict";node=node?node:document;var allElems=node.getElementsByTagName(tagName),allElemsLength=allElems.length,elemList=[],i=0,currentElem;for(i;i<allElemsLength;i+=1){currentElem=allElems[i];var elemClasses=currentElem.className.split(" ");for(var j=0;j<elemClasses.length;j++){var currentClass=elemClasses[j];if(currentClass===className){elemList.push(currentElem)}}}return elemList};