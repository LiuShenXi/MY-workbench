// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"path":"/user/login","layout":false,"name":"login","parentId":"1","id":"2"},"3":{"path":"/user","redirect":"/user/login","parentId":"1","id":"3"},"4":{"name":"register-result","icon":"smile","path":"/user/register-result","parentId":"1","id":"4"},"5":{"name":"register","icon":"smile","path":"/user/register","parentId":"1","id":"5"},"6":{"path":"/dashboard","name":"dashboard","icon":"dashboard","parentId":"ant-design-pro-layout","id":"6"},"7":{"path":"/dashboard","redirect":"/dashboard/analysis","parentId":"6","id":"7"},"8":{"name":"analysis","icon":"smile","path":"/dashboard/analysis","parentId":"6","id":"8"},"9":{"name":"monitor","icon":"smile","path":"/dashboard/monitor","parentId":"6","id":"9"},"10":{"name":"workplace","icon":"smile","path":"/dashboard/workplace","parentId":"6","id":"10"},"11":{"path":"/form","icon":"form","name":"form","parentId":"ant-design-pro-layout","id":"11"},"12":{"path":"/form","redirect":"/form/basic-form","parentId":"11","id":"12"},"13":{"name":"basic-form","icon":"smile","path":"/form/basic-form","parentId":"11","id":"13"},"14":{"name":"step-form","icon":"smile","path":"/form/step-form","parentId":"11","id":"14"},"15":{"name":"advanced-form","icon":"smile","path":"/form/advanced-form","parentId":"11","id":"15"},"16":{"path":"/list","icon":"table","name":"list","parentId":"ant-design-pro-layout","id":"16"},"17":{"path":"/list/search","name":"search-list","parentId":"16","id":"17"},"18":{"path":"/list/search","redirect":"/list/search/articles","parentId":"17","id":"18"},"19":{"name":"articles","icon":"smile","path":"/list/search/articles","parentId":"17","id":"19"},"20":{"name":"projects","icon":"smile","path":"/list/search/projects","parentId":"17","id":"20"},"21":{"name":"applications","icon":"smile","path":"/list/search/applications","parentId":"17","id":"21"},"22":{"path":"/list","redirect":"/list/table-list","parentId":"16","id":"22"},"23":{"name":"table-list","icon":"smile","path":"/list/table-list","parentId":"16","id":"23"},"24":{"name":"basic-list","icon":"smile","path":"/list/basic-list","parentId":"16","id":"24"},"25":{"name":"card-list","icon":"smile","path":"/list/card-list","parentId":"16","id":"25"},"26":{"path":"/profile","name":"profile","icon":"profile","parentId":"ant-design-pro-layout","id":"26"},"27":{"path":"/profile","redirect":"/profile/basic","parentId":"26","id":"27"},"28":{"name":"basic","icon":"smile","path":"/profile/basic","parentId":"26","id":"28"},"29":{"name":"advanced","icon":"smile","path":"/profile/advanced","parentId":"26","id":"29"},"30":{"name":"result","icon":"CheckCircleOutlined","path":"/result","parentId":"ant-design-pro-layout","id":"30"},"31":{"path":"/result","redirect":"/result/success","parentId":"30","id":"31"},"32":{"name":"success","icon":"smile","path":"/result/success","parentId":"30","id":"32"},"33":{"name":"fail","icon":"smile","path":"/result/fail","parentId":"30","id":"33"},"34":{"name":"exception","icon":"warning","path":"/exception","parentId":"ant-design-pro-layout","id":"34"},"35":{"path":"/exception","redirect":"/exception/403","parentId":"34","id":"35"},"36":{"name":"403","icon":"smile","path":"/exception/403","parentId":"34","id":"36"},"37":{"name":"404","icon":"smile","path":"/exception/404","parentId":"34","id":"37"},"38":{"name":"500","icon":"smile","path":"/exception/500","parentId":"34","id":"38"},"39":{"name":"account","icon":"user","path":"/account","parentId":"ant-design-pro-layout","id":"39"},"40":{"path":"/account","redirect":"/account/center","parentId":"39","id":"40"},"41":{"name":"center","icon":"smile","path":"/account/center","parentId":"39","id":"41"},"42":{"name":"settings","icon":"smile","path":"/account/settings","parentId":"39","id":"42"},"43":{"name":"Echarts demo","path":"/echarts-demo","icon":"dashboard","parentId":"ant-design-pro-layout","id":"43"},"44":{"path":"/echarts-demo","redirect":"/echarts-demo/index","parentId":"43","id":"44"},"45":{"name":"图表示例合集","path":"/echarts-demo/index","parentId":"43","id":"45"},"46":{"name":"自定义组件","path":"/components-demo","icon":"dashboard","parentId":"ant-design-pro-layout","id":"46"},"47":{"path":"/components-demo","redirect":"/components-demo/index","parentId":"46","id":"47"},"48":{"name":"自定义组件","path":"/components-demo/index","parentId":"46","id":"48"},"49":{"path":"/","redirect":"/dashboard/analysis","parentId":"ant-design-pro-layout","id":"49"},"50":{"path":"/*","parentId":"ant-design-pro-layout","id":"50"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__user__login__index" */'@/pages/user/login/index.tsx')),
'3': React.lazy(() => import('./EmptyRoute')),
'4': React.lazy(() => import(/* webpackChunkName: "p__user__register-result__index" */'@/pages/user/register-result/index.tsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__user__register__index" */'@/pages/user/register/index.tsx')),
'6': React.lazy(() => import('./EmptyRoute')),
'7': React.lazy(() => import('./EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__dashboard__analysis__index" */'@/pages/dashboard/analysis/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__dashboard__monitor__index" */'@/pages/dashboard/monitor/index.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__dashboard__workplace__index" */'@/pages/dashboard/workplace/index.tsx')),
'11': React.lazy(() => import('./EmptyRoute')),
'12': React.lazy(() => import('./EmptyRoute')),
'13': React.lazy(() => import(/* webpackChunkName: "p__form__basic-form__index" */'@/pages/form/basic-form/index.tsx')),
'14': React.lazy(() => import(/* webpackChunkName: "p__form__step-form__index" */'@/pages/form/step-form/index.tsx')),
'15': React.lazy(() => import(/* webpackChunkName: "p__form__advanced-form__index" */'@/pages/form/advanced-form/index.tsx')),
'16': React.lazy(() => import('./EmptyRoute')),
'17': React.lazy(() => import(/* webpackChunkName: "p__list__search__index" */'@/pages/list/search/index.tsx')),
'18': React.lazy(() => import('./EmptyRoute')),
'19': React.lazy(() => import(/* webpackChunkName: "p__list__search__articles__index" */'@/pages/list/search/articles/index.tsx')),
'20': React.lazy(() => import(/* webpackChunkName: "p__list__search__projects__index" */'@/pages/list/search/projects/index.tsx')),
'21': React.lazy(() => import(/* webpackChunkName: "p__list__search__applications__index" */'@/pages/list/search/applications/index.tsx')),
'22': React.lazy(() => import('./EmptyRoute')),
'23': React.lazy(() => import(/* webpackChunkName: "p__table-list__index" */'@/pages/table-list/index.tsx')),
'24': React.lazy(() => import(/* webpackChunkName: "p__list__basic-list__index" */'@/pages/list/basic-list/index.tsx')),
'25': React.lazy(() => import(/* webpackChunkName: "p__list__card-list__index" */'@/pages/list/card-list/index.tsx')),
'26': React.lazy(() => import('./EmptyRoute')),
'27': React.lazy(() => import('./EmptyRoute')),
'28': React.lazy(() => import(/* webpackChunkName: "p__profile__basic__index" */'@/pages/profile/basic/index.tsx')),
'29': React.lazy(() => import(/* webpackChunkName: "p__profile__advanced__index" */'@/pages/profile/advanced/index.tsx')),
'30': React.lazy(() => import('./EmptyRoute')),
'31': React.lazy(() => import('./EmptyRoute')),
'32': React.lazy(() => import(/* webpackChunkName: "p__result__success__index" */'@/pages/result/success/index.tsx')),
'33': React.lazy(() => import(/* webpackChunkName: "p__result__fail__index" */'@/pages/result/fail/index.tsx')),
'34': React.lazy(() => import('./EmptyRoute')),
'35': React.lazy(() => import('./EmptyRoute')),
'36': React.lazy(() => import(/* webpackChunkName: "p__exception__403__index" */'@/pages/exception/403/index.tsx')),
'37': React.lazy(() => import(/* webpackChunkName: "p__exception__404__index" */'@/pages/exception/404/index.tsx')),
'38': React.lazy(() => import(/* webpackChunkName: "p__exception__500__index" */'@/pages/exception/500/index.tsx')),
'39': React.lazy(() => import('./EmptyRoute')),
'40': React.lazy(() => import('./EmptyRoute')),
'41': React.lazy(() => import(/* webpackChunkName: "p__account__center__index" */'@/pages/account/center/index.tsx')),
'42': React.lazy(() => import(/* webpackChunkName: "p__account__settings__index" */'@/pages/account/settings/index.tsx')),
'43': React.lazy(() => import('./EmptyRoute')),
'44': React.lazy(() => import('./EmptyRoute')),
'45': React.lazy(() => import(/* webpackChunkName: "p__echarts-demo__index" */'@/pages/echarts-demo/index.tsx')),
'46': React.lazy(() => import('./EmptyRoute')),
'47': React.lazy(() => import('./EmptyRoute')),
'48': React.lazy(() => import(/* webpackChunkName: "p__components-demo__index" */'@/pages/components-demo/index.tsx')),
'49': React.lazy(() => import('./EmptyRoute')),
'50': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/Users/liucong/Desktop/WORK-SPACE/MY-workbench/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/Users/liucong/Desktop/WORK-SPACE/MY-workbench/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
