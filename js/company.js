// Company details dataset and click binding helpers

// Minimal dataset for verification; can be expanded later
window.companyDetails = {
  '中国电力工程顾问集团华北电力设计院有限公司': {
    type: '央企/国企',
    business: '电力与综合能源咨询、勘察设计、EPC总承包、运维服务',
    industry: '能源电力/工程设计',
    location: '北京市',
    website: 'http://www.ncpe.ceec.net.cn/'
  },
  '中国核电工程有限公司': {
    type: '央企/核能工程',
    business: '核电工程总承包、规划设计、工程管理、技术服务',
    industry: '核能/工程总承包',
    location: '北京市',
    website: 'https://www.cnpe.cc/'
  },
  '国核电力规划设计研究院有限公司': {
    type: '央企/能源设计',
    business: '核能、新能源、电网规划咨询、勘察设计、科研与EPC',
    industry: '能源/工程设计',
    location: '北京市',
    website: 'https://www.snpdri.com/'
  },
  '中国电子工程设计院股份有限公司': {
    type: '国企/综合设计院',
    business: '电子信息与智慧城市工程咨询、规划设计、总承包、运维',
    industry: '电子信息/工程设计',
    location: '北京市',
    website: 'https://www.ceedi.com.cn/'
  },
  '中铁工程设计咨询集团有限公司': {
    type: '央企控股/综合设计咨询',
    business: '铁路、城市轨道、公路、市政规划勘察设计、咨询、总承包、监理、科研',
    industry: '交通基础设施/工程设计',
    location: '北京市',
    website: 'https://www.cec-cn.com.cn/'
  },
  '中交公路规划设计院有限公司': {
    type: '央企/交通设计',
    business: '公路桥梁隧道规划勘察设计、咨询、EPC、监测与养护',
    industry: '交通/市政',
    location: '北京市',
    website: 'https://www.hpdi.com.cn/'
  },
  '黄河勘测规划设计研究院有限公司': {
    type: '央企/科研院所',
    business: '水利水电勘测规划设计',
    industry: '水利/水电',
    location: '河南省',
    website: 'http://www.yrec.cn/'
  },
  '苏交科集团股份有限公司': {
    type: '上市公司',
    business: '交通工程咨询设计与检测',
    industry: '交通/市政',
    location: '江苏省',
    website: 'https://www.jsti.com/'
  },
  '广州地铁设计研究院股份有限公司': {
    type: '股份制企业',
    business: '城市轨道交通工程设计',
    industry: '轨道交通/市政',
    location: '广东省',
    website: 'https://www.gmdi.cn/'
  },
  '信息产业电子第十一设计研究院科技工程股份有限公司': {
    type: '股份制企业',
    business: '电子信息、集成电路、生物医药、新能源等领域工程咨询、勘察设计与EPC',
    industry: '电子信息/工程设计',
    location: '四川省',
    website: 'http://www.edri.net.cn/'
  },
  '中国电建集团成都勘测设计研究院有限公司': {
    type: '央企/综合勘测设计',
    business: '水利水电、新能源、环境治理、市政交通与基础设施的规划勘测设计、咨询与EPC总承包',
    industry: '能源/工程设计',
    location: '四川省',
    website: 'http://www.chidi.com.cn/'
  },
  '中国成达工程有限公司': {
    type: '央企/工程总承包',
    business: '石油化工、煤化工、天然气与储能等领域的工程咨询、设计、采购、施工与运营',
    industry: '石油化工/工程总承包',
    location: '四川省',
    website: 'https://www.chengda.com/index.aspx'
  },
  '中铁二院工程集团有限责任公司': {
    type: '央企/综合勘察设计',
    business: '铁路、城市轨道、公路、市政等领域的规划、勘察设计、咨询、监理与EPC',
    industry: '交通基础设施/工程设计',
    location: '四川省',
    website: 'http://www.creegc.com/'
  },
  '中国电力工程顾问集团西南电力设计院有限公司': {
    type: '央企/电力设计',
    business: '电力与新能源工程的勘测设计、咨询与EPC总承包',
    industry: '能源电力/工程设计',
    location: '四川省',
    website: 'http://www.swepdi.ceec.net.cn/'
  },
  '四川省公路规划勘察设计研究院有限公司': {
    type: '省属国企/交通设计',
    business: '公路、市政、建筑、轨道等领域的勘察设计、咨询、试验检测与养护',
    industry: '交通/市政',
    location: '四川省',
    website: 'https://www.schdri.com/'
  },
  '中交第二航务工程勘察设计院有限公司': {
    type: '央企/航务工程设计',
    business: '水运、公路、市政等工程勘察设计与工程总承包',
    industry: '交通/航务工程',
    location: '湖北省',
    website: 'https://www.ctesi.com.cn/'
  },
  '中铁大桥勘测设计院集团有限公司': {
    type: '央企/桥梁勘测设计',
    business: '桥梁、铁路、公路、市政等勘测设计与咨询',
    industry: '交通基础设施/工程设计',
    location: '湖北省',
    website: 'https://www.brdi.com.cn/'
  },
  '中国市政工程中南设计研究总院有限公司': {
    type: '央企/综合市政设计院',
    business: '市政、建筑、公路、水利、电力规划设计与工程总承包',
    industry: '市政/工程设计',
    location: '湖北省',
    website: 'https://www.znszy.com.cn/'
  },
  '中铁第五勘察设计院集团有限公司': {
    type: '央企/综合型国家甲级设计院',
    business: '铁路、公路、城市轨道交通、市政工程等领域的勘察、设计、咨询、总承包',
    industry: '工程设计',
    location: '北京市',
    website: 'https://www.t5y.cn/'
  },
  '中交水运规划设计院有限公司': {
    type: '央企/交通运输行业骨干设计院',
    business: '港口、航道、水运工程的规划、设计、咨询、总承包',
    industry: '工程设计',
    location: '北京市',
    website: 'http://www.pdiwt.com.cn/'
  },
  '北京市市政工程设计研究总院有限公司': {
    type: '地方国企/综合市政设计院',
    business: '城市道路、桥梁、给排水、燃气、热力等市政工程的设计、咨询',
    industry: '市政/工程设计',
    location: '北京市',
    website: 'https://www.bmedi.cn/'
  },
  '北京城建设计发展集团股份有限公司': {
    type: '地方国企/城市建设领域综合服务商',
    business: '城市轨道交通、综合交通枢纽、地下空间、工业与民用建筑等领域的规划、设计、咨询',
    industry: '城市建设/工程设计',
    location: '北京市',
    website: 'https://www.bucg.com/'
  },
  '中铁第四勘察设计院集团有限公司': {
    type: '央企/综合勘察设计',
    business: '铁路、公路、城市轨道交通、市政工程等领域的勘察、设计、咨询、总承包',
    industry: '工程设计',
    location: '湖北省',
    website: 'http://www.cr-4di.com.cn/'
  },
  '湖北省建科国际工程有限公司': {
    type: '地方国企/建筑科研',
    business: '建筑工程设计、咨询、监理、检测、施工',
    industry: '建筑/工程设计',
    location: '湖北省',
    website: 'http://www.hbjkjt.com.cn/'
  },
  '中冶南方工程技术有限公司': {
    type: '央企/工程技术',
    business: '钢铁、环保、市政、建筑等领域的工程总承包、设备制造、技术服务',
    industry: '冶金/工程设计',
    location: '湖北省',
    website: 'https://www.wisdri.com/'
  },
  '长江勘测规划设计研究有限责任公司': {
    type: '央企/水利水电勘测设计',
    business: '水利水电、新能源、生态环境等领域的规划、勘测、设计、科研、咨询、监理和总承包',
    industry: '水利/工程设计',
    location: '湖北省',
    website: 'https://www.cjwsjy.com.cn/'
  },
  '中国市政工程华北设计研究总院有限公司': {
    type: '央企/综合市政设计院',
    business: '市政、建筑、风景园林等领域的规划、设计、咨询、总承包',
    industry: '市政/工程设计',
    location: '天津市',
    website: 'https://www.cnwg.com.cn/'
  },
  '天津市市政工程设计研究总院有限公司': {
    type: '地方国企/综合市政设计院',
    business: '城市道路、桥梁、给排水、燃气、热力等市政工程的设计、咨询',
    industry: '市政/工程设计',
    location: '天津市',
    website: 'https://www.tmedi.com.cn/'
  }
};

