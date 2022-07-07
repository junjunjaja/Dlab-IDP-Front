import {FilterStateObj, FundDataType} from "./p2Usertyp";
import type { ColumnsType } from "antd/lib/table"

// Filter Default action
export const FILTER_ACTION = {
    'CATEGORY_ADD':'categoryAdd',
    'CATEGORY_DEL':'categoryDel',
    'FLOAT_ADD':'floatAdd',
    'FLOAT_UPDATE':'floatUpdate',
    'REPLACE':'replaceDispatch'
};

// Filter Default action
export const INIT_FILST: FilterStateObj = {
    category: [

    ],
    float :[
        {'name':'debt','value':[200E8,800E8]},
    ]
};

// need to be fixed by real min max value
export const MM_DEBT:[number,number] = [0,5000E8]

// labels for each filter (label : button1 button2 ...) | (label \n slider ---- )
export const LABELS = {
    'it' : '투자 유형',
    'seniorstr': '대출 순위',
    'at' : '자산 유형',
    'debt' : '대출 약정금',
    'rate': '금리 종류',
    'loancls':'대출 분류',

}
// sorting params name
export const SORT_LABELS = {
    'it' : '투자 유형',
    'seniorstr': '대출 순위',
    'at' : '자산 유형',
    'debt' : '대출 약정금',
    'rate': '금리 종류',
    'fn':"펀드명",
    'lpcorp':"대주명회사",
    'an':"자산명",
    'loanamt':"대출약정금",
    'aum':"대출총액",
    'sdaterate':"체결이자",
    'duration':"듀레이션",
    'loancls':'대출 분류',

}


export const CARD_LABELS = {
    'fn':"펀드명",
    'lpcorp':"대주명회사",
    'an':"자산명",
    'loanamt':"대출약정금",
    'loan':"대출총액",
    'sdaterate':"체결이자",
    'duration':"듀레이션",
    'at' : '자산 유형',
    'it' : '투자 유형',
    'seniorstr': '대출 순위',
    'rate': '금리 종류',
    'loancls':'대출 분류',
    }

export const APIURL = {
    ROWCOUNT:"/api/v1/debtRowCount",
    TABLE : "/api/v1/debt/dataTable",
    CARD_ALL:"/api/v1/debt/dataTable",
    PLTONE:"/api/v1/debt/graphLeft",
    PLTTWO:"/api/v1/debt/graphRight",
    CARDPAGE:"/api/v1/debt/dataTable" //will be replace
}
// PLTONE:"http://localhost:8080/api/v1/debt/graphLeft",
// PLTTWO:"http://localhost:8080/api/v1/debt/graphRight",


export const TEMPCSS = {
    "height": 2235,
    "width": 1440,
    "left": 761,
    "top": -560,
    "border-radius": 0
}

// For draggin type def
export const ItemTypes = {
    ContentS : 'ContentS',

}


