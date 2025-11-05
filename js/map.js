// Map heatmap for province-level visualization using ECharts

(function () {
  const container = document.getElementById('chinaMap');
  if (!container || typeof echarts === 'undefined') return;

  const chart = echarts.init(container);

  // Normalize region names to match GeoJSON feature names
  const nameMap = {
    '北京': '北京市',
    '天津': '天津市',
    '上海': '上海市',
    '重庆市': '重庆市',
    '重庆': '重庆市',
    '内蒙古': '内蒙古自治区',
    '四川省': '四川省',
    '浙江省': '浙江省',
    '陕西省': '陕西省',
    '河南省': '河南省',
    '江苏省': '江苏省',
    '广东省': '广东省',
    '安徽省': '安徽省',
    '山东省': '山东省',
    '贵州省': '贵州省',
    '湖南省': '湖南省',
    '山西省': '山西省',
    '云南省': '云南省',
    '黑龙江省': '黑龙江省',
    '吉林省': '吉林省',
    '甘肃省': '甘肃省',
    '广西': '广西壮族自治区',
    '广西壮族自治区': '广西壮族自治区',
    '武汉': '湖北省' // 数据中为城市，归属湖北省
  };

  const allProvinces = [
    '北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '内蒙古自治区',
    '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省',
    '广东省', '广西壮族自治区', '海南省', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省',
    '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'
  ];

  const provinceCounts = Object.fromEntries(allProvinces.map(p => [p, 0]));
  const provinceCompanies = Object.fromEntries(allProvinces.map(p => [p, '']));

  // Data from data.js; prefer global `data` (non-module scripts), fallback to window.data
  const srcData = (typeof data !== 'undefined' && Array.isArray(data))
    ? data
    : (Array.isArray(window.data) ? window.data : []);

  if (Array.isArray(srcData)) {
    srcData.forEach(item => {
      const normalized = nameMap[item.region] || item.region;
      if (provinceCounts.hasOwnProperty(normalized)) {
        provinceCounts[normalized] += item.count;
        provinceCompanies[normalized] = item.companies || '';
      }
    });
  }

  const mapData = allProvinces.map(name => ({ name, value: provinceCounts[name] || 0 }));
  const maxVal = Math.max(...mapData.map(d => d.value));

  // Fetch China GeoJSON and render with robust fallback
  function fetchJSON(url) {
    return fetch(url, { cache: 'no-cache' }).then(async (r) => {
      const contentType = r.headers.get('content-type') || '';
      if (!r.ok) {
        const text = await r.text();
        throw new Error(`HTTP ${r.status} from ${url}: ${text.slice(0, 120)}...`);
      }
      if (!/application\/json|json/.test(contentType)) {
        const text = await r.text();
        throw new Error(`Non-JSON response from ${url}: ${text.slice(0, 120)}...`);
      }
      return r.json();
    });
  }

  function loadChinaGeoJSON() {
    const sources = [
      // Local bundled file preferred to avoid external CDN/CORS/403 issues
      'maps/china.json',
      // Public npm CDNs
      'https://fastly.jsdelivr.net/npm/echarts@5/map/json/china.json',
      'https://cdn.jsdelivr.net/npm/echarts@5/map/json/china.json',
      'https://unpkg.com/echarts@5/map/json/china.json',
      // Aliyun as a later fallback
      'https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=100000_full'
    ];

    let lastError = null;
    const tryNext = (i) => {
      if (i >= sources.length) return Promise.reject(lastError || new Error('No sources available'));
      const url = sources[i];
      return fetchJSON(url).catch(err => {
        lastError = err;
        console.warn(`地图数据源失败，尝试备用源(${i + 1}/${sources.length}):`, url, err.message);
        return tryNext(i + 1);
      });
    };
    return tryNext(0);
  }

  loadChinaGeoJSON()
    .then(geoJson => {
      echarts.registerMap('china', geoJson);

      // Build feature name set from loaded GeoJSON
      const featureNames = new Set(
        Array.isArray(geoJson.features)
          ? geoJson.features.map(f => (f.properties && f.properties.name) || '')
          : []
      );

      // Convert normalized province names (e.g., '河北省', '广西壮族自治区')
      // to feature names in GeoJSON (e.g., '河北', '广西').
      function toFeatureName(name) {
        const special = {
          '广西壮族自治区': '广西',
          '新疆维吾尔自治区': '新疆',
          '西藏自治区': '西藏',
          '内蒙古自治区': '内蒙古',
          '宁夏回族自治区': '宁夏',
          '香港特别行政区': '香港',
          '澳门特别行政区': '澳门',
          '重庆市': '重庆',
          '北京市': '北京',
          '上海市': '上海',
          '天津市': '天津',
          '台湾省': '台湾'
        };
        if (special[name]) return special[name];
        // Strip common suffixes like 省/市/自治区
        return name.replace(/(省|市|自治区|特别行政区)$/u, '');
      }

      // Map counts to feature names for correct coloring
      const countsByFeature = {};
      Object.keys(provinceCounts).forEach(n => {
        const fname = toFeatureName(n);
        countsByFeature[fname] = (countsByFeature[fname] || 0) + (provinceCounts[n] || 0);
      });

      // Build series data based on actual feature names present in the GeoJSON
      const mapData = Array.from(featureNames).map(n => ({ name: n, value: countsByFeature[n] || 0 }));
      const maxVal = mapData.length ? Math.max(...mapData.map(d => d.value)) : 0;

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: params => {
            const val = params.value || 0;
            return `${params.name}<br/>企业数：${val}`;
          }
        },
        visualMap: {
          type: 'piecewise',
          orient: 'vertical',
          left: 20,
          bottom: 40,
          textStyle: { color: '#ffffff' },
          pieces: [
            { value: 0, color: '#bfbfbf', label: '无数据' },
            { min: 1, max: 2, color: '#22c55e', label: '1–2' },
            { min: 3, max: 5, color: '#3b82f6', label: '3–5' },
            { min: 6, max: 10, color: '#f59e0b', label: '6–10' },
            { min: 11, max: 20, color: '#ef4444', label: '11–20' },
            { min: 21, color: '#7c3aed', label: '21+' }
          ],
          calculable: false
        },
        series: [
          {
            name: '企业数',
            type: 'map',
            map: 'china',
            animation: true,
            animationDuration: 800,
            animationDurationUpdate: 500,
            animationEasing: 'quarticOut',
            roam: true,
            labelLayout: { hideOverlap: true },
            label: {
              show: true,
              formatter: params => `${params.name}\n${(params.value || 0)}家`,
              color: '#ffffff',
              fontSize: 10,
              backgroundColor: 'rgba(0,0,0,0.35)',
              padding: [2, 4],
              borderRadius: 4
            },
            itemStyle: {
              borderColor: 'rgba(255,255,255,0.45)',
              borderWidth: 0.8,
              shadowBlur: 6,
              shadowColor: 'rgba(0,0,0,0.35)'
            },
            emphasis: {
              label: { show: true, fontWeight: '700' },
              itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 1.2,
                shadowBlur: 12,
                shadowColor: 'rgba(255,255,255,0.5)'
              }
            },
            data: mapData
          }
        ]
      };

      chart.setOption(option);

      // Click to show details
      chart.on('click', params => {
        const regionName = params.name;
        const detailEl = document.getElementById('regionDetail');
        const companies = provinceCompanies[regionName];

        const companiesList = companies ? companies.split('；') : [];
        const itemsHtml = companiesList.length
          ? companiesList.map((c, i) => `<div class="company-item" style="opacity:0; animation:listFadeUp 0.35s ease forwards; animation-delay:${i * 0.05}s">${c}</div>`).join('')
          : '<div class="company-item" style="opacity:0; animation:listFadeUp 0.35s ease forwards; animation-delay:0s">该地区暂无企业数据</div>';

        detailEl.innerHTML = `
          <h3 class="section-title">${regionName} 企业列表</h3>
          <div class="companies-list">${itemsHtml}</div>
        `;
        // Trigger panel entrance animation
        detailEl.classList.remove('panel-enter');
        void detailEl.offsetWidth; // reflow to restart animation
        detailEl.classList.add('panel-enter');
        // Bind click events for items in the detail panel
        if (typeof bindCompanyItemEvents === 'function') {
          bindCompanyItemEvents(detailEl);
        }
      });

      window.addEventListener('resize', () => chart.resize());
    })
    .catch(err => {
      console.error('加载中国地图数据失败：', err);
      const detailEl = document.getElementById('regionDetail');
      if (detailEl) {
        detailEl.innerHTML = '<div class="company-item">地图数据加载失败，请刷新或切换网络后重试。</div>';
      }
    });
})();