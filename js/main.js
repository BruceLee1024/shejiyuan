// 生成柱状图
const barChart = document.getElementById('barChart');
const maxCount = Math.max(...data.map(d => d.count));
const topRegions = data.slice(0, 10);

topRegions.forEach((item, index) => {
    const percentage = (item.count / maxCount) * 100;
    const barItem = document.createElement('div');
    barItem.className = 'bar-item';
    barItem.innerHTML = `
        <div class="bar-label">${item.region}</div>
        <div class="bar-container">
            <div class="bar-fill" style="width: 0%">${item.count}</div>
        </div>
    `;
    barChart.appendChild(barItem);
    
    setTimeout(() => {
        barItem.querySelector('.bar-fill').style.width = percentage + '%';
    }, index * 100 + 500);
});

// 生成地区卡片
const regionsGrid = document.getElementById('regionsGrid');
data.forEach((item, index) => {
    const companiesList = item.companies.split('；');
    const card = document.createElement('div');
    card.className = 'region-card fade-in';
    card.style.animationDelay = (0.5 + index * 0.05) + 's';
    
    card.innerHTML = `
        <div class="region-header">
            <div class="region-name">${item.region}</div>
            <div class="region-badge">${item.count} 家</div>
        </div>
        <div class="companies-list">
            ${companiesList.map(company => `<div class="company-item">${company}</div>`).join('')}
        </div>
        <div class="expand-indicator">
            <span>查看企业列表</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
    `;
    
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
    
    regionsGrid.appendChild(card);
    // Bind click events for company items inside this card
    if (typeof bindCompanyItemEvents === 'function') {
        bindCompanyItemEvents(card);
    }
});

// 更新统计卡片数据
const totalCompaniesEl = document.getElementById('totalCompanies');
const coveredRegionsEl = document.getElementById('coveredRegions');
const beijingCompaniesEl = document.getElementById('beijingCompanies');

if (totalCompaniesEl) {
    const totalCompanies = data.reduce((sum, d) => sum + d.count, 0);
    totalCompaniesEl.textContent = totalCompanies;
}

if (coveredRegionsEl) {
    coveredRegionsEl.textContent = data.length;
}

if (beijingCompaniesEl) {
    const beijingCount = (data.find(d => d.region === '北京') || { count: 0 }).count;
    beijingCompaniesEl.textContent = beijingCount;
}