<script setup>

</script>
 
<template>
<div>
    <div>Hi , i'm</div>
<div class="start text-6xl font-bold	">
   
        <span class="end1 text-red-400">N</span><span class="middle1">UTTAWA</span>
        <span class="middle2"><i class="fas fa-code"></i></span><span class="end2 text-yellow-500">T</span>
    </div>
    <div>  welcome to my website  🥳🎉</div>
    </div>
</template>
 
<style>





.end1, .middle1, .middle2{
    display: inline-block;
    overflow:hidden;
   
}
.end2{
    position:absolute;
   
}
.middle1, .middle2{
    color: #2f2a2a
}
.middle1 {
    animation: ani1 5s infinite;
    animation-delay: -3s;
    max-width: 0;
}
.middle2 {
    animation: ani2 5s infinite;
    animation-delay: -3s;
    max-width: 0;
}

@keyframes ani1 {
    0% {
    max-width: 500px;
  }
  
  25% {
    max-width: 0;
  }
  
  75% {
    max-width: 0;
  }
  
  90% {
    max-width: 500px;
  }
  
  100% {
    max-width: 500px;
  }
}

@keyframes ani2 {
    0% {
        max-width: 0;
    }

    25% {
        max-width: 0;
    }

    50% {
        max-width: 500px;
    }

    75% {
        max-width: 0;
    }

    100% {
        max-width: 0;
    }
}
</style>