// ——— 上海市企业 ———
Object.assign(window.companyDetails, {
  '中国电力工程顾问集团华东电力设计院有限公司': {
    type: '央企/电力设计',
    business: '电力系统规划咨询、勘察设计、EPC总承包、运维技术服务',
    industry: '能源电力/工程设计',
    location: '上海市',
    website: 'http://www.ecepdi.ceec.net.cn/'
  },
  '中船第九设计研究院工程有限公司': {
    type: '央企/工程设计',
    business: '船舶海工、工业与民用建筑、市政交通等领域工程咨询与设计',
    industry: '工业/工程设计',
    location: '上海市',
    website: 'http://www.ndri.sh.cn/'
  },
  '中铁上海设计院集团有限公司': {
    type: '央企/交通设计',
    business: '铁路、城市轨道、公路、市政等工程的勘察设计与咨询',
    industry: '交通基础设施/工程设计',
    location: '上海市',
    website: 'http://sty.sh.cn/'
  },
  '中交第三航务工程勘察设计院有限公司': {
    type: '央企/航务工程设计',
    business: '港口航道、水运工程、公路市政等勘察设计与EPC',
    industry: '交通水运/工程设计',
    location: '上海市',
    website: 'https://www.theidi.com/'
  },
  '上海市城市建设设计研究总院（集团）有限公司': {
    type: '地方国企/综合设计院',
    business: '城市建设、市政交通、建筑与地下空间等综合规划与设计',
    industry: '城市建设/工程设计',
    location: '上海市',
    website: 'https://www.sucdri.com/'
  },
  '上海市政工程设计研究总院（集团）有限公司': {
    type: '地方国企/市政设计',
    business: '市政道路、桥梁、给排水、燃气、热力等工程的设计咨询',
    industry: '市政/工程设计',
    location: '上海市',
    website: 'https://smedi.scg.com.cn/portal/index/'
  },
  '中石化上海工程有限公司': {
    type: '央企/石化工程',
    business: '石油化工工程设计、工程总承包、技术服务与项目管理',
    industry: '石油化工/工程设计',
    location: '上海市',
    website: 'http://ssec.sinopec.com/ssec/'
  }
});

