function chineseNumToInt( chineseNum ){
    const chineseNumBase = {
        '零': 0, 
        '一': 1, 
        '二': 2, 
        '三': 3,
        '四': 4, 
        '五': 5, 
        '六': 6, 
        '七': 7, 
        '八': 8, 
        '九': 9, 
        '壹': 1, 
        '贰': 2, 
        '叁': 3, 
        '肆': 4, 
        '伍': 5, 
        '陆': 6, 
        '柒': 7, 
        '捌': 8, 
        '玖': 9 },
          chineseNumPosition = [ '十', '百', '千', '万', '意', '拾', '佰', '仟', '万', '亿' ];
    let num = '',
        midSave,
        len = chineseNum.length;
    
    for( let i = 0; i < len; i++ ){
        let str = chineseNum[i],
            numKey = chineseNumBase[str];
        if( numKey !== void 0 ){
            num += numKey
            continue;
        }
        //不是基础数字
        if( i === 0 && str === '十' ){
            num += 10
        }
    }
    return num;
}
console.log(chineseNumToInt('十万零八百'))