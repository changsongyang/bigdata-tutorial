(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{493:function(t,a,s){"use strict";s.r(a);var o=s(14),v=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sqoop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop"}},[t._v("#")]),t._v(" Sqoop")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Sqoop 是一个主要在 Hadoop 和关系数据库之间进行批量数据迁移的工具。")])])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#sqoop-%E7%AE%80%E4%BB%8B"}},[t._v("Sqoop 简介")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%8F%90%E4%BE%9B%E5%A4%9A%E7%A7%8D-sqoop-%E8%BF%9E%E6%8E%A5%E5%99%A8"}},[t._v("提供多种 Sqoop 连接器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#sqoop-%E7%89%88%E6%9C%AC"}},[t._v("Sqoop 版本")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#sqoop-%E5%8E%9F%E7%90%86"}},[t._v("Sqoop 原理")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%AF%BC%E5%85%A5"}},[t._v("导入")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%AF%BC%E5%87%BA"}},[t._v("导出")])])])])]),t._v(" "),s("h2",{attrs:{id:"sqoop-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop-简介"}},[t._v("#")]),t._v(" Sqoop 简介")]),t._v(" "),s("p",[s("strong",[t._v("Sqoop 是一个主要在 Hadoop 和关系数据库之间进行批量数据迁移的工具。")])]),t._v(" "),s("ul",[s("li",[t._v("Hadoop：HDFS、Hive、HBase、Inceptor、Hyperbase")]),t._v(" "),s("li",[t._v("面向大数据集的批量导入导出")]),t._v(" "),s("li",[t._v("将输入数据集分为 N 个切片，然后启动 N 个 Map 任务并行传输")]),t._v(" "),s("li",[t._v("支持全量、增量两种传输方式")])]),t._v(" "),s("h3",{attrs:{id:"提供多种-sqoop-连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提供多种-sqoop-连接器"}},[t._v("#")]),t._v(" 提供多种 Sqoop 连接器")]),t._v(" "),s("h4",{attrs:{id:"内置连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置连接器"}},[t._v("#")]),t._v(" 内置连接器")]),t._v(" "),s("ul",[s("li",[t._v("经过优化的专用 RDBMS 连接器：MySQL、PostgreSQL、Oracle、DB2、SQL Server、Netzza 等")]),t._v(" "),s("li",[t._v("通用的 JDBC 连接器：支持 JDBC 协议的数据库")])]),t._v(" "),s("h4",{attrs:{id:"第三方连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方连接器"}},[t._v("#")]),t._v(" 第三方连接器")]),t._v(" "),s("ul",[s("li",[t._v("数据仓库：Teradata")]),t._v(" "),s("li",[t._v("NoSQL 数据库：Couchbase")])]),t._v(" "),s("h3",{attrs:{id:"sqoop-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop-版本"}},[t._v("#")]),t._v(" Sqoop 版本")]),t._v(" "),s("h4",{attrs:{id:"sqoop-1-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop-1-优缺点"}},[t._v("#")]),t._v(" Sqoop 1 优缺点")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/Sqoop/sqoop-architecture.png!zp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点")]),t._v(" "),s("ul",[s("li",[t._v("架构简单")]),t._v(" "),s("li",[t._v("部署简单")]),t._v(" "),s("li",[t._v("功能全面")]),t._v(" "),s("li",[t._v("稳定性较高")]),t._v(" "),s("li",[t._v("速度较快")])]),t._v(" "),s("p",[t._v("缺点")]),t._v(" "),s("ul",[s("li",[t._v("访问方式单一")]),t._v(" "),s("li",[t._v("命令行方式容易出错，格式紧耦合")]),t._v(" "),s("li",[t._v("安全机制不够完善，存在密码泄露风险")])]),t._v(" "),s("h4",{attrs:{id:"sqoop-2-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop-2-优缺点"}},[t._v("#")]),t._v(" Sqoop 2 优缺点")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/Sqoop/sqoop-v2-architecture.png!zp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点")]),t._v(" "),s("ul",[s("li",[t._v("访问方式多样")]),t._v(" "),s("li",[t._v("集中管理连接器")]),t._v(" "),s("li",[t._v("安全机制较完善")]),t._v(" "),s("li",[t._v("支持多用户")])]),t._v(" "),s("p",[t._v("缺点")]),t._v(" "),s("ul",[s("li",[t._v("架构较复杂")]),t._v(" "),s("li",[t._v("部署较繁琐")]),t._v(" "),s("li",[t._v("稳定性一般")]),t._v(" "),s("li",[t._v("速度一般")])]),t._v(" "),s("h2",{attrs:{id:"sqoop-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqoop-原理"}},[t._v("#")]),t._v(" Sqoop 原理")]),t._v(" "),s("h3",{attrs:{id:"导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[t._v("#")]),t._v(" 导入")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/Sqoop/sqoop-import.png!zp",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出"}},[t._v("#")]),t._v(" 导出")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/bigdata/Sqoop/sqoop-export.png!zp",alt:"img"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);