// ——— 浙江省企业 ———
Object.assign(window.companyDetails, {
  '中国能源建设集团浙江省电力设计院有限公司': {
    type: '央企/电力设计',
    business: '电力与新能源工程咨询、勘测设计、EPC总承包与运维',
    industry: '能源电力/工程设计',
    location: '浙江省',
    website: 'http://www.zepdi.ceec.net.cn/'
  },
  '中国电建集团华东勘测设计研究院有限公司': {
    type: '央企/综合勘测设计',
    business: '水利水电、新能源、市政交通等规划勘测设计与总承包',
    industry: '工程设计',
    location: '浙江省',
    website: 'http://www.ecidi.com/'
  },
  '中石化宁波工程有限公司': {
    type: '央企/石化工程',
    business: '石油化工与新能源工程设计、采购、施工与总承包',
    industry: '石油化工/工程设计',
    location: '浙江省',
    website: 'http://snec.sinopec.com/snec/'
  },
  '中国联合工程有限公司': {
    type: '国企/综合工程设计',
    business: '工业与民用建筑、市政交通、环保等领域的工程咨询与设计',
    industry: '工程设计',
    location: '浙江省',
    website: 'http://www.chinacuc.com/'
  },
  '浙江数智交院科技股份有限公司': {
    type: '股份制/交通设计科技',
    business: '交通基础设施数字化、勘察设计与智慧交通技术服务',
    industry: '交通/工程设计',
    location: '浙江省',
    website: 'http://www.zjic.com/'
  }
});

