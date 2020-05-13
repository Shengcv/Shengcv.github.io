// build time:Wed May 13 2020 21:06:50 GMT+0800 (香港标准时间)
window.onload=function(){$.ajax({Type:"GET",url:"https://v1.alapi.cn/api/soul",dataType:"JSON",success:function(t){var a=document.getElementById("title_jitang");a.innerHTML=t.data.title}})};
//rebuild by neat 