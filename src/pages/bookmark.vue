<template>
  <div>
    <x-catalog
    :parentSelector="parentSelector"
    :titleSelectors="titleSelectors"
    ></x-catalog>
    <div class="cont-table">
      <div id="contain" style="padding: 0 15px; width: 800px;">
        <h3 class="doc-title" id="anchor1">1、扶翼开户</h3>
        <div class="doc-instr"><b>Q: 如何在新浪扶翼进行注册？</b></div>
        <div class="doc-instr"><b>A: </b>广告主请联系所属代理商，提交广告主公司的基本信息、营业执照及网站URL等信息，进行注册开户。</div>
        <div class="doc-instr"><b>Q: 新浪扶翼是否支持自助开户？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼暂不支持自助开户，广告主请联系所属代理商，进行注册开户。
        </div>
        <div class="doc-title2" id="anchor11">1.1、 退款</div>
        <div class="doc-instr"><b>Q: 广告主可以申请退款吗？如何退款？</b></div>
        <div class="doc-instr"><b>A: </b>广告主如需退款请联系所属代理商，进行退款操作。</div>

        <h3 class="doc-title" id="anchor2">2、审核规则</h3>
        <div class="doc-instr">下载</div>
        <div class="doc-instr"><b>Q: 哪些条件会触发账户重新审核？</b></div>
        <div class="doc-instr"><b>A: </b>更改任意客户信息并提交后，均会触发账户重新审核。</div>
        <div class="doc-title2" id="anchor21">2.1、 退款</div>
        <div class="doc-instr"><b>Q: 广告主可以申请退款吗？如何退款？</b></div>
        <div class="doc-instr"><b>A: </b>广告主如需退款请联系所属代理商，进行退款操作。</div>

        <h3 class="doc-title" id="anchor3">3、财务知识</h3>
        <div class="doc-title2" id="anchor31">3.1、充值</div>
        <div class="doc-instr"><b>Q: 广告主如何充值新浪扶翼账户？</b></div>
        <div class="doc-instr"><b>A: </b>广告主请联系所属代理商，进行充值。</div>
        <br/>

        <h3 class="doc-title" id="anchor4">4、广告操作</h3>
        <div class="doc-instr">下载，快速学习扶翼广告操作流程及方法。</div>
        <div class="doc-title2" id="anchor41">4.1、 账户结构</div>
        <div class="doc-instr"><b>Q: 扶翼的账户结构是什么样的？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼的账户结构为分四个层级。分别为：账户-广告组-广告-创意。</div>
        <br/>
        <h3 class="doc-title" id="anchor5">5、投放相关</h3>
        <div class="doc-title2" id="anchor51">5.1、 扶翼资源</div>
        <div class="doc-instr"><b>Q: 扶翼可以在哪些平台上进行广告投放？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼可在手机新浪网、新浪新闻APP、新浪网门户及各类优质外部流量组成的移动联盟等平台进行广告投放。</div>
        <div class="doc-instr"><b>Q: 新浪扶翼可以选择某一广告资源位进行广告投放吗？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼暂不支持单一广告资源位进行广告投放，如您希望单一广告位投放广告，可选择“新浪轩辕”，进行CPD包版购买某一广告位进行投放。</div>
        <div class="doc-instr"><b>Q: 各平台有什么特点，该如何选择 </b></div>
        <div class="doc-instr"><b>A: </b>手机新浪网、新浪新闻APP、新浪网门户的用户人群侧重不同，建议根据客户所推产品特点、受众人群等属性，配以合适的创意类型及定向，投放不同平台资源。</div>
        <br/>

        <div class="doc-instr"><b>Q: 什么是复制创意？如何复制创意？</b></div>
        <div class="doc-instr"><b>A: </b>在扶翼选择某一广告，查看其包含的创意列表，即该广告包含的创意列表层级时，点击“复制创意”按钮后选择相应已经提交的创意，即可将已经提交的创意复制至此广告下，无需再重新上传创意。</div>
        <div class="doc-instr"><b>Q: 为什么在复制创意时有些创意不能选择？</b></div>
        <div class="doc-instr"><b>A: </b>创意类型为非信息流的创意（文字链、图形），可选择的创意需是同一资源类型下的创意，才可复制至此广告下。eg.PC图形只能选择PC图形创意；
        创意类型为信息流的创意，可选择的创意需是信息流资源类型下相同尺寸模板的创意，才可复制至此广告下。
        eg.移动联盟信息流及手浪信息流的创意模板ID相同，即可互相适用复制。</div>
        <div class="doc-instr"><b>Q: 一次可以复制几个创意？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼目前一次最多可复制5个创意。</div>
        <br/>
        <div class="doc-title2" id="anchor52">5.2、 定向方案</div>
        <div class="doc-instr"><b>Q: 什么是定向方案？</b></div>
        <div class="doc-instr"><b>A: </b>定向方案是在新浪扶翼广告层级，选择广告投放的投放资源、投放时间及投放人群的设置方案的总称，客户可以保存和管理定向方案，供下次新建广告时使用。</div>
        <div class="doc-instr"><b>Q: 如何保存新的定向方案？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼-广告层级-设置好定向方案后，点击“保存定向方案”，按指示步骤即可保存新的定向方案。</div>
        <div class="doc-instr"><b>Q: 如何管理已保存的定向方案？</b></div>
        <div class="doc-instr"><b>A: </b>点击新浪扶翼左侧导航栏下方“定向方案”按钮，即可查看现有定向方案列表，并进行编辑、删除等管理操作。</div>
        <div class="doc-instr"><b>Q: 扶翼有哪些定向方式？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼支持的定向方式现包括：</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;1) 投放资源设置：投放平台及资源类型</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;2) 投放时间：全天投放or 选择投放时间段</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;3) 地域：省市、海外</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;4) 性别</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;5) 年龄</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;6) 兴趣</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;7) 操作系统</div>
        <br/>
        <div class="doc-title2" id="anchor53">5.3、 效果评估</div>
        <div class="doc-instr"><b>Q: 什么是效果预估？</b></div>
        <div class="doc-instr"><b>A: </b>效果预估是在新浪扶翼广告层级，根据客户所选定向方案，实时动态提示“预计覆盖最大用户数、预计最大日曝光量、今日行业平均ctr”等数值，以帮助广告主及运营人员选择最优定向及出价，提高投放效果。</div>
        <div class="doc-instr"><b>Q: 第一次投放广告，出价设置多少比较好？</b></div>
        <div class="doc-instr"><b>A: </b>您可以参考广告设置层级出价设置下方的“当前建议出价”，设置较适合您的出价。</div>
        <div class="doc-instr"><b>Q: 广告主在哪里可以了解自己的产品所属行业的投放均值？</b></div>
        <div class="doc-instr"><b>A: </b>您可以参考广告层级右侧的“效果预估”模块，了解所属行业投放均值情况。</div>
        <br/>
        <div class="doc-title2" id="anchor54">5.4、运营提示</div>
        <div class="doc-instr"><b>Q: 什么是运营提示？</b></div>
        <div class="doc-instr"><b>A: </b>在新建/编辑创意层级，广告主可看到自身所属行业的创意制作提示，为广告主制作出更加优质的创意提供指导性建议。</div>
        <div class="doc-instr"><b>Q: 广告主不属于电子商务行业，为什么运营提示显示的是电子商务行业的内容？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼规定，若广告主未填写所属行业，则扶翼统一提示非APP-电子商务行业的运营提示，因此，为了能看到更有针对性的运营提示，请广告主联系您的所属代理商，为您填写正确的所属行业信息。</div>
        <div class="doc-instr"><b>Q: 广告主为生活服务行业，为什么运营提示显示的是其他行业的内容？</b></div>
        <div class="doc-instr"><b>A: </b>扶翼会根据广告主填写的所属行业信息，进而针对性的为其推送所填写行业的运营提示，因此若您发现所推送的运营提示行业有误，或您更换了不同行业的产品时，请联系您的所属代理商，为您更改正确的所属行业信息。</div>
        <br/>
        <div class="doc-title2" id="anchor55">5.5、效果工具</div>
        <br/>
        <div class="doc-title2" id="anchor56">5.6、oCPC</div>
        <div class="doc-instr"><b>Q: 优化成本投放能为您做什么？</b></div>
        <div class="doc-instr"><b>A: </b>启用优化成本投放，提供您愿意为每个转化支付的平均成本，由系统自动为您寻找潜在高转化客户，提高创意点击率及转化率，并尽可能将您的实际转化成本控制在您的预期范围之内。</div>
        <div class="doc-instr"><b>Q: 优化转化成本模型原理？</b></div>
        <div class="doc-instr">
          <b>A: </b>优化转化成本投放与普通CPC投放不同的地方在于系统将分为两个投放阶段：
          <p><b>第一阶段：</b>普通投放，以您的点击出价计费，即CPC付费方式。这一阶段为第二阶段优化转化成本投放积累数据，让系统学习，为第二阶段投放寻找更精确定向，确保系统能正确预估第二阶段的转化率。</p>
          <p><b>第二阶段：</b>优化转化成本投放。15天内，转化累积至120个后，系统会进入第二阶段投放，这一阶段的投放将不再使用CPC计费，将以您设置的转化期望成本作为参考，智能出价，尽可能使实际转化成本接近您的期望成本，同时最大化转化量。</p>
        </div>
        <div class="doc-instr"><b>Q: 启用转化期望成本操作流程？</b></div>
        <div class="doc-instr"><b>A: </b>
          <p>完成以上设置并开始投放广告创意，当您所对接的转化累计达120个时，该广告单将进入优化转化成本投放阶段。</p>
          <p>在广告投放过程中，您无法开启/关闭优化转化成本开关及更改转化目的，如果您需要更改转化目的，请创建新广告单进行投放。</p>
        </div>
        <div class="doc-instr"><b>Q: 转化期望成本是什么？</b></div>
        <div class="doc-instr">
          <b>A: </b>1）转化期望成本指您愿意为每个转化支付的平均成本，非最高成本。
          <p>2）转化期望成本不是实际扣费，当您的广告单进入优化转化成本投放阶段时，系统会参考该广告单历史投放效果，预估转化的可能性，并按照您设置的转化期望成本，自动计算每个点击的出价，并以该点击出价扣费。</p>
          <p>3）实际转化成本不一定等于转化期望成本，系统会尽可能让您的实际转化成本等于您设置的期望成本。</p>
        </div>
        <div class="doc-instr"><b>Q: 如何设置转化期望成本？</b></div>
        <div class="doc-instr"><b>A: </b>当您设置转化期望成本时，建议您参考该广告单最近一周的平均实际转化成本。若您设置的转化期望成本过低，您可能拿不到足够的曝光及转化。</div>
        <div class="doc-instr"><b>Q: 投放期间是否可以修改转化期望成本？</b></div>
        <div class="doc-instr"><b>A: </b>您可以随时根据实际转化情况及建议转化出价调整您的转化期望成本，但建议您不要频繁改动转化期望成本，否则将会影响您的投放效果及投放的稳定性，建议修改频率一天不要超过一次。</div>
        <div class="doc-instr"><b>Q: 何时进入优化转化成本投放阶段？</b></div>
        <div class="doc-instr"><b>A: </b>当您的广告单启用优化转化成本投放，并且转化数量已经积累至120个，投放自动进入优化转化成本阶段。若您的转化在15天内难以积累至120个，模型缺乏学习样本，建议您暂时不要启用优化转化成本投放。您可以通过扩大定向、提高出、或优化创意素材以获得更大的曝光及点击机会。</div>
        <div class="doc-instr"><b>Q: 启用优化转化成本投放，如何设置定向？</b></div>
        <div class="doc-instr"><b>A: </b>启用优化转化成本投放，建议您将定向设置的较宽泛一些，系统会自动分析您的广告受众，智能定向转化意愿较高的用户进行投放若定向设置较窄，您可能会错失一部分转化。</div>
        <div class="doc-instr"><b>Q: 启用优化转化成本投放，如何设置创意落地页？</b></div>
        <div class="doc-instr">
          <b>A: </b>创建广告投放单并启用优化转化成本，您需要为该广告单下的创意选择落地页来源：
          <p><b>灵动落地页：</b>当您选择落地页来源为灵动时，需要在新建广告阶段选择已建立的灵动落地页；在创意层级，系统将自动为该广告单下的创意填充该灵动落地页，以获得更好的投放效果。</p>
          <p><b>自定义落地页：</b>当您选择落地页来源为自定义时，您需要在创意层级手动输入落地页地址，建议使用转化名称中所对接转化的URL，或监测的APP所在下载地址。若创意落地页链接设置为未对接转化、或是对接了其他转化代码的URL，将会影响模型的学习，进而影响您的广告投放效果。</p>
        </div>
        <br/>
        <h3 class="doc-title" id="anchor6">6、数据报表</h3>
        <div class="doc-instr"><b>Q: 什么是数据报表？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼提供多维度的数据报表，用以分析投放情况，便于优化账户及创意。</div>
        <br/>
        <div class="doc-title2" id="anchor61">6.1、 移动联盟</div>
        <div class="doc-instr"><b>Q: 什么是移动联盟？</b></div>
        <div class="doc-instr"><b>A: </b>移动联盟是新浪扶翼严选各优质流量平台流量的总称，客户可使用新浪扶翼将自身广告投放至各合作平台上，为客户增加更多曝光及点击，获得更优效果。</div>
        <div class="doc-instr"><b>Q: 移动联盟支持的创意模板有哪些？</b></div>
        <div class="doc-instr"><b>A: </b>目前移动联盟支持信息流和图片的创意模板。</div>
        <div class="doc-instr"><b>Q: 移动联盟目前接入了哪些平台？</b></div>
        <div class="doc-instr"><b>A: </b>移动联盟目前接入了阿里云系统、锁屏秀秀、魅族系统、好豆菜谱APP的优质平台。</div>
        <br/>
        <h3 class="doc-title" id="anchor7">7、账户优化</h3>
        <div class="doc-title2" id="anchor71">7.1、 移动联盟</div>
        <div class="doc-instr"><b>Q: 什么是移动联盟？</b></div>
        <div class="doc-instr"><b>A: </b>移动联盟是新浪扶翼严选各优质流量平台流量的总称，客户可使用新浪扶翼将自身广告投放至各合作平台上，为客户增加更多曝光及点击，获得更优效果。</div>
        <div class="doc-instr"><b>Q: 移动联盟支持的创意模板有哪些？</b></div>
        <div class="doc-instr"><b>A: </b>目前移动联盟支持信息流和图片的创意模板。</div>
        <div class="doc-instr"><b>Q: 移动联盟目前接入了哪些平台？</b></div>
        <div class="doc-instr"><b>A: </b>移动联盟目前接入了阿里云系统、锁屏秀秀、魅族系统、好豆菜谱APP的优质平台。</div>
        <br/>
        <div class="doc-instr"><b>Q: 账户为什么消耗为0？</b></div>
        <div class="doc-instr"><b>A: </b>账户消耗为0请依次检查账户是否存在以下问题：账户是否还有余额；广告组-广告-创意是否处于暂停（依次检查）；广告主或者创意状态是否为审核通过；组预算及出价是否过低；人群勾选条件是否过于苛刻。</div>
        <div class="doc-instr"><b>Q: 账户为什么曝光低？</b></div>
        <div class="doc-instr"><b>A: </b>请依次检查账户是否存在以下问题：组预算及出价是否过低；人群及时间定向过于苛刻；CTR或CPC偏低，导致整体ECPM低。</div>
        <div class="doc-instr"><b>Q: 为什么账户转化效果差？</b></div>
        <div class="doc-instr"><b>A: </b>依次检查账户是否存在以下问题：</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;1) 流量带入是否足够；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;2) 人群定向是否准确，可测试不同种定向方式观察转化效果；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;3) 创意是否明确表达了客户企业/产品信息，并重点突出；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;4) 创意与落地页内容是否相关；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;5) 落地页设计是否有利于转化；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;6) 客户追踪系统是否正常。</div>
        <div class="doc-instr"><b>Q: 为什么账户转化效果波动大，有时突然变差？</b></div>
        <div class="doc-instr"><b>A: </b>如若账户转化效果波动大可尝试以下方法：</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;1) 回顾最近操作记录，辨认可能是由哪些操作导致效果波动；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;2) 分析市场环境变化是否对客户有影响，是否针对行业变动相应地做了创意点跟进；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;3) 是否为直接竞争对手近期动作导致；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;4) 是否为客户行业周期性波动；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;5) 创意是否太过老旧，需要更新；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;6) 落地页是否有可优化点，引导转化；</div>
        <div class="doc-instr">&nbsp;&nbsp;&nbsp;&nbsp;7) 追踪链接是否正常，客户追踪系统是否正常；</div>
        <div class="doc-instr"><b>Q: 提高出价后，转化成本升高；降低出价，成本客户满意，但流量非常有限该怎么办？</b></div>
        <div class="doc-instr"><b>A: 误区解读：</b>出价提高并不是导致成本上升的根本原因，出价高低并不能决定转化成本高低。通过降低出价其实是用减少新用户量换取成本减少，转化规模会无法做大。</div>
        <div class="doc-instr"><b>&nbsp;&nbsp;&nbsp;&nbsp; 出现原因：</b> 出价提高，即ecpm提高从而使竞价胜出率提升，因此会得到更多的展示机会，即流量增加。但随着流量和消耗的增加，在这些流量中，无转化流量的比例会有一定上升，从而会导致转化成本有所上升。</div>
        <div class="doc-instr"><b>&nbsp;&nbsp;&nbsp;&nbsp; 解决方案：</b> 调整投放时间段、投放地域定向，集中投放高转化时段和地域，提高转化率，屏蔽无转化时段和地域；创意主旨明确，规避非目标用户点击；尝试不同落地页转化效果，持续进行A/B test。</div>
        <h3 class="doc-title" id="anchor8">8、8数据报表</h3>
        <div class="doc-instr"><b>Q: 什么是数据报表？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼提供多维度的数据报表，用以分析投放情况，便于优化账户及创意。</div>
        <br/>
        <div class="doc-title2" id="anchor81">8.1、 创意相关</div>
        <div class="doc-instr">下载快速学习扶翼广告创意操作相关知识。</div>
        <div class="doc-instr"><b>Q: 扶翼都有哪些创意尺寸可以选择？</b></div>
        <div class="doc-instr"><b>A: </b>如下图所示：</div>
        <h3 class="doc-title" id="anchor9">9、数据报表</h3>
        <div class="doc-instr"><b>Q: 什么是数据报表？</b></div>
        <div class="doc-instr"><b>A: </b>新浪扶翼提供多维度的数据报表，用以分析投放情况，便于优化账户及创意。</div>
        <div class="doc-title2" id="anchor91">9.1、 创意相关</div>
        <div class="doc-instr">下载快速学习扶翼广告创意操作相关知识。</div>
        <div class="doc-instr"><b>Q: 扶翼都有哪些创意尺寸可以选择？</b></div>
        <div class="doc-instr"><b>A: </b>如下图所示：</div>
        <br/>
      </div>
    </div>
  </div>
