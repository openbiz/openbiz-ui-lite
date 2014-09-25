define(function(){
    return function(elem) {

        if(typeof elem =='undefined'){
            elem = $('body');
        }
 try{
	    $('.iCheck').each(function(i) {
		    var  data=$(this).data() ,
			    input=$(this).find("input") ,
			    li=$(this).find("li") ,
			    index="cp"+i ,
			    insert_text,
			    iCheckColor = [ "black", "red","green","blue","aero","grey","orange","yellow","pink","purple"],
			    callCheck=data.style || "flat";
		    if(data.color && data.style !=="polaris" && data.style !=="futurico" ){
			    var hasColor= jQuery.inArray(data.color, iCheckColor);
			    if(hasColor !=-1 && hasColor < iCheckColor.length){
				    callCheck=callCheck+"-"+data.color;
			    }
		    }
		    input.each(function(i) {
			    var self = $(this), label=$(this).next(), label_text=label.html();
			    self.attr("id","iCheck-"+index+"-"+i);
			    if(data.style=="line"){
				    insert_text='<div class="icheck_line-icon"></div><span>'+label_text+'</span>';
				    label.remove();
				    self.iCheck({ checkboxClass: 'icheckbox_'+callCheck, radioClass: 'iradio_'+callCheck, insert:insert_text  });
			    }else{
				    label.attr("for","iCheck-"+index+"-"+i);
			    }
		    });
		    if(data.style!=="line"){
			    input.iCheck({ checkboxClass: 'icheckbox_'+callCheck, radioClass: 'iradio_'+callCheck });
		    }else{
			    li.addClass("line");
		    }
	    });
}catch(e){}

        //////////     MOBILE CHECK    //////////
        var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
        var android = /mobile|android/i.test (navigator.userAgent);

        if(iOS || android){
            $("html").addClass("isMobile");
            if(iOS) { $(".form-control").css("-webkit-appearance","caret"); }
            $("select.input-sm,select.input-lg ").css("line-height","1.3");
        }

 
        //////////     TEXTAREA  AUTO SIZE    //////////    
        // $(elem).find('textarea[data-height="auto"]').autosize();
        // $(elem).find(".widget-write-post textarea").limit({  limit: 20 });

        //////////     INPUT MAXLENGTH    //////////
        $(elem).find("input[maxlength],textarea[maxlength]").each(function() {
            var self = $(this);
            self.maxlength({ bornIn:"#main" });
        });
	
        $(elem).find('.ios-switch .switch').each(function(i) {
            $(this).addClass("ios");
        });
    try{
        $(elem).find('.ios').each(function(i,elem){
            if(!$(elem).hasClass('has-switch')){
                $(elem).bootstrapSwitch();
            }
        })
        $(elem).find('.ios').bootstrapSwitch('setOnLabel', '');
        $(elem).find('.ios').bootstrapSwitch('setOffLabel', '');
    }catch(e){}
}

});
