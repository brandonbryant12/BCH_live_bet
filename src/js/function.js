<script>
$(document).ready(function
{

//Nav bar matchups
var matchups = ["Titans @ Chargers (9:30am)", "Patriots @ Bills (1:00pm)","Pathers @ Eagles (1:00pm)", "Saints @ Ravens (4:05pm)","Cowboys @ Redskins (4:25pm)","Giants @ Falcons (8:15pm)"];

var i;
var text = "<li><a href=\"#\">";
for (i = 0; i < matchups.length; i++) {
if(i != matchups.length){
  text += matchups[i] + "</a></li><li class=\"active\"><a href=\"#\">";
}
else{
  text += matchups[i] + "</a></li>";
}



}
});
</script>
