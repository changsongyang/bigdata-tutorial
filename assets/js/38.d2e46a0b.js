(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{491:function(t,a,e){"use strict";e.r(a);var _=e(14),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"大数据简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大数据简介"}},[t._v("#")]),t._v(" 大数据简介")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("h3",{attrs:{id:"什么是大数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是大数据"}},[t._v("#")]),t._v(" 什么是大数据")]),t._v(" "),e("p",[t._v("大数据是指超出传统数据库工具收集、存储、管理和分析能力的数据集。与此同时，及时采集、存储、聚合、管理数据，以及对数据深度分析的新技术和新能力，正在快速增长，就像预测计算芯片增长速度的摩尔定律一样。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Volume")]),t._v(" - 数据规模巨大")]),t._v(" "),e("li",[e("strong",[t._v("Velocity")]),t._v(" - 生成和处理速度极快")]),t._v(" "),e("li",[e("strong",[t._v("Variety")]),t._v(" - 数据规模巨大")]),t._v(" "),e("li",[e("strong",[t._v("Value")]),t._v(" - 生成和处理速度极快")])]),t._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("p",[t._v("基于大数据的数据仓库")]),t._v(" "),e("p",[t._v("基于大数据的实时流处理")]),t._v(" "),e("h3",{attrs:{id:"hadoop-编年史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-编年史"}},[t._v("#")]),t._v(" Hadoop 编年史")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("时间")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("事件")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2003.01")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Google 发表了 Google File System 论文")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2004.01")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Google 发表了 MapReduce 论文")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2006.02")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Apache Hadoop 项目正式启动，并支持 MapReduce 和 HDFS 独立发展")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2006.11")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Google 发表了 Bigtable 论文")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2008.01")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Hadoop 成为 Apache 顶级项目")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2009.03")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Cloudera 推出世界上首个 Hadoop 发行版——CDH，并完全开放源码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2012.03")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HDFS NameNode HA 加入 Hadoop 主版本")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2014.02")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Spark 代替 MapReduce 成为 Hadoop 的缺省计算引擎，并成为 Apache 顶级项目")])])])]),t._v(" "),e("h2",{attrs:{id:"技术体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术体系"}},[t._v("#")]),t._v(" 技术体系")]),t._v(" "),e("h3",{attrs:{id:"hdfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs"}},[t._v("#")]),t._v(" HDFS")]),t._v(" "),e("p",[e("strong",[t._v("概念")])]),t._v(" "),e("ul",[e("li",[t._v("Hadoop 分布式文件系统（Hadoop Distributed File System）")]),t._v(" "),e("li",[t._v("在开源大数据技术体系中，地位无可替代")])]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("高容错：数据多副本，副本丢失后自动恢复")]),t._v(" "),e("li",[t._v("高可用：NameNode HA，安全模式")]),t._v(" "),e("li",[t._v("高扩展：10K 节点规模")]),t._v(" "),e("li",[t._v("简单一致性模型：一次写入多次读取，支持追加，不允许修改")]),t._v(" "),e("li",[t._v("流式数据访问：批量读而非随机读，关注吞吐量而非时间")]),t._v(" "),e("li",[t._v("大规模数据集：典型文件大小 GB~TB 级，百万以上文件数量， PB 以上数据规模")]),t._v(" "),e("li",[t._v("构建成本低且安全可靠：运行在大量的廉价商用机器上，硬件错误是常态，提供容错机制")])]),t._v(" "),e("h3",{attrs:{id:"mapreduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce"}},[t._v("#")]),t._v(" MapReduce")]),t._v(" "),e("p",[e("strong",[t._v("概念")])]),t._v(" "),e("ul",[e("li",[t._v("面向批处理的分布式计算框架")]),t._v(" "),e("li",[t._v("编程模型：将 MapReduce 程序分为 Map、Reduce 两个阶段")])]),t._v(" "),e("p",[e("strong",[t._v("核心思想")])]),t._v(" "),e("ul",[e("li",[t._v("分而治之，分布式计算")]),t._v(" "),e("li",[t._v("移动计算，而非移动数据")])]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("高容错：任务失败，自动调度到其他节点重新执行")]),t._v(" "),e("li",[t._v("高扩展：计算能力随着节点数增加，近似线性递增")]),t._v(" "),e("li",[t._v("适用于海量数据的离线批处理")]),t._v(" "),e("li",[t._v("降低了分布式编程的门槛")])]),t._v(" "),e("h3",{attrs:{id:"spark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spark"}},[t._v("#")]),t._v(" Spark")]),t._v(" "),e("p",[t._v("高性能分布式通用计算引擎")]),t._v(" "),e("ul",[e("li",[t._v("Spark Core - 基础计算框架（批处理、交互式分析）")]),t._v(" "),e("li",[t._v("Spark SQL - SQL 引擎（海量结构化数据的高性能查询）")]),t._v(" "),e("li",[t._v("Spark Streaming - 实时流处理（微批）")]),t._v(" "),e("li",[t._v("Spark MLlib - 机器学习")]),t._v(" "),e("li",[t._v("Spark GraphX - 图计算")])]),t._v(" "),e("p",[t._v("采用 Scala 语言开发")]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("计算高效 - 内存计算、Cache 缓存机制、DAG 引擎、多线程池模型")]),t._v(" "),e("li",[t._v("通用易用 - 适用于批处理、交互式计算、流处理、机器学习、图计算等多种场景")]),t._v(" "),e("li",[t._v("运行模式多样 - Local、Standalone、YARN/Mesos")])]),t._v(" "),e("h3",{attrs:{id:"yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" YARN")]),t._v(" "),e("p",[e("strong",[t._v("概念")])]),t._v(" "),e("ul",[e("li",[t._v("Yet Another Resource Negotiator，另一种资源管理器")]),t._v(" "),e("li",[t._v("为了解决 Hadoop 1.x 中 MapReduce 的先天缺陷")]),t._v(" "),e("li",[t._v("分布式通用资源管理系统")]),t._v(" "),e("li",[t._v("负责集群资源的统一管理")]),t._v(" "),e("li",[t._v("从 Hadoop 2.x 开始，YARN 成为 Hadoop 的核心组件")])]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("专注于资源管理和作业调度")]),t._v(" "),e("li",[t._v("通用 - 适用各种计算框架，如 - MapReduce、Spark")]),t._v(" "),e("li",[t._v("高可用 - ResourceManager 高可用、HDFS 高可用")]),t._v(" "),e("li",[t._v("高扩展")])]),t._v(" "),e("h3",{attrs:{id:"hive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hive"}},[t._v("#")]),t._v(" Hive")]),t._v(" "),e("p",[e("strong",[t._v("概念")])]),t._v(" "),e("ul",[e("li",[t._v("Hadoop 数据仓库 - 企业决策支持")]),t._v(" "),e("li",[t._v("SQL 引擎 - 对海量结构化数据进行高性能的 SQL 查询")]),t._v(" "),e("li",[t._v("采用 HDFS 或 HBase 为数据存储")]),t._v(" "),e("li",[t._v("采用 MapReduce 或 Spark 为计算框架")])]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("提供类 SQL 查询语言")]),t._v(" "),e("li",[t._v("支持命令行或 JDBC/ODBC")]),t._v(" "),e("li",[t._v("提供灵活的扩展性")]),t._v(" "),e("li",[t._v("提供复杂数据类型、扩展函数、脚本等")])]),t._v(" "),e("h3",{attrs:{id:"hbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hbase"}},[t._v("#")]),t._v(" HBase")]),t._v(" "),e("p",[e("strong",[t._v("概念")])]),t._v(" "),e("ul",[e("li",[t._v("Hadoop Database")]),t._v(" "),e("li",[t._v("Google BigTable 的开源实现")]),t._v(" "),e("li",[t._v("分布式 NoSQL 数据库")]),t._v(" "),e("li",[t._v("列式存储 - 主要用于半结构化、非结构化数据")]),t._v(" "),e("li",[t._v("采用 HDFS 为文件存储系统")])]),t._v(" "),e("p",[e("strong",[t._v("特点")])]),t._v(" "),e("ul",[e("li",[t._v("高性能 - 支持高并发写入和查询")]),t._v(" "),e("li",[t._v("高可用 - HDFS 高可用、Region 高可用")]),t._v(" "),e("li",[t._v("高扩展 - 数据自动切分和分布，可动态扩容，无需停机")]),t._v(" "),e("li",[t._v("海量存储 - 单表可容纳数十亿行，上百万列")])]),t._v(" "),e("h3",{attrs:{id:"elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[t._v("#")]),t._v(" ElasticSearch")]),t._v(" "),e("ul",[e("li",[t._v("开源的分布式全文检索引擎")]),t._v(" "),e("li",[t._v("基于 Lucene 实现全文数据的快速存储、搜索和分析")]),t._v(" "),e("li",[t._v("处理大规模数据 - PB 级以上")]),t._v(" "),e("li",[t._v("具有较强的扩展性，集群规模可达上百台")]),t._v(" "),e("li",[t._v("首选的分布式搜索引擎")])]),t._v(" "),e("h2",{attrs:{id:"术语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),e("p",[e("strong",[t._v("数据仓库（Data Warehouse）")]),t._v(" - 数据仓库，是为企业所有级别的决策制定过程，提供所有类型数据支持的战略集合。它是单个数据存储，出于分析性报告和决策支持目的而创建。 为需要业务智能的企业，提供指导业务流程改进、监视时间、成本、质量以及控制。")]),t._v(" "),e("h2",{attrs:{id:"资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[t._v("#")]),t._v(" 资源")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/onurakpolat/awesome-bigdata",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome-bigdata"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://hadoop.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hadoop"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://hbase.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HBase"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://hive.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hive"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://impala.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Impala"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://flume.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flume"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kafka"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://spark.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spark"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://sqoop.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sqoop"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.elastic.co/guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ElasticSearch"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);