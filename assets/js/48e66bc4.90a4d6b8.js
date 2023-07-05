"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6082:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={},o="AutoML - Classification",i={unversionedId:"Examples/AutoML-Classification",id:"Examples/AutoML-Classification",isDocsHomePage:!1,title:"AutoML - Classification",description:"Prerequisites",source:"@site/docs/Examples/AutoML-Classification.md",sourceDirName:"Examples",slug:"/Examples/AutoML-Classification",permalink:"/FLAML/docs/Examples/AutoML-Classification",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/AutoML-Classification.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoGen - OpenAI",permalink:"/FLAML/docs/Examples/AutoGen-OpenAI"},next:{title:"AutoML - NLP",permalink:"/FLAML/docs/Examples/AutoML-NLP"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"A basic classification example",id:"a-basic-classification-example",children:[{value:"Sample of output",id:"sample-of-output",children:[],level:4}],level:3},{value:"A more advanced example including custom learner and metric",id:"a-more-advanced-example-including-custom-learner-and-metric",children:[],level:3}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"automl---classification"},"AutoML - Classification"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Install the ","[automl]"," option."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "flaml[automl]"\n')),(0,n.kt)("h3",{id:"a-basic-classification-example"},"A basic classification example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom sklearn.datasets import load_iris\n\n# Initialize an AutoML instance\nautoml = AutoML()\n# Specify automl goal and constraint\nautoml_settings = {\n    "time_budget": 1,  # in seconds\n    "metric": \'accuracy\',\n    "task": \'classification\',\n    "log_file_name": "iris.log",\n}\nX_train, y_train = load_iris(return_X_y=True)\n# Train with labeled input data\nautoml.fit(X_train=X_train, y_train=y_train,\n           **automl_settings)\n# Predict\nprint(automl.predict_proba(X_train))\n# Print the best model\nprint(automl.model.estimator)\n')),(0,n.kt)("h4",{id:"sample-of-output"},"Sample of output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[flaml.automl: 11-12 18:21:44] {1485} INFO - Data split method: stratified\n[flaml.automl: 11-12 18:21:44] {1489} INFO - Evaluation method: cv\n[flaml.automl: 11-12 18:21:44] {1540} INFO - Minimizing error metric: 1-accuracy\n[flaml.automl: 11-12 18:21:44] {1577} INFO - List of ML learners in AutoML Run: ['lgbm', 'rf', 'catboost', 'xgboost', 'extra_tree', 'lrl1']\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 0, current learner lgbm\n[flaml.automl: 11-12 18:21:44] {1944} INFO - Estimated sufficient time budget=1285s. Estimated necessary time budget=23s.\n[flaml.automl: 11-12 18:21:44] {2029} INFO -  at 0.2s,  estimator lgbm's best error=0.0733, best estimator lgbm's best error=0.0733\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 1, current learner lgbm\n[flaml.automl: 11-12 18:21:44] {2029} INFO -  at 0.3s,  estimator lgbm's best error=0.0733, best estimator lgbm's best error=0.0733\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 2, current learner lgbm\n[flaml.automl: 11-12 18:21:44] {2029} INFO -  at 0.4s,  estimator lgbm's best error=0.0533, best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 3, current learner lgbm\n[flaml.automl: 11-12 18:21:44] {2029} INFO -  at 0.6s,  estimator lgbm's best error=0.0533, best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 4, current learner lgbm\n[flaml.automl: 11-12 18:21:44] {2029} INFO -  at 0.6s,  estimator lgbm's best error=0.0533, best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:44] {1826} INFO - iteration 5, current learner xgboost\n[flaml.automl: 11-12 18:21:45] {2029} INFO -  at 0.9s,  estimator xgboost's best error=0.0600,  best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:45] {1826} INFO - iteration 6, current learner lgbm\n[flaml.automl: 11-12 18:21:45] {2029} INFO -  at 1.0s,  estimator lgbm's best error=0.0533, best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:45] {1826} INFO - iteration 7, current learner extra_tree\n[flaml.automl: 11-12 18:21:45] {2029} INFO -  at 1.1s,  estimator extra_tree's best error=0.0667,   best estimator lgbm's best error=0.0533\n[flaml.automl: 11-12 18:21:45] {2242} INFO - retrain lgbm for 0.0s\n[flaml.automl: 11-12 18:21:45] {2247} INFO - retrained model: LGBMClassifier(learning_rate=0.2677050123105203, max_bin=127,\n               min_child_samples=12, n_estimators=4, num_leaves=4,\n               reg_alpha=0.001348364934537134, reg_lambda=1.4442580148221913,\n               verbose=-1)\n[flaml.automl: 11-12 18:21:45] {1608} INFO - fit succeeded\n[flaml.automl: 11-12 18:21:45] {1610} INFO - Time taken to find the best model: 0.3756711483001709\n")),(0,n.kt)("h3",{id:"a-more-advanced-example-including-custom-learner-and-metric"},"A more advanced example including custom learner and metric"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/automl_classification.ipynb"},"Link to notebook")," | ",(0,n.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/automl_classification.ipynb"},"Open in colab")))}c.isMDXComponent=!0}}]);