</template>
<script>
  import XCatalog from '../components/catalog/catalog'

  export default {
    components: {
      XCatalog
    },
    data () {
      return {
        // catalogList: [
        //   {
        //     name: '一级目录1',
        //     value: 'anchor1',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor11'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录2',
        //     value: 'anchor2',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor21'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录3',
        //     value: 'anchor3',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor31'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录4',
        //     value: 'anchor4',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor41'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录5',
        //     value: 'anchor5',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor51'
        //       },
        //       {
        //         name: '定向方案',
        //         value: 'anchor52'
        //       },
        //       {
        //         name: '效果评估',
        //         value: 'anchor53'
        //       },
        //       {
        //         name: '4、运营提示',
        //         value: 'anchor54'
        //       },
        //       {
        //         name: '5、效果工具',
        //         value: 'anchor55'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录6',
        //     value: 'anchor6',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor61'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录7',
        //     value: 'anchor7',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor71'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录8',
        //     value: 'anchor8',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor81'
        //       }
        //     ]
        //   },
        //   {
        //     name: '一级目录9',
        //     value: 'anchor9',
        //     children: [
        //       {
        //         name: '二级目录',
        //         value: 'anchor91'
        //       }
        //     ]
        //   }
        // ]
        titleSelectors: ['doc-title', 'doc-title2'],
        parentSelector: '.cont-table'
      }
    },
    methods: {
    },
    mounted () {
    }
  }
</script>
<style scoped>
  .cont-table {
    margin-left: 210px;
  }
</style>