export const FundColumns: ColumnsType<FundDataType> = [
    { title: '펀드코드', dataIndex: 'fc', key: 'fc', fixed: 'left', width: 100, sorter: true },
    { title: '자산명', dataIndex: 'an', key: 'an', fixed:'left', width: 150, ellipsis: true },
    { title: '펀드명', dataIndex: 'fn', key: 'fn', fixed: 'left', width: 250, ellipsis: true },
    { title: 'LOAN 총액', dataIndex: 'loan', key: 'loan', width: 200 , sorter: true },
    { title: '대출약정금', dataIndex: 'loanamt', key: 'loanamt', width: 200 , sorter: true },
    { title: '대주명', dataIndex: 'lpcorp', key: 'lpcorp', width: 170, ellipsis: true },
    { title: '대주명분류', dataIndex: 'lpt', key: 'lpt', width: 120 },
    { title: '대출순위', dataIndex: 'seniorstr', key: 'seniorstr', width: 100 },
    { title: '체결일이자율', dataIndex: 'sdaterate', key: 'sdaterate', width: 120, sorter: true  },

    { title: '토지주소', dataIndex: 'addr', key: 'addr', width: 150, ellipsis: true },
    { title: '설정일', dataIndex: 'sdate', key: 'sdate', width: 120 , sorter: true },
    { title: '만기일', dataIndex: 'mdate', key: 'mdate', width: 120 , sorter: true },
    { title: '국내/해외', dataIndex: 'domfor', key: 'domfor', width: 100 },
    { title: '펀드구분', dataIndex: 'ft', key: 'ft', width: 100 },
    { title: '투자전략', dataIndex: 'strat', key: 'strat', width: 100 },
    { title: '연면적(평)', dataIndex: 'area', key: 'area', width: 100 },
    { title: 'EQUITY 총액', dataIndex: 'equity', key: 'equity', width: 200 , sorter: true },

    { title: 'AUM 총액', dataIndex: 'aum', key: 'aum', width: 200 , sorter: true },
    { title: 'LTV', dataIndex: 'ltv', key: 'ltv', width: 120 , sorter: true },
    { title: '롤오버', dataIndex: 'ro', key: 'ro', width: 100 },
    { title: '대출계약체결일', dataIndex: 'loandate', key: 'loandate', width: 130 },
    { title: '대주수', dataIndex: 'lpnum', key: 'lpnum', width: 70 , sorter: true },
    { title: '대주', dataIndex: 'lp', key: 'lp', width: 170, ellipsis: true },


    { title: '대출용도', dataIndex: 'loanuse', key: 'loanuse', width: 150, ellipsis: true },
    { title: '대출종류', dataIndex: 'loantype', key: 'loantype', width: 150 },
    { title: '대출분류', dataIndex: 'loancls', key: 'loancls', width: 100 },

    { title: '대출금상환방식', dataIndex: 'loanrpy', key: 'loanrpy', width: 200 },
    { title: '금리종류', dataIndex: 'rate', key: 'rate', width: 100 },
    { title: '대출이자율분류', dataIndex: 'loanintcls', key: 'loanintcls', width: 120 },
    { title: '변동이자율기준', dataIndex: 'loanintfloat', key: 'loanintfloat', width: 120 },

    { title: '스프레드', dataIndex: 'spread', key: 'spread', width: 120 },
    { title: '대출취급수수료', dataIndex: 'loanpremium', key: 'loanpremium', width: 120 },
    { title: '이자기간', dataIndex: 'intdur', key: 'intdur', width: 100 },
    { title: '연체이자율', dataIndex: 'laterate', key: 'laterate', width: 150 },
    { title: '연체이자율분류', dataIndex: 'lateratecls', key: 'lateratecls', width: 100 },
    { title: '체결일연체이자율', dataIndex: 'sdatelaterate', key: 'sdatelaterate', width: 100 },
    { title: '조기상환수수료', dataIndex: 'earlypremium', key: 'earlypremium', width: 200, ellipsis: true },
    { title: '조기상환 수수료분류', dataIndex: 'earlypremiumcls', key: 'earlypremiumcls', width: 100 },
    { title: '담보한도율', dataIndex: 'guranteelimit', key: 'guranteelimit', width: 100 },
    { title: 'DSCR', dataIndex: 'dscr', key: 'dscr', width: 100 },
    { title: '이자유보금', dataIndex: 'intdeposit', key: 'intdeposit', width: 100 },
    { title: '채무불이행요건', dataIndex: 'default', key: 'default', width: 120, ellipsis: true },
    { title: '대주의의사결정', dataIndex: 'opinion', key: 'opinion', width: 120, ellipsis: true },
    { title: '차주', dataIndex: 'lender', key: 'lender', width: 150, ellipsis: true },
    { title: '신탁업자', dataIndex: 'trustee', key: 'trusted', width: 150, ellipsis: true },
    { title: '집합투자업자', dataIndex: 'amc', key: 'amc', width: 150, ellipsis: true },
    { title: '대리금융기관', dataIndex: 'financialinst', key: 'financialinst', width: 150, ellipsis: true },
    { title: '자금관리자', dataIndex: 'mm', key: 'mm', width: 150, ellipsis: true },
    { title: '자금보충인', dataIndex: 'cashsupp', key: 'cashsupp', width: 150, ellipsis: true },
    { title: '채무인수인', dataIndex: 'debtundwrt', key: 'debtundwrt', width: 100, ellipsis: true },
    { title: '시공사', dataIndex: 'builder', key: 'builder', width: 150, ellipsis: true },
    { title: '듀레이션', dataIndex: 'duration', key: 'duration', width: 100 },
]
