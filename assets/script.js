
$(function(){
  $('#acrylic').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('壓克力')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
        }        
    } 
    }
  });  
  }));
});
$(function(){
  $('#all').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
        }        
    } 
    }
  });  
  }));
});

$(function(){
  $('#photography').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('攝影')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
        }        
    } 
    }
  });  
  }));
});

$(function(){
  $('#print').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('版畫')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
        }       
    } 
    }
  });  
  }));
});

$(function(){
  $('#crafts').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('工藝')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    

          $('.content').append(src);
        }        
    } 
    }
  });  
  }));
});

$(function(){
  $('#complex').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('綜合展')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
        }       
    } 
    }
  });  
  }));
});

$(function(){
  $('#calligraphy').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('書法篆刻')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    

          $('.content').append(src);
        }
        

    } 
    }
  });  
  }));


});

$(function(){
  $('#mediums').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('複合媒材')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    

          $('.content').append(src);
        }
        

    } 
    }
  });  
  }));


});

$(function(){
  $('#painting').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('油畫')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    

          $('.content').append(src);
        }
        

    } 
    }
  });  
  }));


});

$(function(){
  $('#paintingIntegrated').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('綜合')!=null){
          
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
          $('.content').append(src);
      
        }
        

    } 
    }
  });  
  }));


});

$(function(){
  $('#ink').bind('click', (function() {
  $.ajax({ 
     type:'GET', 
 url:'http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AS&CaseNo2=4&FileType=1&Lang=C&FolderType=U', 
    success:function (data){    
      $('.content').html('');
      for (i=0;data.length>i;i++) {
        var thisData = JSON.parse(data);
        var src;
        var image;   
        var Type = thisData[i].TYPE;
           
        if(Type.match('水墨')!=null){
          src='<div><img src='+thisData[i].IMAGE1+' '+'><h3>'+thisData[i].NAME+'</h3><p>'+'<img src="images/place.png" id="pla">'+thisData[i].ORGNAME+'   '+thisData[i].PLACE+'</p><p>'+'<img src="images/calendar.png" id="pla">'+thisData[i].EXSDATE+' 至 '+thisData[i].EXEDATE+'</p><p>'+thisData[i].DESCRIPTION+'</p></div>';   $('.content').append(src);    
          

          $('.content').append(src);
        }
        

    } 
    }
  });  
  }));


});
function imgError(image) {
    image.onerror = "";
    image.src = "/images/blank.gif";

    return true;
}


$(document).ready(function () {
$('#all').click();
});