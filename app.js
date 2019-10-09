<script>
        document.getElementById('link').onclick = function () {
            console.log("entre al js");            
            // console.log("datos form: "+ data);
            //setTimeout(function () { location.href = "@Url.Action("GeneraDJ", "Procesos")" }, 3000);
            setTimeout(function () {            
                document.getElementById("form_dj").submit();            
            }, 3000);            
        };
</script>