(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{489:function(a,r,t){"use strict";t.r(r);var _=t(14),v=Object(_.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"kafka-可靠的数据传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-可靠的数据传递"}},[a._v("#")]),a._v(" Kafka 可靠的数据传递")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E5%8F%AF%E9%9D%A0%E6%80%A7%E4%BF%9D%E8%AF%81"}},[a._v("一、可靠性保证")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E5%A4%8D%E5%88%B6"}},[a._v("二、复制")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89broker-%E7%9A%84%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[a._v("三、Broker 的可靠性")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%A4%8D%E5%88%B6%E7%B3%BB%E7%BB%9F"}},[a._v("复制系统")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%8D%E5%AE%8C%E5%85%A8%E7%9A%84%E9%80%89%E4%B8%BE"}},[a._v("不完全的选举")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E6%9C%80%E5%B0%8F%E5%90%8C%E6%AD%A5%E5%89%AF%E6%9C%AC"}},[a._v("最小同步副本")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E7%94%9F%E4%BA%A7%E8%80%85%E7%9A%84%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[a._v("四、生产者的可靠性")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E7%A1%AE%E8%AE%A4"}},[a._v("发送确认")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E9%87%8D%E8%AF%95"}},[a._v("重试")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86"}},[a._v("错误处理")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E6%B6%88%E8%B4%B9%E8%80%85%E7%9A%84%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[a._v("五、消费者的可靠性")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E6%B6%88%E8%B4%B9%E8%80%85%E7%9A%84%E5%8F%AF%E9%9D%A0%E6%80%A7%E9%85%8D%E7%BD%AE"}},[a._v("消费者的可靠性配置")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E6%98%BE%E7%A4%BA%E6%8F%90%E4%BA%A4%E5%81%8F%E7%A7%BB%E9%87%8F"}},[a._v("显示提交偏移量")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E9%AA%8C%E8%AF%81%E7%B3%BB%E7%BB%9F%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[a._v("六、验证系统可靠性")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[a._v("参考资料")])])]),a._v(" "),t("h2",{attrs:{id:"一、可靠性保证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、可靠性保证"}},[a._v("#")]),a._v(" 一、可靠性保证")]),a._v(" "),t("p",[a._v("Kafka 的可靠性保证：")]),a._v(" "),t("ul",[t("li",[a._v("Kafka 可以保证分区消息的顺序。")]),a._v(" "),t("li",[a._v("只有当消息被写入分区的所有同步副本时，才被认为是已提交的。")]),a._v(" "),t("li",[a._v("只要还有一个副本是活跃的，那么已提交的消息就不会丢失。")]),a._v(" "),t("li",[a._v("消费者只能读取已提交的消息。")])]),a._v(" "),t("h2",{attrs:{id:"二、复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、复制"}},[a._v("#")]),a._v(" 二、复制")]),a._v(" "),t("p",[a._v("kafka 的复制机制和分区的多副本架构是 kafka 可靠性保证的核心。")]),a._v(" "),t("p",[a._v("Kafka 的主题被分为多个分区，分区时基本的数据块。每个分区可以有多个副本，其中一个是首领。所有事件都直接发送给主副本，或者直接从主副本读取事件。其他副本只需要与首领保持同步，并即时复制最新的事件。当主副本不可用时，其中一个同步副本将成为新的主副本。")]),a._v(" "),t("h2",{attrs:{id:"三、broker-的可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、broker-的可靠性"}},[a._v("#")]),a._v(" 三、Broker 的可靠性")]),a._v(" "),t("p",[a._v("broker 有 3 个配置参数会影响 Kafka 消息存储的可靠性。")]),a._v(" "),t("h3",{attrs:{id:"复制系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制系统"}},[a._v("#")]),a._v(" 复制系统")]),a._v(" "),t("p",[t("code",[a._v("replication.factor")]),a._v(" 是主题级别配置； "),t("code",[a._v("default.replication.factor")]),a._v("  是 broker 级别配置。")]),a._v(" "),t("p",[a._v("这个参数的作用是设置每个分区的副本数。副本数越多，数据可靠性越高；但由于副本数增多，也会增加同步副本的开销，可能会降低集群的可用性。一般，建议设为 3，这也是 Kafka 的默认值。")]),a._v(" "),t("h3",{attrs:{id:"不完全的选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不完全的选举"}},[a._v("#")]),a._v(" 不完全的选举")]),a._v(" "),t("p",[t("code",[a._v("unclean.leader.election.enable")]),a._v(" 是 broker 级别（实际上是集群范围内）配置，默认值为 true。")]),a._v(" "),t("ul",[t("li",[a._v("如果设为 true，代表着允许不同步的副本成为主副本（即不完全的选举），那么将面临丢失消息的风险；")]),a._v(" "),t("li",[a._v("如果设为 false，就要等待原先的主副本重新上线，从而降低了可用性。")])]),a._v(" "),t("h3",{attrs:{id:"最小同步副本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最小同步副本"}},[a._v("#")]),a._v(" 最小同步副本")]),a._v(" "),t("p",[t("code",[a._v("min.insync.replicas")]),a._v(" 是主题级别和 broker 级别配置。")]),a._v(" "),t("p",[a._v("尽管可以为一个主题配置 3 个副本，但还是可能会出现只有一个同步副本的情况。如果这个同步副本变为不可用，则必须在可用性和数据一致性之间做出选择。Kafka 中，消息只有被写入到所有的同步副本之后才被认为是已提交的。但如果只有一个同步副本，那么在这个副本不可用时，则数据就会丢失。")]),a._v(" "),t("p",[a._v("如果要确保已经提交的数据被已写入不止一个副本，就需要把最小同步副本的设置为大一点的值。")]),a._v(" "),t("h2",{attrs:{id:"四、生产者的可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、生产者的可靠性"}},[a._v("#")]),a._v(" 四、生产者的可靠性")]),a._v(" "),t("p",[a._v("生产者的可靠性可以从这几点来保证：")]),a._v(" "),t("h3",{attrs:{id:"发送确认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送确认"}},[a._v("#")]),a._v(" 发送确认")]),a._v(" "),t("p",[a._v("生产者可选的确认模式有三种："),t("code",[a._v("acks=0")]),a._v("、"),t("code",[a._v("acks=1")]),a._v("、"),t("code",[a._v("acks=all")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("acks=0")]),a._v("、"),t("code",[a._v("acks=1")]),a._v(" 都由丢失数据的风险。")]),a._v(" "),t("p",[t("code",[a._v("acks=all")]),a._v(" 意味着会等待所有同步副本都收到消息。再结合 "),t("code",[a._v("min.insync.replicas")]),a._v(" ，就可以决定在得到确认响应前，至少有多少副本能够收到消息。")]),a._v(" "),t("p",[a._v("这是最保险的做法，但也会降低吞吐量。")]),a._v(" "),t("h3",{attrs:{id:"重试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重试"}},[a._v("#")]),a._v(" 重试")]),a._v(" "),t("p",[a._v("如果 broker 返回的错误可以通过"),t("strong",[a._v("重试")]),a._v("来解决，生产者会自动处理这些错误。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("可重试错误")]),a._v("，如： LEADER_NOT_AVAILABLE，主副本不可用，可能过一段时间，集群就会选举出新的主副本，重试可以解决问题。")]),a._v(" "),t("li",[t("strong",[a._v("不可重试错误")]),a._v("，如： INVALID_CONFIG，即使重试，也无法改变配置选项，重试没有意义。")])]),a._v(" "),t("p",[a._v("需要注意的是：有时可能因为网络问题导致没有收到确认，但实际上消息已经写入成功。生产者会认为出现临时故障，重试发送消息，这样就会出现重复记录。所以，尽可能在业务上保证幂等性。")]),a._v(" "),t("h3",{attrs:{id:"错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[a._v("#")]),a._v(" 错误处理")]),a._v(" "),t("p",[a._v("开发者需要自行处理的错误：")]),a._v(" "),t("ul",[t("li",[a._v("不可重试的 broker 错误，如消息大小错误、认证错误等；")]),a._v(" "),t("li",[a._v("消息发送前发生的错误，如序列化错误；")]),a._v(" "),t("li",[a._v("生产者达到重试次数上限或消息占用的内存达到上限时发生的错误。")])]),a._v(" "),t("h2",{attrs:{id:"五、消费者的可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、消费者的可靠性"}},[a._v("#")]),a._v(" 五、消费者的可靠性")]),a._v(" "),t("p",[a._v("只有被写入所有同步副本的消息，对消费者才是可用的，这就保证了消费者接收到消息时已经具备了数据一致性。")]),a._v(" "),t("p",[t("strong",[a._v("消费者唯一要做的是确保哪些消息是已经读取过的，哪些是没有读取过的（通过提交的偏移量来判断）")]),a._v("。")]),a._v(" "),t("p",[a._v("如果消费者提交了偏移量却未能处理完消息，那么就有可能造成消息丢失，这也是消费者丢失消息的主要原因。")]),a._v(" "),t("h3",{attrs:{id:"消费者的可靠性配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者的可靠性配置"}},[a._v("#")]),a._v(" 消费者的可靠性配置")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("group.id")]),a._v(" - 如果希望消费者可以看到主题的所有消息，那么需要为它们设置唯一的 "),t("code",[a._v("group.id")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("auto.offset.reset")]),a._v(" - 有两个选项：\n"),t("ul",[t("li",[t("code",[a._v("earliest")]),a._v(" - 消费者会从分区的开始位置读取数据")]),a._v(" "),t("li",[t("code",[a._v("latest")]),a._v(" - 消费者会从分区末尾位置读取数据")])])]),a._v(" "),t("li",[t("code",[a._v("enable.auto.commit")]),a._v(" -  消费者自动提交偏移量。如果设为 true，处理流程更简单，但无法保证重复处理消息。")]),a._v(" "),t("li",[t("code",[a._v("auto.commit.interval.ms")]),a._v(" - 自动提交的频率，默认为每 5 秒提交一次。")])]),a._v(" "),t("h3",{attrs:{id:"显示提交偏移量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示提交偏移量"}},[a._v("#")]),a._v(" 显示提交偏移量")]),a._v(" "),t("blockquote",[t("p",[a._v("如果 "),t("code",[a._v("enable.auto.commit")]),a._v(" 设为 true，即自动提交，就无需考虑提交偏移量的问题。")])]),a._v(" "),t("p",[a._v("如果选择显示提交偏移量，需要考虑以下问题：")]),a._v(" "),t("ul",[t("li",[a._v("总是在处理完事件后再提交偏移量")]),a._v(" "),t("li",[a._v("提交频率是性能和重复消息数之间的权衡")]),a._v(" "),t("li",[a._v("确保对提交的偏移量心中有数")]),a._v(" "),t("li",[a._v("再均衡")]),a._v(" "),t("li",[a._v("消费者可能需要重试")]),a._v(" "),t("li",[a._v("消费者可能需要维护状态")]),a._v(" "),t("li",[a._v("长时间处理")]),a._v(" "),t("li",[a._v("幂等性设计")])]),a._v(" "),t("h2",{attrs:{id:"六、验证系统可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、验证系统可靠性"}},[a._v("#")]),a._v(" 六、验证系统可靠性")]),a._v(" "),t("p",[a._v("建议从 3 个层面验证系统的可靠性：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("配置验证")])]),a._v(" "),t("li",[t("strong",[a._v("应用验证")]),a._v(" "),t("ul",[t("li",[a._v("客户端和服务器断开连接")]),a._v(" "),t("li",[a._v("选举")]),a._v(" "),t("li",[a._v("依次重启 broker")]),a._v(" "),t("li",[a._v("依次重启生产者")]),a._v(" "),t("li",[a._v("依次重启消费者")])])]),a._v(" "),t("li",[t("strong",[a._v("监控可靠性")]),a._v(" "),t("ul",[t("li",[a._v("对于生产者来说，最重要的两个指标是消息的 "),t("code",[a._v("error-rate")]),a._v(" 和 "),t("code",[a._v("retry-rate")]),a._v("。如果这两个指标上升，说明系统出了问题。")]),a._v(" "),t("li",[a._v("对于消费者来说，最重要的指标是 "),t("code",[a._v("consumer-lag")]),a._v("，该指标表明了消费者的处理速度与最近提交到分区里的偏移量之间还有多少差距。")])])])]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("官方")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kakfa 官网"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/apache/kafka",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kakfa Github"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://kafka.apache.org/documentation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kakfa 官方文档"),t("OutboundLink")],1)])])]),a._v(" "),t("li",[t("strong",[a._v("书籍")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/12270295.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Kafka 权威指南》"),t("OutboundLink")],1)])])]),a._v(" "),t("li",[t("strong",[a._v("教程")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/apachecn/kafka-doc-zh",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka 中文文档"),t("OutboundLink")],1)])])]),a._v(" "),t("li",[t("strong",[a._v("文章")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.heartthinkdo.com/?p=2006#233",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka(03) Kafka 介绍"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.infoq.com/cn/articles/kafka-analysis-part-1",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafka 剖析（一）：Kafka 背景及架构介绍"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://hackernoon.com/thorough-introduction-to-apache-kafka-6fbf2989bbc1",target:"_blank",rel:"noopener noreferrer"}},[a._v("Thorough Introduction to Apache Kafka"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.heartthinkdo.com/?p=2040#43",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kafak(04) Kafka 生产者事务和幂等"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/KAFKA/Kafka+data+structures+in+Zookeeper",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://cwiki.apache.org/confluence/display/KAFKA/Kafka+data+structures+in+Zookeeper"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);r.default=v.exports}}]);