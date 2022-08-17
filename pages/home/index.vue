<template>
    <div class="text-break">
        node_modules\bootstrap\scss\_functions.scss 235:43 add()
        node_modules\bootstrap\scss\_variables.scss 852:41 @import
        node_modules\bootstrap\scss\bootstrap.scss 8:9 @import
        sass\main.scss 14:9 root stylesheet
        at Object.wrapException (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:1246:17)
        at _SerializeVisitor0.visitNumber$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:92283:19)
        at ComplexSassNumber0.accept$1$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:89058:22)
        at ComplexSassNumber0.accept$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:89061:19)
        at Object.serializeValue0 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:21884:13)
        at _EvaluateVisitor__serialize_closure2.call$0 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:76674:16)
        at _EvaluateVisitor2._async_evaluate0$_addExceptionSpan$1$2 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73376:23)
        at _EvaluateVisitor2._async_evaluate0$_addExceptionSpan$2 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73397:19)
        at _EvaluateVisitor2._async_evaluate0$_serialize$3$quote (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73112:19)
        at C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:76659:39


        ERROR 5px*em isn't a valid CSS value. 01:39:55
        ╷
        235 │ @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(" + ") + $value2);
        │ ^^^^^^^
        ╵
        node_modules\bootstrap\scss\_functions.scss 235:43 add()
        node_modules\bootstrap\scss\_variables.scss 852:41 @import
        node_modules\bootstrap\scss\bootstrap.scss 8:9 @import
        sass\main.scss 14:9 root stylesheet


        ERROR 01:39:55 [vite] Internal server error: 5px*em isn't a valid CSS value. 01:39:55
        ╷
        235 │ @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(" + ") + $value2);
        │ ^^^^^^^
        ╵
        node_modules\bootstrap\scss\_functions.scss 235:43 add()
        node_modules\bootstrap\scss\_variables.scss 852:41 @import
        node_modules\bootstrap\scss\bootstrap.scss 8:9 @import
        sass\main.scss 14:9 root stylesheet
        Plugin: vite:css
        File: C:\Users\Alan Gama\Desktop\Vue\node_modules\bootstrap\scss\_functions.scss
        Error: 5px*em isn't a valid CSS value.
        ╷
        235 │ @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(" + ") + $value2);
        │ ^^^^^^^
        ╵
        node_modules\bootstrap\scss\_functions.scss 235:43 add()
        node_modules\bootstrap\scss\_variables.scss 852:41 @import
        node_modules\bootstrap\scss\bootstrap.scss 8:9 @import
        sass\main.scss 14:9 root stylesheet
        at Object.wrapException (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:1246:17)
        at _SerializeVisitor0.visitNumber$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:92283:19)
        at ComplexSassNumber0.accept$1$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:89058:22)
        at ComplexSassNumber0.accept$1 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:89061:19)
        at Object.serializeValue0 (C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:21884:13)
        at _EvaluateVisitor__serialize_closure2.call$0 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:76674:16)
        at _EvaluateVisitor2._async_evaluate0$_addExceptionSpan$1$2 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73376:23)
        at _EvaluateVisitor2._async_evaluate0$_addExceptionSpan$2 (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73397:19)
        at _EvaluateVisitor2._async_evaluate0$_serialize$3$quote (C:\Users\Alan
        Gama\Desktop\Vue\node_modules\sass\sass.dart.js:73112:19)
        at C:\Users\Alan Gama\Desktop\Vue\node_modules\sass\sass.dart.js:76659:39
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>