// ——— 甘肃/云南/吉林企业 ———
Object.assign(window.companyDetails, {
  '中国电建集团昆明勘测设计研究院有限公司': {
    type: '央企/综合勘测设计',
    business: '水利水电、新能源、市政与基础设施规划勘测设计、咨询与EPC',
    industry: '能源/工程设计',
    location: '云南省',
    website: 'http://www.khidi.com/'
  },
  '中国电力工程顾问集团东北电力设计院有限公司': {
    type: '央企/电力设计',
    business: '传统电力、核电、新能源工程勘测设计、咨询与EPC总承包',
    industry: '能源电力/工程设计',
    location: '吉林省',
    website: 'http://www.nepdi.net/'
  },
  '中国市政工程西北设计研究院有限公司': {
    type: '央企控股/市政综合设计',
    business: '市政公用、建筑、水利、公路、轨道交通等规划设计咨询与总承包',
    industry: '市政/工程设计',
    location: '甘肃省',
    website: 'https://nwdesigninstitute.com/'
  }
});

// Build a company-to-region index from global data for fallback location
(function buildRegionIndexAndPlaceholders() {
  function classifyIndustry(name) {
    const n = (name || '').toLowerCase();
    if (/电力|能源/.test(name)) return '能源电力/工程设计';
    if (/核电|核能/.test(name)) return '核能/工程设计';
    if (/市政/.test(name)) return '市政/工程设计';
    if (/铁路|轨道|地铁/.test(name)) return '轨道交通/工程设计';
    if (/航务|水运|港口|航道/.test(name)) return '交通水运/工程设计';
    if (/公路|桥梁|交通/.test(name)) return '交通/工程设计';
    if (/石化|石油|化工/.test(name)) return '石油化工/工程总承包';
    if (/水利|水电|水务/.test(name)) return '水利水电/工程设计';
    if (/电子|信息|集成电路/.test(name)) return '电子信息/工程设计';
    if (/冶金|钢铁/.test(name)) return '冶金/工程技术';
    return '工程设计';
  }

  function buildCompanyRegionIndex() {
    const idx = {};
    try {
      if (typeof data !== 'undefined' && Array.isArray(data)) {
        data.forEach(d => {
          const region = d.region;
          const list = (d.companies || '').split('；').map(s => s.trim()).filter(Boolean);
          list.forEach(n => { if (n && !idx[n]) idx[n] = region; });
        });
      }
    } catch (e) {
      console.warn('构建公司-地区索引失败：', e);
    }
    return idx;
  }

  const regionIndex = buildCompanyRegionIndex();
  window.companyRegionIndex = regionIndex;

  function ensureCompanyPlaceholders() {
    Object.keys(regionIndex).forEach(name => {
      if (!window.companyDetails[name]) {
        window.companyDetails[name] = {
          type: '企业',
          business: '工程咨询/勘察设计/总承包（待补充）',
          industry: classifyIndustry(name),
          location: regionIndex[name] || '',
          website: ''
        };
      }
    });
  }

  ensureCompanyPlaceholders();

  // Enhance getCompanyInfo to merge with companyProfiles and fallback location
  function getCompanyInfoMerged(name) {
    const key = (name || '').trim();
    const base = window.companyDetails[key] || {
      type: '企业',
      business: '工程咨询/勘察设计/总承包（待补充）',
      industry: classifyIndustry(key),
      location: regionIndex[key] || '',
      website: ''
    };
    const profiles = (window.companyProfiles || {});
    const prof = profiles[key] || {};
    const location = base.location || prof.region || regionIndex[key] || '';
    return { name: key, ...base, ...prof, location };
  }

  // Override accessor to use merged info
  window.getCompanyInfo = getCompanyInfoMerged;
})();

// getCompanyInfo is overridden above to provide merged info

function handleCompanyClick(e) {
  e.stopPropagation();
  const name = (e.currentTarget.textContent || '').trim();
  const info = getCompanyInfo(name);
  // Dispatch a custom event for future modal integration
  window.dispatchEvent(new CustomEvent('company:selected', { detail: info }));
  // For step verification, log to console
  console.log('Company selected:', info);
}

function bindCompanyItemEvents(root) {
  const container = root || document;
  container.querySelectorAll('.company-item').forEach(el => {
    el.addEventListener('click', handleCompanyClick);
  });
}

// Expose helpers
window.bindCompanyItemEvents = bindCompanyItemEvents;