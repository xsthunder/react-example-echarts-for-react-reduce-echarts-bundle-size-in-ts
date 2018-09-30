# echarts-for-react: reduce echarts bundle in typescript example

see [echarts-for-react readme](https://github.com/hustcc/echarts-for-react/blob/master/README.md#typescript) for detail

Import ECharts.js modules manually to reduce bundle size in typescript, see [SimpleCore](./src/SimpleCore.tsx).

Also [Simple](./src/Simple.tsx)  is provided for comparison

### comparing SimpleCore to Simple

```
diff src/SimpleCore.tsx src/Simple.tsx
4,9c4
< import ReactEchartsCore from 'echarts-for-react/lib/core';
< import echarts from 'echarts/lib/echarts'
< import 'echarts/lib/chart/line'
< import 'echarts/lib/component/legend'
< import 'echarts/lib/component/toolbox'
< import 'echarts/lib/component/tooltip'
---
> import ReactEcharts from 'echarts-for-react'
76,77c71
<           <ReactEchartsCore
<             echarts={echarts}
---
>           <ReactEcharts
```

## note

using [a forked version of echarts-for-react](https://github.com/xsthunder/echarts-for-react), see pakage.json and .gitmodules for detail, also a [pull request](https://github.com/hustcc/echarts-for-react/pull/225) has been made.

## analysis

```
Version: webpack 4.19.0
Time: 34969ms
Built at: 09/30/2018 5:25:44 PM
                    Asset      Size   Chunks                    Chunk Names
            app.bundle.js   888 KiB  0, 1, 2  [emitted]  [big]  app
         simple.bundle.js   793 KiB        1  [emitted]  [big]  simple
    simple-core.bundle.js   407 KiB        2  [emitted]  [big]  simple-core
```

In this case, it reduces bundle for about 400KiB (after minification in webpack production mode).

## usage 
```js
git clone --recurse-submodules https://github.com/xsthunder/react-example-echarts-for-react-reduce-echarts-bundle-size-in-ts.git
cd react-example-echarts-for-react-reduce-echarts-bundle-size-in-ts
npm i
npm run build
npm run host
 ```
