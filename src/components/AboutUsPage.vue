<template>
    <div>
        <h1>About Us Page</h1>

        <button @click="goToHome">Go To Home After 1 sec</button>
    </div>
</template>

<script>
export default {
    methods:{
        goToHome: function(){
            // عشان لما هقوله زيس جوه الفانكشن هيبقى معتبرني بتكلم ع الفانكشن
            const self = this;

            setTimeout(function(){
                // programtic navigation 
                // بقوله يسطا بعد ثانية اعمل ريدايركت للينك ده
                self.$router.push({path: "/"});
            }, 1000);
        }
    },
    // route guards
    // قبل ما ادخل ع اللينك ده نفذ كذا كذا و دي طريقة تانية بدل مبحطه ف الراوت 
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter: inside aboutUs component');
        next();
    },

     // route guards
    // قبل ما متخرج من اللينك ده نفذ كذا كذا و دي طريقة تانية بدل مبحطه ف الراوت 
    beforeRouteLeave(to, from, next){
        console.log("beforeRouteLeave: inside aboutUs component");
        
        if( confirm("sure?") ){
            next();
        }
    }
}
</script>